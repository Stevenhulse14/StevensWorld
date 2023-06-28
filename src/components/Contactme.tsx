import { Button, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Contactme() {
  return (
    <>
      <Typography variant="h6">Connect with Me</Typography>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        // margin = "auto"
        // alignContent = "center"
        sx={{ margin: "auto", alignItems: "center" }}
      >
        <Button
          variant="outlined"
          href="https://www.linkedin.com/in/steven-hulse/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          href="https://github.com/Stevenhulse14"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon sx={{ color: "black" }} />}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<YouTubeIcon sx={{ color: "red" }} />}
        >
          YouTube
        </Button>
      </Stack>
    </>
  );
}

export default Contactme;
