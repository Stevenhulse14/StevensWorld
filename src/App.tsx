import { useState } from "react";
import { Profile } from "./components";
import "./App.css";

function App() {
  const handleEditProfile = () => "Hello";
  const data = [
    {
      id: 1,
      title: "Playdate",
      description: "lorum",
      demoLink: "www.google.com",
      codeUrl: "www.indeed.com",
    },
  ];
  return (
    <>
      <Profile
        name="STEVEN HULSE"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        avatarUrl="Profilepic.jpeg"
        resumeUrl="/path"
        projects={data}
        handleButtonClick={handleEditProfile}
      />
    </>
  );
}

export default App;
