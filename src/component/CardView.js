import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link
import "./Form.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import UserForm from "./UserForm";

const CardView = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const sortUsers = (option) => {
    let sortedUsers = [...users];
    switch (option) {
      case "name":
        sortedUsers.sort((a, b) =>
          `${a.firstName} ${a.lastName}`.localeCompare(
            `${b.firstName} ${b.lastName}`
          )
        );
        break;
      case "email":
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "company":
        sortedUsers.sort((a, b) =>
          a.company.name.localeCompare(b.company.name)
        );
        break;
      default:
        break;
    }
    setUsers(sortedUsers);
  };

  return (
    <div className="cardview">
      <input
        placeholder="Search Here..."
        className="searchbar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ margin: "20px" }}>
        <Select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            sortUsers(e.target.value);
          }}
          style={{
            marginLeft: "10px",
            width: "250px",
            background: "white",
            borderRadius: "7px",
          }}
        >
          <MenuItem value="name">Sort by name</MenuItem>
          <MenuItem value="email">Sort by email</MenuItem>
          <MenuItem value="company">Sort by company name</MenuItem>
        </Select>
      </div>
      <ul className="ulist">
        <Grid container spacing={2}>
          {users
            .filter(
              (user) =>
                user.firstName.toLowerCase().includes(query) ||
                user.lastName.toLowerCase().includes(query)
            )
            .map((user) => (
              <Grid md={3} xs={12} sm={6} key={user.id} spacing={2}>
                <li style={{ margin: "10px", padding: "10px", border: "none" }}>
                  <Box width="250px">
                    <Card>
                      <CardContent>
                        <Avatar alt={user.image} src={user.image} />
                        <Typography gutterBottom variant="h5">
                          <Link to={`/user/${user.id}`} className="username">
                            {user.firstName} {user.lastName}
                          </Link>
                        </Typography>

                        <Typography gutterBottom variant="body2">
                          {user.email}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                          {user.address.address}
                          {` ${user.address.city}`}
                        </Typography>
                        <Typography gutterBottom variant="body2">
                          {user.company.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </li>
              </Grid>
            ))}
        </Grid>
      </ul>
      <UserForm />
    </div>
  );
};
export default CardView;
