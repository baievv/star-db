import React from "react";
import { StarshipList } from "../sw-components";
import { useNavigate } from "react-router-dom";

const StarshipsPage = () => {
  const navigate = useNavigate();
  return (
    <StarshipList
      onItemSelected={(itemId) => {
        navigate(`/starships/${itemId}`, { replace: true });
      }}
    />
  );
};

export default StarshipsPage;
