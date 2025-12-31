import React from "react";
import { Avatar, Heading, VStack, AvatarGroup, Spacer, List } from "@chakra-ui/react";
import { Badge,Icon, Image, Text } from "@chakra-ui/react"
import { Link, Flex, HStack, Stack, StackDivider, Box, UnorderedList, ListItem } from "@chakra-ui/react"
import ABB_Signing from '../images/ABB_Signing.jpeg';
import ABB_Workday from '../images/ABB_Workday.jpeg';
import ABB_Plant from '../images/ABB_Plant.jpeg';
import ABB_Volunteer from '../images/ABB_Volunteer.jpg';
import ABB_Certificate from '../images/ABB_Certificate.jpeg';
import FullScreenSection from "./FullScreenSection";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const ExperienceSection = () => (
  <FullScreenSection
      isDarkBackground
      backgroundColor="#FFFFF0"
      alignItems="flex-start" // Ensures the whole block stays left
      p={10}
    >
        <Heading color = "black" as="h1" id="experience-section">
                Experience
        </Heading>
        <br/>
      <VStack align="flex-start" spacing={10} width="100%">
        {/* Experience Entry 1 */}
        <HStack spacing={10} align="flex-start" width="100%" divider={<StackDivider borderColor={"black"}/>}>
            <Image 
                src={require("../images/ABB.png")} 
                alt="ABB Logo" 
                boxSize="150px" 
                objectFit="contain" 
            />
            <Box flex="1">
            {/* This Flex container holds the Title and Date on one line */}
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" color="black" fontSize="md">
                    ABB inc. Motion, NEMA - Fall 2025 Software Development Internship (Summer extension)
                    </Text>
                    <Text fontWeight="bold" color="black" fontSize="sm" whiteSpace="nowrap" ml={4}>
                        Aug 2025 - Dec 2025
                    </Text>
                </Flex>

                <UnorderedList color="black" spacing={3} mt={4}>
                    <ListItem>
                        Engineered performance improvements for legacy ABAP codebases by leveraging SAP ST05 and SAT traces to identify and resolve high-latency SQL bottlenecks. Optimized OpenSQL queries and implemented strategic table indexing across multiple SAP ERP dictionary objects, eliminating runtime errors (short dumps) and significantly reducing database load.
                    </ListItem>
                    <ListItem>
                        Developed and benchmarked a Linear Regression model using Python (NumPy, Pandas) to predict product supply chain lead times. Conducted a comparative performance analysis against an existing Random Forest model to evaluate accuracy trade-offs.
                    </ListItem>
                    <ListItem>
                        Automated the classification of 500+ engineering product parts across 80 different SAP programs by integrating Python scripts with ABAP. deployed an interactive ALV grid interface that enabled engineering teams to standardize naming conventions in mass, reducing manual data entry errors and ambiguity.
                    </ListItem>
                    <ListItem>
                        Links: 
                    </ListItem>
                </UnorderedList>
            </Box>
        </HStack>

        <HStack spacing={10} align="flex-start" width="100%" divider={<StackDivider borderColor={"black"}/>}>
            <Image 
                src={require("../images/ABB.png")} 
                alt="ABB Logo" 
                boxSize="150px" 
                objectFit="contain" 
            />
            <Box flex="1">
            {/* This Flex container holds the Title and Date on one line */}
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" color="black" fontSize="md">
                    ABB inc. Motion, NEMA - Summer 2025 Software Development Internship 
                    </Text>
                    <Text fontWeight="bold" color="black" fontSize="sm" whiteSpace="nowrap" ml={4}>
                        May 2025 - Aug 2025
                    </Text>
                </Flex>

                <UnorderedList color="black" spacing={3} mt={4}>
                    <ListItem>
                        Implemented CI/CD pipeline for SAP ERP Development using ABAP, SAP Solution Manager, User Acceptance Testing (Panaya), and Agile
methodology (Azure DevOps), mentored by Senior Application Developer David Goswick and IS Application Manager Christopher Wilhelm
                    </ListItem>
                     <ListItem>
                        Collaborated with the Information Systems team to migrate z/OS Mainframe and DB2 data to Google Cloud, specifically focusing on restructuring the internal codebase to prevent data fetching errors
                    </ListItem>
                    <ListItem>
                        Developed an SAP Remote Function Call that sends quotations and sales orders master data from SAP to monday.com through a .NET pipeline, resulted in a fully comprehensive progress dashboard used by both internal and external personnels around the country (50+ off site sales teams and district offices from Dallas, St. Louis, Los Angeles, etc.).
                        Development was done with the help of Sales Project Manager Mike Saitang and IS Application Manager Christopher Wilhelm.
                    </ListItem>
                    <ListItem>
                        Created custom SAP transaction codes (T-codes) and categorized 70+ programs into functional areas, improving user navigation
                    </ListItem>

                    <ListItem>
                        Optimized plant scheduling for the diecast work centers, improving 5% overall labor performance
                    </ListItem>
                    <ListItem>
                        Links:{' '}
                        <Link href= {ABB_Certificate} target="_blank" rel="noopener noreferrer" color = "blue.500">
                            Summer 2025 Certificate
                        </Link>,{' '}
                        <Link href= {ABB_Workday} target="_blank" rel="noopener noreferrer" color = "blue.500">
                            Workday Booth
                        </Link>,{' '}
                        <Link href= {ABB_Volunteer} target="_blank" rel="noopener noreferrer" color = "blue.500">
                            The Arc for the River Valley Volunteer
                        </Link>,{' '}
                        <Link href= {ABB_Signing} target="_blank" rel="noopener noreferrer" color = "blue.500">
                            Peak Innovation Center Signing Day
                        </Link>.{' '}
                    </ListItem>
                </UnorderedList>
            </Box>
        </HStack>

        <HStack spacing={10} align="flex-start" width="100%" divider={<StackDivider borderColor={"black"}/>}>
            <Image 
                src={require("../images/UAFS_ASC.png")} 
                alt="UAFS Logo" 
                boxSize="150px" 
                objectFit="contain" 
            />
            <Box flex="1">
            {/* This Flex container holds the Title and Date on one line */}
                <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" color="black" fontSize="md">
                    University of Arkansas - Fort Smith, Academic Success Center: Mathematics tutor
                    </Text>
                    <Text fontWeight="bold" color="black" fontSize="sm" whiteSpace="nowrap" ml={4}>
                        Jan 2024 - Apr 2024
                    </Text>
                </Flex>

                <UnorderedList color="black" spacing={3} mt={4}>
                    <ListItem>
                        Provided 1:1 tutoring with College Algebra, Calculus I, Quantitative Literacy, etc.
                    </ListItem>
                    <ListItem>
                        Participated in collaborative training sessions with other tutors and faculty members to sharpen teaching/communication skills.
                    </ListItem>
                    <ListItem>
                        Links:{' '}
                        <Link href="../images/ABB_Signing.jpeg" color="blue.500">
                            Signing day
                        </Link>, {' '}
                        <Link href="../images/ABB_Signing.jpeg" color="blue.500">
                            Signing day
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Box>
        </HStack>

        {/* You can repeat the HStack structure for more entries */}
      </VStack>
    </FullScreenSection>
);

export default ExperienceSection;
