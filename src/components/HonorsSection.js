import React from "react";
import { Avatar, Heading, VStack, AvatarGroup, Spacer, List } from "@chakra-ui/react";
import { Badge,Icon, Image, Text } from "@chakra-ui/react"
import { Link, Flex, HStack, Stack, StackDivider, Box, UnorderedList, ListItem } from "@chakra-ui/react"
import ICPC from '../images/icpc.png';
import FullScreenSection from "./FullScreenSection";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const HonorsSection = () => (
  <FullScreenSection
      isDarkBackground
      backgroundColor="#4B4C4E"
      alignItems="flex-start" // Ensures the whole block stays left
      p={10}
    >
        <Heading  as="h1" id="honors-section">
                Honors & Awards
        </Heading>
        <br/>
      <VStack align="flex-start" spacing={10} width="100%">
        {/* Experience Entry 1 */}
        <HStack spacing={10} align="flex-start" width="100%" divider={<StackDivider/>}>
            <Image 
                src={require("../images/icpc.png")} 
                alt="ICPC logo" 
                boxSize="150px" 
                objectFit="contain" 
            />
            <Box flex="1">
            {/* This Flex container holds the Title and Date on one line */}
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold"   fontSize="md">
                    2025 ICPC North America Mid Central
                    </Text>
                    <Text fontWeight="bold"   fontSize="sm" whiteSpace="nowrap" ml={4}>
                        Nov 2025
                    </Text>
                </Flex>

                <Flex justifyContent="space-between" alignItems="center">
                    <UnorderedList spacing={3} mt={4}>
                        <ListItem>Team Lions 2</ListItem>
                        <ListItem>Honorable mention</ListItem>
                        <ListItem>Regional: 45th ranked</ListItem>
                        <ListItem>
                        Links: {' '}
                        <Link
                            href={'https://icpc.global/regionals/finder/Mid-Central-USA-2026/standings'}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="blue.500"
                        >
                            Standings
                        </Link>,{' '}
                        <Link
                            href={'https://icpc.global/ICPCID/803ENJGZSLS8'}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="blue.500"
                        >
                            ICPC Profile
                        </Link>
                        </ListItem>
                    </UnorderedList>
                    <Flex gap={3} ml={4}> {/* Grouped images in a new Flex container */}
                        <Image
                        src={require('../images/2025-2026 ICPC.png')}
                        h="100px"
                        w="150px"
                        />
                        <Image
                        src={require('../images/2025-2026 ranked.png')}
                        h="100px"
                        w="150px"
                        />
                    </Flex>
                </Flex>
                
            </Box>
        </HStack>

        <HStack spacing={10} align="flex-start" width="100%" divider={<StackDivider/>}>
            <Image 
                src={require("../images/icpc.png")} 
                alt="ICPC logo" 
                boxSize="150px" 
                objectFit="contain" 
            />
            <Box flex="1">
            {/* This Flex container holds the Title and Date on one line */}
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold"   fontSize="md">
                    2024 ICPC North America Mid Central
                    </Text>
                    <Text fontWeight="bold"   fontSize="sm" whiteSpace="nowrap" ml={4}>
                        Nov 2024
                    </Text>
                </Flex>

                <Flex justifyContent="space-between" alignItems="center">
                    <UnorderedList spacing={3} mt={4}>
                        <ListItem>Team Lions 1</ListItem>
                        <ListItem>Regional: 27th ranked</ListItem>
                        <ListItem>Fort Smith site: First to solve problem E and Q, 5th ranked</ListItem>
                        <ListItem>
                        Links: {' '}
                        <Link
                            href={'https://icpc.global/regionals/finder/Mid-Central-USA-2025/standings'}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="blue.500"
                        >
                            Standings
                        </Link>,{' '}
                        <Link
                            href={'https://icpc.global/ICPCID/803ENJGZSLS8'}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="blue.500"
                        >
                            ICPC Profile
                        </Link>
                        </ListItem>
                    </UnorderedList>
                    <Flex gap={3} ml={4}> {/* Grouped images in a new Flex container */}
                        <Image
                        src={require('../images/2024-2025 ICPC.png')}
                        h="100px"
                        w="150px"
                        />
                        <Image
                        src={require('../images/2024-2025 ICPC medal.png')}
                        h="100px"
                        w="150px"
                        />
                    </Flex>
                </Flex>
                
            </Box>
        </HStack>

        <HStack spacing={10} align="flex-start" width="100%" divider={<StackDivider/>}>
            <Image 
                src={require("../images/ICTM.png")} 
                alt="UAFS Logo" 
                boxSize="150px" 
                objectFit="contain" 
            />
            <Box flex="1">
            {/* This Flex container holds the Title and Date on one line */}
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold"   fontSize="md">
                    ICTM Regional Math Contest and Southwest Math Conferences
                    </Text>
                    <Text fontWeight="bold"   fontSize="sm" whiteSpace="nowrap" ml={4}>
                        Nov 2024
                    </Text>
                </Flex>

                <UnorderedList   spacing={3} mt={4}>
                    <ListItem>
                        10th place Junior/Senior 8-person team ICTM math state final, Illinois State University 2023
                    </ListItem>
                    <ListItem>
                        4th place calculator team ICTM state tournament, Illinois State University 2023
                    </ListItem>
                    <ListItem>
                        1st Algebra II Individual  division 1A, Southern Illinois University 2022
                    </ListItem>
                    <ListItem>
                        2nd Calculator Team division 1A, Southern Illinois University 2022
                    </ListItem>
                    <ListItem>
                        3rd place Southern Math Conference, Southwest Illinois College 2022
                    </ListItem>
                </UnorderedList>
            </Box>
        </HStack>

        {/* You can repeat the HStack structure for more entries */}
      </VStack>
    </FullScreenSection>
);

export default HonorsSection;
