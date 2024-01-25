import React from "react";
import ImageCard from "./ImageCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { ImageSectionObject } from "../multipleObjects/ImageSectionObject";

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
