import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SearchBar from "../CommonComponent/SearchBar";
import { SidebarContentObjects } from "../Objects/SidebarContentObjects";
import { SidebarFilesContent } from "../Objects/SidebarFilesContentObject";
import styled from "@emotion/styled";
import TuneIcon from "@mui/icons-material/Tune";

const LowerContainerOfSideBar = styled.div({
  padding: "10px",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  fontSize: "13px",
});

const ContentWrapper = styled.div({
  marginTop: "20px",
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const Sidebar = () => {
  return (
    <Flex
      flexDirection={"column"}
      position="fixed"
      width="230px"
      height="100vh"
      border="1px solid #e2e8f0"
      overflow={"auto"}
      gap="5px"
    >
      <SidebarHeader />
      <LowerContainerOfSideBar>
        <SearchBar />
        <ContentWrapper>
          {SidebarContentObjects.map((content, index) => {
            return (
              <Content key={index}>
                <div>{content.icon}</div>
                <Text fontSize="xs">{content.name}</Text>
              </Content>
            );
          })}
        </ContentWrapper>
        <Flex flexDirection={"row"} justifyContent={"space-between"}>
          <Text>Teams</Text>
          <TuneIcon fontSize="small" />
        </Flex>
        <ContentWrapper>
          {SidebarFilesContent.map((files, index) => {
            return (
              <Content key={index}>
                <div>{files.icon}</div>
                <Text fontSize="xs">{files.name}</Text>
              </Content>
            );
          })}
        </ContentWrapper>
      </LowerContainerOfSideBar>
    </Flex>
  );
};

export default Sidebar;
