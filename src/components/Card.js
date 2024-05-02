import { Heading, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const styles = {
  borderRadius: "5%",
  backgroundColor: "white",
  padding: "5%"
}
const Card = ({ title, description, imageSrc, link}) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
      <VStack style = {styles}>
        <img src = {imageSrc}/>
        <Text color = "black" as = "b" size="md">{title}</Text>
        <Text color = "black" size = "md">{description} <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        <Text color = "black" border={"solid"} padding={"10px"}>
          <a href = {link} target = "_blank"> <button>View project</button> </a>
        </Text>
      </VStack>
  )
};

export default Card;
