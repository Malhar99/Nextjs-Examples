/**
 * getStaticProps (Static Generation): Fetch data at build time.
 * 
 * If you export an async function called getStaticProps from a page, 
 * Next.js will pre-render this page at build time using the props returned by getStaticProps.
 */


import path from 'path';
import fs from "fs/promises";
import Link from 'next/link'

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  //console.log("re-generating")
  const filePath = path.join(process.cwd(), 'dummy-backend.json')  
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if(!data){
    return{
      redirect:{
        destination :"/Name of route "
      }
    }
  }

  if(data.products.length === 0){
    return{
      notFound: true // It is used to return 404 not found page default Page
    }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10, // For ISR to regenerate the code every n secends
  };
}

export default HomePage;
