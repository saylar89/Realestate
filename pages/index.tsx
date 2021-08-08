import Cards from "../components/homepage/card";
import Carousels from "../components/homepage/carousel";
import Layout from "../components/layout/layout";

export default function Home() {
  return (
    <Layout
      pageTitle="Home"
      description="description"
      content="Best place for buy and sell your house"
    >
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
