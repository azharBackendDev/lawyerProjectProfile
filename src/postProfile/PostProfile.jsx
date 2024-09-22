import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";

const PostProfile = () => {
  const [clientName, setClientName] = useState('');
  const [postName, setPostName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gmail, setGmail] = useState('');

  const handleSubmit = async () => {
    const clientData = {
      clientName,
      postName,
      mobileNumber,
      gmail
    };

    try {
      const push = await addDoc(collection(db, "userData"), clientData);
      alert("Data Sent Successfully");
      console.log(push);

      // Clear the form after submission
      setClientName('');
      setPostName('');
      setMobileNumber('');
      setGmail('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postProfile">
      <input
        type="text"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        placeholder="Enter Your Full Name"
      />
      <input
        type="text"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
        placeholder="Enter Your POST Name"
      />
      <input
        type="text"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        placeholder="Enter Your Mobile Number"
      />
      <input
        type="text"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
        placeholder="Enter Your Business Gmail"
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};

export default PostProfile;
