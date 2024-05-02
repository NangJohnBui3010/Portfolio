import React from "react";
import { Avatar, Heading, VStack, AvatarGroup, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nang Bui (John)!";
const bio1 = "A full stack developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size = "2xl" src = "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.15752-9/437667684_359608567088173_7660321299825022919_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TrIE7D5bazoQ7kNvgEWgoLz&_nc_ht=scontent-dfw5-2.xx&oh=03_Q7cD1QFz6BuwWmkuXw76gxy5aLynXrBPY1xyhr92kSomk0Ds9A&oe=665AAA52"/>  
    <Text fontSize="md">{greeting}</Text>
    <br/>
    <Text as = "b" fontSize="4xl">{bio1}</Text>
    <Text as = "b" fontSize="4xl">{bio2}</Text>
  </FullScreenSection>
);

export default LandingSection;
