import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    link: "https://nangjohnbui3010.github.io/guess-the-word/",
    title: "Guess the word",
    description:
      "A word guessing game inspired by Wordle. Animations acquired from Framer Motion.",
    getImageSrc: () => require("../images/guess-the-word2.png"),
  },
  {
    link: "https://nangjohnbui3010.github.io/QuickDate/",
    title: "Quick Date",
    description:
      "A dating app simulator made with ReactJS that matches you with the opposite gender and with characteristics fetched from randomuser.me.",
    getImageSrc: () => require("../images/QuickDate.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
