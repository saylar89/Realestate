import Layout from "../components/layout/layout";
import fs from "fs/promises";
import path from "path";
import { GetStaticProps } from "next";
import Link from "next/link";

const Rent = ({
  products,
}: {
  products: {
    id: string;
    title: string;
  }[];
}) => {
  return (
    <Layout pageTitle="Rent">
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  if (data.products.length === 0) {
    return {
      notFound: true, //it's render the 404 page instead normal page
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 600,
    //During development,the page will be re-generated for every request, no matter what you enter here.
    //But in production revalidate number will matter
  };
};

export default Rent;
