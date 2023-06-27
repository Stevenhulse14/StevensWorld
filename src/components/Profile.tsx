import React, { FC } from "react";
import { Avatar, Typography, Button, Divider, Box, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TechnicalSkills from "./TechnicalSkills";

interface Project {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  codeUrl: string;
}

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl: string;
  resumeUrl: string;
  projects: Project[];
  handleButtonClick: () => void;
}

const Profile: FC<ProfileProps> = ({
  name,
  bio,
  avatarUrl,
  resumeUrl,
  projects,
  handleButtonClick,
}) => {
  return (
    <Box>
      <Avatar
        src={avatarUrl}
        alt="Profile Picture"
        sx={{ width: 100, height: 100 }}
      />
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{bio}</Typography>
      <Button variant="contained" onClick={handleButtonClick}>
        Edit Profile
      </Button>

      <Divider sx={{ my: 2 }} />

      <TechnicalSkills />
      <Button
        variant="outlined"
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </Button>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">PROJECTS</Typography>
      {projects.map((project) => (
        <div key={project.id}>
          <Typography variant="subtitle1">{project.title}</Typography>
          <Typography variant="body2">{project.description}</Typography>
          <Button
            variant="outlined"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </Button>
          <Button
            variant="outlined"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
          <Divider sx={{ my: 2 }} />
        </div>
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6">Connect with Me</Typography>
      <Stack spacing={2} margin="auto" alignItems="center" direction="row">
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
    </Box>
  );
};

export default Profile;
