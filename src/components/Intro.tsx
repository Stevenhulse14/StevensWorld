import { FC } from "react";
import { Avatar, Box, Typography, Divider } from "@mui/material";

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl: string;
}

const Intro: FC<ProfileProps> = ({ name, bio, avatarUrl }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "10px",
      }}
    >
      <Box
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
          }}
        >
          <Box sx={{ display: "flex", direction: "row", alignItems: "start" }}>
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
          <Typography
            variant="h5"
            sx={{
              fontSize: "40px",
              color: "#FFFFFF",
              fontWeight: "900",
              fontFamily: "Roboto",
              marginRight: "50px",
              textShadow:
                "0 1px 0 #ccc, 0 2px 0 #c9c9c9,0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Avatar
          src={avatarUrl}
          alt="Profile Picture"
          sx={{ width: 200, height: 200 }}
        />
        <Typography variant="h6">I am a full stack developer</Typography>
      </Box>
      <Divider orientation="vertical" variant="middle" flexItem />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">About Me</Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1">{bio}</Typography>
        </Box>
      </Box>

      <Divider orientation="vertical" variant="middle" flexItem />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5">Contact Info</Typography>
      </Box>
    </Box>
  );
};

export default Intro;
