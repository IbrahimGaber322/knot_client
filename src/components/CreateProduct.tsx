import * as React from "react";
import { Button, Typography, Grid, Menu, MenuItem, Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { createProduct } from "../actions/products";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [postData, setPostData] = React.useState({
    type: "CARD",
    active: true,
  });

  const clear = () => {
    setPostData({
      type: "CARD",
      active: true,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createProduct(postData));
    clear();
  };

  return (
    <Box display="flex" gap={4} justifyContent="center">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        {postData.type}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setPostData({ ...postData, type: "CARD" });
          }}
        >
          Card
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setPostData({ ...postData, type: "KEYCHAIN" });
          }}
        >
          Key Chain
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setPostData({ ...postData, type: "STICKER" });
          }}
        >
          Sticker
        </MenuItem>
      </Menu>

      <Button onClick={handleSubmit} variant="contained" type="button">
        <Typography fontWeight={600}>Submit</Typography>
      </Button>
    </Box>
  );
};

export default CreateProduct;
