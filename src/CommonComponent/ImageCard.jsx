import React from "react";
import { Box } from "@chakra-ui/react";
import { Image, Flex, Text } from "@chakra-ui/react";
import MenuContainer from "./Menu";

const ImageCard = () => {
  return (
    <Box width={"25vw"} borderRadius="lg">
      <Image
        boxSize="200px"
        objectFit="cover"
        width={"25vw"}
        src="https://www.lightxeditor.com/app/wp-content/uploads/2021/03/how-to-put-image-inside-text.jpg"
        borderRadius={"20px"}
      />
      <Flex justifyContent={"space-between"} p={"3"}>
        <Flex flexDirection={"column"}>
          <Text>Virtual Conference Talk</Text>
          <Text>Updated 2 hours ago</Text>
        </Flex>
        <MenuContainer />
      </Flex>
    </Box>
  );
};

export default ImageCard;
