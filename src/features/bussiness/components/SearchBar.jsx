import React from "react";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Stack spacing={4}>
      <InputGroup size="sm">
        <InputLeftElement pointerEvents="none">
          <SearchIcon fontSize="small" sx={{ color: "grey" }} />
        </InputLeftElement>
        <Input
          width="205px"
          borderRadius="5px"
          backgroundColor="#fafafa"
          placeholder="Search files, teams..."
          fontSize="12px"
        />
      </InputGroup>
    </Stack>
  );
};

export default SearchBar;
