function UserProfilePage(props) {
  return <h1>{props.username}</h1>
}

export default UserProfilePage;

/**
 * You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time. 
 * Time to first byte (TTFB) will be slower than getStaticProps because the server must compute the result on every request,
 * and the result cannot be cached by a CDN without extra configuration.
 */

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  
  return {
    props: {
      username: 'Max'
    }
  };
}