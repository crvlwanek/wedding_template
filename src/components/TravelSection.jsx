import * as React from "react";

import data from "../data.json";

import { Card } from "./Card";

const cardHolderStyles = {
  maxWidth: "1300px",
  margin: "auto",
  marginBottom: "30px",
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 330px)",
  alignItems: "center",
  justifyContent: "center",
};

const TravelSection = () => {
  return (
    <section id="travel">
      <div style={cardHolderStyles}>
        {data?.travel?.map((item) => (
          <Card
            heading={item.heading}
            bodyText={item.description}
            buttonText="Website"
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default TravelSection;
