import React from "react";
const Profile = ({ name }) => {
  const style = {
    color: "#cf23cf",
  };
  return (
    <>
      <h1 style={style}>{name} Profile Page</h1>
    </>
  );
};
export default Profile;
