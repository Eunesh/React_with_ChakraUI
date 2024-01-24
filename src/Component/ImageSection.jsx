import React from "react";

import ImageCard from "../CommonComponent/ImageCard";
import { Grid, GridItem } from "@chakra-ui/react";

const ImageSection = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
      <GridItem>
        <ImageCard />
      </GridItem>
    </Grid>
  );
};

export default ImageSection;
