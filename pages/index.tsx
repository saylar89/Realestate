import Cards from "../components/homepage/card";
import Carousels from "../components/homepage/carousel";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="container">
        <br />
        <div>
          <Carousels />
        </div>
        <br />
        <div>
          <Cards />
        </div>
      </div>
    </Layout>
  );
}
