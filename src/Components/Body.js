import React from "react";

import { Container } from "./ComponentCss/BodyCss";

import ReklamAlani from "./ReklamAlani";
import BodyMenu from "./BodyMenu";
import BodyMainContainer from "./BodyMainContainer";
import FilterForm from "./FilterMenu";
function Body() {
  return (
    <Container>
      <div className="ust-div">
        <ReklamAlani />
      {/*  <FilterForm/> */}
      </div>

      <div className="menu-main-hizala">
        <BodyMenu />
        <BodyMainContainer />
      </div>
    </Container>
  );
}
export default Body;
