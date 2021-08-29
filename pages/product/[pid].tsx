import { Fragment } from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import fs from "fs/promises";
import path from "path";

interface productType {
  products: {
    id: string;
    title: string;
    description: string;
  }[];
}

const ProductDetailPage = ({
  loadedProduct,
}: {
  loadedProduct: {
    id: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

type Params = {
  params: {
    pid: string;
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context as Params;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data: productType = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

export default ProductDetailPage;
