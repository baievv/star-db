import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";
import { useParams } from "react-router-dom";

const PlanetDetails = (props) => {
    // const {id}=useParams();
    // console.log(id);
  
  const props1={asd:3,props};
  console.log(props1);
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population: " />
      <Record field="rotationPeriod" label="Rotation Period: " />
      <Record field="diametr" label="Diametr: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};
export default withSwapiService(mapMethodsToProps)(PlanetDetails);
