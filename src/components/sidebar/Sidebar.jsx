import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SearchBar from "../SearchBar";
import { SidebarContentObjects } from "../../multipleObjects/SidebarContentObjects";
import { SidebarFilesContent } from "../../multipleObjects/SidebarFilesContentObject";
import styled from "@emotion/styled";
import TuneIcon from "@mui/icons-material/Tune";
import { NavLink, useLocation } from "react-router-dom";

const LowerContainerOfSideBar = styled.div({
  padding: "8px",
});

const NavLinkContainer = styled(NavLink)((prop) => ({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  padding: "5px",
  fontSize: "13px",
  cursor: "pointer",
  backgroundColor: prop.active ? "#D3D3D3" : "white",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#D3D3D3",
  },
}));

const ContentWrapper = styled.div({
  marginTop: "20px",
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const Sidebar = () => {
  const { pathname } = useLocation();
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
              <NavLinkContainer
                to={`/${content.name}`}
                key={index}
                active={pathname.includes(content.name)}
              >
                <div>{content.icon}</div>
                <Text fontSize="xs">{content.name}</Text>
              </NavLinkContainer>
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
              <NavLinkContainer
                to={`/${files.name}`}
                active={pathname.includes(files.name)}
                key={index}
              >
                <div>{files.icon}</div>
                <Text fontSize="xs">{files.name}</Text>
              </NavLinkContainer>
            );
          })}
        </ContentWrapper>
      </LowerContainerOfSideBar>
    </Flex>
  );
};

export default Sidebar;
