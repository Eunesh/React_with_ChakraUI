import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const LeftSideContainer = styled.div({
  display: "flex",
  gap: "25px",
});
const Header = () => {
  return (
    <Flex alignItems="center" justifyContent={"space-between"}>
      <Text fontSize="3xl">Bussiness</Text>
      <LeftSideContainer>
        <Flex alignItems="center">
          <SwapVertIcon fontSize="small" />
          <Text fontSize="xs">Last Updated</Text>
        </Flex>
        <MoreHorizIcon fontSize="small" />
      </LeftSideContainer>
    </Flex>
  );
};

export default Header;
