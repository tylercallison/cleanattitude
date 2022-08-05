import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Contact = () => {
  return <Fragment></Fragment>;
};

Contact.getLayout = function getLayout(page: ReactElement) {
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
      <Footer />
    </Layout>
  );
};

export default Contact;
