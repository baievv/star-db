import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";
import { useParams } from "react-router-dom";

const PersonDetails = (props) => {
  const {id}=useParams();
  const props1={itemId:id,...props};
  return (
    <ItemDetails {...props1}>
      <Record field="gender" label="Gender: " />
      <Record field="eyeColor" label="Eye Color: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  }
};
export default withSwapiService(mapMethodsToProps)(PersonDetails);
