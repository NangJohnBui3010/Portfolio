import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: nangbui3010@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/NangJohnBui3010",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/nang-bui-0a111a276/",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/nang.bui.50746444",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/johnbui05/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
              {socials.map((item) => (
                <a href={item.url} style={{ margin: "10px"} }>
                    <FontAwesomeIcon icon={item.icon} size="2x"/>
                  </a>
              ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <Link to="/#contact-me" onClick={handleClick("contactme")}>Contact Me</Link>
              <Link to="/#projects" onClick = {handleClick("projects")}>Projects</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
