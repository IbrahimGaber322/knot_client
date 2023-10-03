import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, TextField } from "@mui/material";
import Linksection from "../constants/linksection";
import AddIcon from "@mui/icons-material/Add";
import {
  createLinksection,
  getLinkSectionsByUser,
} from "../actions/linksections";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Linksections({
  activeSection,
  setActiveSection,
}: {
  activeSection: Linksection|null;
  setActiveSection: Function;
}) {
  const dispatch = useDispatch();
  const linksections = useSelector((state: any) => state.linksections);
  const [postData, setPostData] = React.useState({
    label: "",
    active: true,
  });

  const handleAddSection = () => {
    dispatch(createLinksection(postData));
    setPostData({
      label: "",
      active: true,
    });
  };
  return (
    <React.Fragment>
      <Title>Link Sections</Title>

      <Box display="flex" justifyContent="space-between">
        <TextField
          name="label"
          variant="outlined"
          label="Label"
          fullWidth
          required
          inputProps={{ maxLength: 60 }}
          value={postData.label}
          onChange={(e) => {
            setPostData({ ...postData, label: e.target.value });
          }}
        />
        <IconButton onClick={handleAddSection}>
          <AddIcon />
        </IconButton>
      </Box>

      {linksections.map((section: Linksection, i: number) => (
        <Box onClick={()=>setActiveSection(section)} key={i}  sx={{ cursor:"pointer", border:"solid 1px black", borderRadius:3, ":hover":{bgcolor:"grey"} }} my={1} py={1} justifyContent="space-between">
          <Typography textAlign="center">{section.label}</Typography>
         
        </Box>
      ))}
    </React.Fragment>
  );
}
