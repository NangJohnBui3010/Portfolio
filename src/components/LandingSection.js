import React from "react";
import { Avatar, Heading, VStack, AvatarGroup, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nang Bui (John)!";
const bio1 = "A computer science major at the University of Arkansas - Fort Smith";
const bio2 = "Concentrated in AI and Data Science.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size = "2xl" src = {require("../images/Avatar.jpg")}/>  
    <Text fontSize="md">{greeting}</Text>
    <br/>
    <Text as = "b" fontSize="4xl">{bio1}</Text>
    <Text as = "b" fontSize="4xl">{bio2}</Text>
  </FullScreenSection>
);

export default LandingSection;
