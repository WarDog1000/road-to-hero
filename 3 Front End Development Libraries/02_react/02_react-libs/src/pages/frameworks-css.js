import React from "react";
import Container from "../components/Container.jsx";
import Bootstrap from "../components/Bootstrap.jsx";
import { BulmaSection, Bulma } from "../components/Bulma.jsx";
import MaterialUI from "../components/MaterialUI.jsx";
import ReactBootstrap from "../components/ReactBoostrap.jsx";
export default () => {
  return (
    <>
      <Container>
        <h1>Frameworks Css</h1>
        <BulmaSection>
          <Bootstrap />
        </BulmaSection>
        <BulmaSection>
          <Bulma />
        </BulmaSection>
        <BulmaSection>
          <ReactBootstrap />
        </BulmaSection>
        <BulmaSection>
          <MaterialUI />
        </BulmaSection>
      </Container>
    </>
  );
};

export const Head = () => <title>Frameworks Css</title>;
