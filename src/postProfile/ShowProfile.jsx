import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../firebase";

const ShowProfile = () => {
  const [profiles, setProfiles] = useState([]);

  // Fetch data from Firestore
  const fetchProfiles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userData"));
      const profilesData = querySnapshot.docs.map((doc) => doc.data());
      setProfiles(profilesData);
    } catch (error) {
      console.log("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchProfiles(); // Fetch profiles when component mounts
  }, []);

  return (
    <div className="showProfile">
      <h1>Job Posts</h1>
      {profiles.length > 0 ? (
        profiles.map((profile, index) => (
          <div key={index} className="profile">
            <h3>{profile.clientName}</h3>
            <p>Post: {profile.postName}</p>
            <p>Mobile: {profile.mobileNumber}</p>
            <p>Email: {profile.gmail}</p>
          </div>
        ))
      ) : (
        <p>No job posts available yet.</p>
      )}
    </div>
  );
};

export default ShowProfile;
