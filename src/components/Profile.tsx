import { FC } from "react";
import { Typography, Button, Divider, Box, Stack } from "@mui/material";
import Contactme from "./Contactme";
import Intro from "./Intro";
import TechnicalSkills from "./TechnicalSkills";
import Projects from "./Projects";

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

const Profile: FC<ProfileProps> = ({ name, bio, avatarUrl, resumeUrl }) => {
  return (
    <Box sx={{ border: 1, borderColor: "error" }}>
      <Intro name={name} bio={bio} avatarUrl={avatarUrl}></Intro>
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
      <Projects />
      <Divider sx={{ my: 2 }} />
      <Contactme />
    </Box>
  );
};

export default Profile;

// {projects.map((project) => (
//   <div key={project.id}>
//     <Typography variant="subtitle1">{project.title}</Typography>
//     <Typography variant="body2">{project.description}</Typography>
//     <Button
//       variant="outlined"
//       href={project.demoUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Demo
//     </Button>
//     <Button
//       variant="outlined"
//       href={project.codeUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Code
//     </Button>
//     <Divider sx={{ my: 2 }} />
//   </div>
// ))}
