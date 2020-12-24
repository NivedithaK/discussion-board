import "./featureCard.module.css";

import { Box as ChakraBox } from "@chakra-ui/react";
import { Center, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

export interface FeatureCardProps {
  /**
   * Box contents
   */
  title: string;
  description: string;
  icon: IconType;
}

/**
 * Primary UI component for user interaction
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}: FeatureCardProps) => {
  return (
    <ChakraBox
      boxShadow="5px 5px 0px -4px #285E61, -10px -15px 0px 0px #BEE3F8"
      width="280px"
      height="200px"
      position="relative"
      bg="white"
      rounded="3xl"
      pt="5"
      pl="5"
      pr="5"
    >
      <Center>
        <Icon as={icon} w={50} h={50} color="blue.300" />
      </Center>
      <Center>
        <Text fontSize="3xl" fontWeight="bold">
          {title}
        </Text>
      </Center>
      <Center>
        <Text fontSize="md" align="center">
          {description}
        </Text>
      </Center>
    </ChakraBox>
  );
};
