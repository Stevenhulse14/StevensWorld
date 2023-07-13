import React from "react";
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
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "Playdate",
    description:
      "Peer to peer playdate app where parents can connect, schedule playdates, and chat with other parents and their children.",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: 3,
    title: "BlackJack",
    description: "Is a blackjack game that I made using React.js",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: 4,
    title: "Weston Hospitality",
    description: "Real estate website for a hotel",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: 5,
    title: "Cat API",
    description:
      "Cat API is a website that allows users to search for cat images and gifs.",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: 6,
    title: "Vegan Menu",
    description: "Menu for a vegan restaurant",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: 7,
    title: "Promptopia",
    description: "A website that generates prompts for writers",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: 8,
    title: "Weather Application",
    description: "A weather application that uses the OpenWeather API",
    imageUrl: "https://example.com/image2.jpg",
  },
  // Add more card data objects here...
];

const Projects: React.FC = () => {
  return (
    <Grid container spacing={2} padding="20px" color="white">
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              sx={{
                objectFit: "contain",
                backgroundColor: "##d7d7d7",
                backgroundImage:
                  "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)",
              }}
              //image={card.imageUrl}
              alt={card.title}
            />
            <CardContent
              sx={{ background: "rgba(0, 0, 0, 0.87)", color: "whitesmoke" }}
            >
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
              <Button variant="contained" color="primary">
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
