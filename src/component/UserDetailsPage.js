import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserDetails from "./UserDetails";

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  console.log(12312);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(response.data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  return <div>{user ? <UserDetails user={user} /> : <p>Loading...</p>}</div>;
};

export default UserDetailsPage;
