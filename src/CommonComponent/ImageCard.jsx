import React from "react";
import { Box } from "@chakra-ui/react";
import { Image, Flex, Text } from "@chakra-ui/react";
// import MenuContainer from "./Menu";

const ImageCard = ({ Src, Text1, Text2, Menu }) => {
  return (
    <Box width={"25vw"} borderRadius="lg">
      <Image
        boxSize="200px"
        objectFit="cover"
        width={"25vw"}
        src={`${Src}`}
        borderRadius={"20px"}
      />
      <Flex justifyContent={"space-between"} p={"3"}>
        <Flex flexDirection={"column"}>
          <Text fontSize="sm">{Text1}</Text>
          <Text fontSize="xs">{Text2}</Text>
        </Flex>
        {Menu}
      </Flex>
    </Box>
  );
};

export default ImageCard;
