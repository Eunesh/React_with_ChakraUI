import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <Flex
      flexDirection={"column"}
      position="fixed"
      width="230px"
      height="100vh"
      border="1px solid #e2e8f0"
      overflow={"auto"}
    >
      <SidebarHeader />
    </Flex>
  );
};

export default Sidebar;
