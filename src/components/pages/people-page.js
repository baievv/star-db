import React, { useState } from "react";
import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";
import { useNavigate, useParams } from "react-router-dom";

const PeoplePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personId, setPersonId] = useState(id);

  return (
    <Row
      left={
        <PersonList
          onItemSelected={(itemId) => {
            setPersonId(itemId);
            navigate(`/people/${itemId}`, { replace: true });
          }}
        />
      }
      right={<PersonDetails itemId={personId} />}
    />
  );
};

export default PeoplePage;
