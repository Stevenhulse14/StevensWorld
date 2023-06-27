import React from "react";
import { Typography, Grid, Paper, Box } from "@mui/material";
import {
  SiReact,
  SiRedux,
  SiDocker,
  SiDjango,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiHeroku,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiSqlite,
  SiCplusplus,
} from "react-icons/si";
import {
  FaReact,
  FaJava,
  FaDocker,
  FaPython,
  FaHtml5,
  FaCss3,
  FaDatabase,
} from "react-icons/fa";

const TechnicalSkills = () => {
  const tools = [
    { name: "Database", icon: FaDatabase, color: "#00758F" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
    { name: "Pandas", icon: SiPython, color: "#150458" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Heroku", icon: SiHeroku, color: "#430098" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  const languages = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "SQL", icon: SiSqlite, color: "#003B57" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: SiCsharp, color: "#9826AF" },
  ];

  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    margin: "2px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const iconStyle = {
    fontSize: "48px",
    color: "white",
  };

  return (
    <Box>
      <Typography variant="h6">Technical Skills</Typography>

      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography variant="subtitle1">Tools</Typography>
          <Grid container spacing={2}>
            {tools.map((tool, index) => (
              <Grid item xs={3} key={index} sx={gridItemStyle}>
                <Paper elevation={3} sx={{ backgroundColor: tool.color }}>
                  {React.createElement(tool.icon, { style: iconStyle })}
                </Paper>
                <Typography variant="body2" align="center">
                  {tool.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle1">Languages</Typography>
          <Grid container spacing={2}>
            {languages.map((language, index) => (
              <Grid item xs={3} key={index} sx={gridItemStyle}>
                <Paper elevation={3} sx={{ backgroundColor: language.color }}>
                  {React.createElement(language.icon, { style: iconStyle })}
                </Paper>
                <Typography variant="body2" align="center">
                  {language.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TechnicalSkills;
