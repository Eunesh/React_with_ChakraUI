import React from "react";
import { ImageSectionObject } from "../Objects/ImageSectionObject";
import ImageCard from "../CommonComponent/ImageCard";
import { Grid, GridItem } from "@chakra-ui/react";

const ImageSection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {ImageSectionObject.map((content, index) => {
        return (
          <GridItem>
            <ImageCard
              key={index}
              Src={content.imageSrc}
              Text1={content.text1}
              Text2={content.text2}
              Menu={content.menu}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ImageSection;
