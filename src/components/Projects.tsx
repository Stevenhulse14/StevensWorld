import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "GoldenGorilla",
    description: "Ecommerce website for a selling pokemon cards",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689872960/projectIcons/Goldengorillas.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 2,
    title: "Playdate",
    description:
      "Peer to peer playdate app where parents can connect, schedule playdates, and chat with other parents and their children.",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689872931/projectIcons/Playdate.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 3,
    title: "BlackJack",
    description: "Is a blackjack game that I made using React.js",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 4,
    title: "Weston Hospitality",
    description: "Real estate website for a hotel",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 5,
    title: "Cat API",
    description:
      "Cat API is a website that allows users to search for cat images and gifs.",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 6,
    title: "Vegan Menu",
    description: "Menu for a vegan restaurant",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 7,
    title: "Promptopia",
    description: "A website that generates prompts for writers",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689872936/projectIcons/Promptopia.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 8,
    title: "Weather App",
    description: "A weather application that uses the OpenWeather API",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "",
    Demo: "",
    Youtube: "",
  },
  {
    id: 9,
    title: "WebResume",
    description: "A website that displays my resume",
    imageUrl:
      "https://res.cloudinary.com/dfyly0twx/image/upload/v1689876744/projectIcons/InWorks.png",
    githubUrl: "",
    Demo: "",
    Deployed: "",
  },
  // Add more card data objects here...
];

const Projects: React.FC = ({ buttonStyling }) => {
  return (
    <Grid container spacing={2} padding="20px" color="white">
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              width="100%"
              sx={{
                objectFit: "contain",
                backgroundColor: "##d7d7d7",
              }}
              image={card.imageUrl}
              alt={card.title}
            />
            <CardContent
              sx={{ background: "rgba(0, 0, 0, 0.87)", color: "whitesmoke" }}
            >
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
              <Button variant="contained" color="primary" sx={buttonStyling}>
                More Info
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
