import React from "react";
import { Container } from "@chakra-ui/react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Flex, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ProfileIcon = styled.div({
  height: "32px",
  width: "32px",
  backgroundColor: "purple",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ProfileTextContainer = styled.div({
  fontSize: "12px",
  padding: "5px",
  color: "whitesmoke",
});

const ProfileSectionContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  padding: "5px",
});
const SidebarHeader = () => {
  return (
    <Container p={2} border="1px solid #e2e8f0">
      <Flex alignItems="center" justifyContent={"space-between"}>
        <ProfileSectionContainer>
          <ProfileIcon>
            <ProfileTextContainer>ES</ProfileTextContainer>
          </ProfileIcon>
          <Text fontSize="xs">Eunesh Shahi</Text>
          <ArrowDropDownIcon />
        </ProfileSectionContainer>
        <NotificationsNoneIcon />
      </Flex>
    </Container>
  );
};

export default SidebarHeader;
