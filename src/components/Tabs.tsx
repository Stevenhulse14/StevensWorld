import { Tab, Tabs, Box, Typography } from "@mui/material";
import { SetStateAction, useState } from "react";

function TabsAbout() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event: any, newTabIndex: SetStateAction<number>) => {
    //console.log(newTabIndex);
    setTabIndex(newTabIndex);
  };
  //console.log(tabIndex);
  return (
    <Box
      sx={{
        color: "whitesmoke",
        paddingBottom: "20px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        sx={{ display: "flex", justifyContent: "center" }}
        orientation="vertical"
      >
        <Tab label="About" sx={{ color: "whitesmoke" }} />
        <Tab label="Projects" sx={{ color: "whitesmoke" }} />
        <Tab label="Contact" sx={{ color: "whitesmoke" }} />
      </Tabs>
      <Box sx={{ margin: 2, height: "90%", maxWidth: "50%" }}>
        {tabIndex === 0 && (
          <Box textAlign="center" alignContent="center" height="100%">
            <Typography alignContent="center">
              I am a Software Developer Army Veteran that stationed in NYC. I am
              fun outgoing and free spirited. Some activities that I enjoy on my
              free time are listening to music, coding, playing video games, and
              going on little nyc adventures. I am a Software Developer Army
              Veteran that stationed in NYC. I am fun outgoing and free
              spirited. Some activities that I enjoy on my free time are
              listening to music, coding, playing video games, and going on
              little nyc adventures.
            </Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box height="100%">
            <Typography>
              I am a Software Developer Army Veteran that stationed in NYC. I am
              fun outgoing and free spirited. Some activities that I enjoy on my
              free time are listening to music, coding, playing video games, and
              going on little nyc adventures.
            </Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box height="100%">
            <Typography>
              I am a Software Developer Army Veteran that stationed in NYC. I am
              fun outgoing and free spirited. Some activities that I enjoy on my
              free time are listening to music, coding, playing video games, and
              going on little nyc adventures.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default TabsAbout;
