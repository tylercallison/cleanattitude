import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";
import Container from "../components/container";
import Nav from "../components/nav";
import Social from "../components/social";

const Works = () => {
  return (
    <Fragment>
      <Container>
        <section className="flex flex-col col-span-9 text-left h-screen justify-center lg:col-span-4 lg:col-start-2">
          <div className="flex flex-col lg:flex-row mb-2">
            <h1 className="text-4xl font-medium pr-2">Hi, I&apos;m</h1>
            <h1 className="text-4xl font-extrabold">Tyler Callison</h1>
          </div>
          <p className="text-lg font-medium">
            I&apos;m currently a student at SDSU majoring in Computer Science
            and a UI Engineering Intern @ Crowdstrike
          </p>
          <Social />
        </section>
      </Container>
    </Fragment>
  );
};

Works.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Meta
        title="Home"
        description="Tyler Callison - UI Engineer"
        robots={true}
        keywords="tyler, callison, software, website, web, developer, ui, engineer, home"
      />
      <Nav />
      <main>{page}</main>
    </Layout>
  );
};

export default Works;
