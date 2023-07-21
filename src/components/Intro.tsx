import { FC } from "react";
import { Avatar, Box, Typography, Divider, Grid } from "@mui/material";
import TabsAbout from "./Tabs";

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl: string;
}

const Intro: FC<ProfileProps> = ({ name, bio, avatarUrl }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "10px",
      }}
    >
      <Grid item xs={6} sm={5}>
        <Box
          className="container1"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: "50px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                color: "#FFFFFF",
                fontWeight: "900",
                fontFamily: "sans-serif",
                marginRight: "50px",
                textShadow:
                  "0 1px 0 #ccc, 0 2px 0 #c9c9c9,0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);",
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{ display: "flex", direction: "row", alignItems: "start" }}
            >
              <Typography
                color="green"
                sx={{
                  fontSize: 8,
                  alignItems: "top",
                  textShadow: "#FC0 .5px 0 1px",
                  paddingBottom: "20px",
                }}
              >
                Software Developer
              </Typography>
            </Box>
          </Box>
          <Avatar
            src={avatarUrl}
            alt="Profile Picture"
            sx={{ width: 150, height: 150 }}
          />
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography variant="h6" sx={{ fontSize: "10px" }}>
              I am a Fullstack Developer :
            </Typography>
            <Typography sx={{ fontSize: "16px" }}> 🤓</Typography>
          </Box>
          <Typography variant="h6" sx={{ fontSize: "10px" }}>
            United States, Brooklyn, NY
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "10px" }}>
            Email : Stevenhulse1993@gmail.com | Phone : 347-951-1234
          </Typography>
        </Box>
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid item xs={6}>
        <Box
          className="container2"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <TabsAbout />
          {/* <Typography variant="h5">About Me</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1">{bio}</Typography>
        </Box> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
