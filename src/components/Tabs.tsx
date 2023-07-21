import { Tab, Tabs, Box, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
function TabsAbout() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: any, newTabIndex: SetStateAction<number>) => {
    //console.log(newTabIndex);
    setTabIndex(newTabIndex);
  };
  const tabStyling = {
    "& .MuiTab-root": {
      fontSize: "0.7rem", // Adjust the font size of the tab label
      minWidth: "auto", // Allow smaller tabs (optional)
      padding: "6px 16px", // Adjust the padding to make the tabs more compact
      "&.Mui-selected": {
        backgroundColor: "orange",
        color: "white",
        fontWeight: "bold",
        borderRadius: "30px",
      },
    },
    "& .MuiTab-wrapper": {
      flexDirection: "row", // Align the icon and label horizontally
      "& .MuiSvgIcon-root": {
        fontSize: "1rem", // Adjust the icon size
        marginRight: 4, // Add spacing between the icon and the text
        borderRadius: "50%", // Make the icon background circular
        backgroundColor: "orange", // Set the background color for the icon
        color: "white", // Set the icon color
        padding: 4, // Adjust padding for the icon background
      },
      "&.Mui-selected .MuiSvgIcon-root": {
        backgroundColor: "white",
        color: "orange",
      },
    },
  };
  return (
    <Box
      sx={{
        color: "whitesmoke",
        paddingBottom: "20px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
        xs: {
          flexDirection: "column",
        },
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        sx={tabStyling}
        orientation={"vertical"}
      >
        <Tab
          //label="About"
          icon={<PersonIcon />}
          sx={{ color: "whitesmoke", fontSize: "0.80rem" }}
        />
        <Tab
          //label="Projects"
          icon={<CodeIcon />}
          sx={{ color: "whitesmoke", fontSize: "0.80rem" }}
        />
        <Tab
          //label="Contact"
          icon={<MailIcon />}
          sx={{ color: "whitesmoke", fontSize: "0.80rem" }}
        />
      </Tabs>
      <Box sx={{ margin: 2, height: "90%", maxWidth: "50%" }}>
        {tabIndex === 0 && (
          <Box textAlign="center" alignContent="center" height="100%">
            <Typography alignContent="center" sx={{ fontSize: "0.80rem" }}>
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
            <Typography sx={{ fontSize: "0.80rem" }}>
              I am a Software Developer Army Veteran that stationed in NYC. I am
              fun outgoing and free spirited. Some activities that I enjoy on my
              free time are listening to music, coding, playing video games, and
              going on little nyc adventures.
            </Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box height="100%">
            <Typography sx={{ fontSize: "0.80rem" }}>
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
