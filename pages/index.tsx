import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";
import Container from "../components/container";
import Nav from "../components/nav";
import Card from "../components/card";
import Image from "next/future/image";
import Footer from "../components/footer";
// import Carousel from "../components/carousel";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <div className="flex flex-col col-span-9 text-left h-screen justify-center lg:col-span-4 lg:col-start-2">
          <div className="flex flex-col lg:flex-row mb-2">
            <h1 className="text-4xl font-extrabold">Clean Attitude</h1>
          </div>
          <p className="text-lg font-medium">
            Carpet Cleaning and More - The best prices in town
          </p>
        </div>
        <div className="flex flex-col col-span-9 justify-center lg:col-span-4 lg:col-start-7">
          {/* <Carousel /> */}
        </div>
      </Container>
      <Container className="bg-lime-400 w-full">
        <section className="grid grid-cols-12 container mx-auto col-span-10 gap-10 justify-center lg:col-start-2 py-12">
          <Card
            title="The Right Equipment"
            description="Our unibody alignment equipment allows us to meet manufacturers' specifications within 1/100th of an inch to ensure the safety and precision of your vehicle. Our spray booth features the patented, dust-free downdraft system essential to a perfect glass-like finish on your vehicle."
          >
            <Image
              src="/images/right-equipment.jpeg"
              alt="The Right Equipment"
              width={500}
              height={500}
              className="w-full"
            />
          </Card>
          <Card
            title="The Right Attitude"
            description="Each person in our shop, from the receptionist to the parts manager, is dedicated to customer satisfaction. We strive to provide quality service and products to you, our client. We treat each vehicle as if it were our own. All this, because if you're happy with the results, you'll come back."
          >
            <Image
              src="/images/right-attitude.jpeg"
              alt="The Right Attitude"
              width={500}
              height={500}
              className="w-full"
            />
          </Card>
          <Card
            title="The Right Shop"
            description="We have the experience, the equipment, and our technicians are I-CAR Gold Certified to properly repair your vehicle. We will be happy to work with your insurance company to minimize your inconvenience. After all, we've been in the business for over 30 years."
          >
            <Image
              src="/images/right-shop.jpeg"
              alt="The Right Shop"
              width={500}
              height={500}
              className="w-full"
            />
          </Card>
        </section>
      </Container>
      <Container>
        <section className="grid grid-cols-12 container mx-auto col-span-10 justify-center lg:col-start-2 mt-12">
          <Image
            src="/images/car-parked.jpeg"
            width={1000}
            height={1000}
            className="w-full col-span-12"
            alt="Parked Car"
          />
        </section>
      </Container>
      <Container>
        <section className="flex container mx-auto col-span-10 justify-center lg:col-start-2 my-12 itmes-center">
          <div className="col-span-12 italic">
            Thank you for considering us for your carpet cleaning. We’ll go the
            extra mile to ensure your satisfaction, always!
          </div>
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
      <Footer />
    </Layout>
  );
};

export default Home;
