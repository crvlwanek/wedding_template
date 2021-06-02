import * as React from "react";
import Layout from "../components/Layout";
import LandingSection from "../components/LandingSection";
import ScheduleSection from "../components/ScheduleSection";
import Footer from "../components/Footer";

import { setViewHeight } from "../utils/setViewHeight";

import data from "../data.json";
import TravelSection from "../components/TravelSection";

setViewHeight();

const IndexPage = () => {
  return (
    <Layout>
      <LandingSection
        groom_name={data.groom_name}
        bride_name={data.bride_name}
        date={data.date}
        time={data.time}
        location={data.location}
      />
      <ScheduleSection schedule={data.schedule} />
      <TravelSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
