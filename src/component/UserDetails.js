import React from "react";
import { Avatar, Typography } from "@mui/material";

const UserDetails = ({ user }) => {
  return (
    <div>
      <Avatar alt={user.image} src={user.image} />
      <Typography gutterBottom variant="h5">
        {`${user.firstName} ${user.lastName}`}
      </Typography>
      <Typography gutterBottom variant="body2">
        Email: {user.email}
      </Typography>
      <Typography gutterBottom variant="body2">
        Address: {`${user.address.address}`}
      </Typography>
      <Typography gutterBottom variant="body2">
        Company Name: {user.company.name}
      </Typography>
    </div>
  );
};

export default UserDetails;
