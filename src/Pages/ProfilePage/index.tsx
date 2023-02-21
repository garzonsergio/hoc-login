import React from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { user } = useParams();
  return (
    <>
      <p>{user}</p>
    </>
  );
}

export { ProfilePage };
