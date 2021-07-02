import React from "react";
import path from "path";
import fs from "fs/promises";

const ProductDetails = (props) => {
  const { loadedproduct } = props;
  return (
    <>
      <h1>{loadedproduct.title}</h1>
      <p>DESCRIPTION</p>
    </>
  );
};

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const paths = data.products.map((products) => ({
    params: { pid: products.id },
  }));

  return { paths, fallback: false };
  /**
   * fallback: true is useful if your app has a very large number of static pages that depend on data 
   * (think: a very large e-commerce site). 
   * You want to pre-render all product pages, but then your builds would take forever.
   */
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedproduct: product,
    },
  };
}

export default ProductDetails;
