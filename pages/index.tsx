import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";
import Container from "../components/container";
import Nav from "../components/nav";
import Social from "../components/social";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <section className="flex flex-col col-span-9 text-left h-screen justify-center lg:col-span-4 lg:col-start-2">
          <div className="flex flex-col lg:flex-row mb-2">
            <h1 className="text-4xl font-medium pr-2"></h1>
            <h1 className="text-4xl font-extrabold"></h1>
          </div>
          <p className="text-lg font-medium"></p>
          <Social />
        </section>
      </Container>
    </Fragment>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Meta
        title="Home"
        description="Clean Attitude - Carpet Cleaning and More"
        robots={true}
        keywords="clean, attitude, san, diego, carpet, cleaning, more, cheap, quality, home, house"
      />
      <Nav />
      <main>{page}</main>
    </Layout>
  );
};

export default Home;
