import React from "react";
import styled from "@emotion/styled";
import Header from "../Component/Header";
import SmallHeightCard from "../CommonComponent/SmallHeightCard";
import { CreateSectionObjects } from "../Objects/CreateSectionObject";
import { Box } from "@chakra-ui/react";
import ImageSection from "../Component/ImageSection";

const RightSideWrapper = styled(Box)({
  marginLeft: "230px",
  padding: "15px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const CreateSectionWrapper = styled.div({
  display: "flex",
  gap: "20px",
});

const Bussiness = () => {
  return (
    <>
      <RightSideWrapper>
        <Header />
        <CreateSectionWrapper>
          {CreateSectionObjects.map((content, index) => {
            return (
              <SmallHeightCard
                key={index}
                Icon={content.icon}
                Text1={content.text1}
                Text2={content.text2}
              />
            );
          })}
        </CreateSectionWrapper>
        <ImageSection />
      </RightSideWrapper>
    </>
  );
};

export default Bussiness;
