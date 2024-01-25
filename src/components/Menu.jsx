import React from "react";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TextFieldsIcon from "@mui/icons-material/TextFields"; // Rename
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder"; // Move to folder
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // Duplicate
import ArticleIcon from "@mui/icons-material/Article"; // Convert to template
import InsertLinkIcon from "@mui/icons-material/InsertLink"; // Copy link
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo"; // Open in desktop app
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; // Delete

const MenuContainer = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<MoreHorizIcon />}
        variant="outline"
      />

      <MenuList>
        <MenuItem icon={<TextFieldsIcon fontSize="small" />}>
          <Text fontSize="sm">Rename</Text>
        </MenuItem>
        <MenuItem icon={<CreateNewFolderIcon fontSize="small" />}>
          <Text fontSize="sm">Move to folder</Text>
        </MenuItem>
        <MenuItem icon={<ContentCopyIcon fontSize="small" />}>
          <Text fontSize="sm">Duplicate</Text>
        </MenuItem>
        <MenuItem icon={<ArticleIcon fontSize="small" />}>
          <Text fontSize="sm">Convert to template</Text>
        </MenuItem>
        <MenuItem icon={<InsertLinkIcon fontSize="small" />}>
          <Text fontSize="sm">Copy link</Text>
        </MenuItem>
        <MenuItem icon={<PersonalVideoIcon fontSize="small" />}>
          <Text fontSize="sm"> Open in desktop app</Text>
        </MenuItem>
        <MenuItem icon={<DeleteOutlineIcon fontSize="small" />}>
          <Text fontSize="sm" color={"red"}>
            delete
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuContainer;
