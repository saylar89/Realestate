import Cards from "../components/homepage/card";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="container">
        <br />
        <br />
        <div>
          <Cards />
        </div>
      </div>
    </Layout>
  );
}
