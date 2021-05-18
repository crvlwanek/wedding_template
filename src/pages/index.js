import * as React from "react";
import Layout from "./components/Layout";
import LandingSection from "./components/LandingSection";
import ScheduleSection from "./components/ScheduleSection";

const data = require("../data.json");

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
    </Layout>
  );
};

export default IndexPage;
