import React from "react";
import { Card, CardBody, Text, Flex, Box } from "@chakra-ui/react";

const SmallHeightCard = ({ Icon, Text1, Text2 }) => {
  return (
    <Card width="30vw" borderRadius={"10px"}>
      <CardBody>
        <Flex gap={"10px"}>
          <Box color={"purple.500"}>{Icon}</Box>
          <Flex flexDirection={"column"}>
            <Text fontSize="xs">{Text1}</Text>
            <Text fontSize="xs">{Text2}</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default SmallHeightCard;
