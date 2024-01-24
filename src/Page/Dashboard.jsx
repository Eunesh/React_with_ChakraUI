import React from "react";
import Sidebar from "../Component/Sidebar";
import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";

const RightSideWrapper = styled.div({
  marginLeft: "230px",
  padding: "15px",
  height: "100vh",
});
const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <RightSideWrapper>
        <div>This is right side Area</div>
      </RightSideWrapper>
    </>
  );
};

export default Dashboard;
