import React from "react";
import { Card, CardBody, Text, Flex, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const SmallHeightCard = ({ Icon, Text1, Text2 }) => {
  const CardContainer = styled(Card)({
    width: "30vw",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out;",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  });
  return (
    <CardContainer>
      <CardBody>
        <Flex gap={"10px"}>
          <Box color={"purple.500"}>{Icon}</Box>
          <Flex flexDirection={"column"}>
            <Text fontSize="xs">{Text1}</Text>
            <Text fontSize="xs">{Text2}</Text>
          </Flex>
        </Flex>
      </CardBody>
    </CardContainer>
  );
};

export default SmallHeightCard;
