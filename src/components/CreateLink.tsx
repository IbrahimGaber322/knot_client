import * as React from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Input,
  Box,
  Paper,
  FormControlLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import Link from "../constants/link";
import { createLink } from "../actions/links";
import FileUploadIcon from "@mui/icons-material/FileUpload";
/*  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Linksection',
    required: true,
  })
  sectionId: Linksection;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  image: string;

  @Prop({ type: Boolean, required: true, default: true })
  active: boolean; */
const CreateLink = ({ sectionId }: { sectionId: string }) => {
  const dispatch = useDispatch();

  const [postData, setPostData] = React.useState({
    label: "",
    url: "",
    image: "",
    active: true,
    sectionId: sectionId,
  });
  const clear = () => {
    setPostData({
      label: "",
      url: "",
      image: "",
      active: true,
      sectionId: sectionId,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(createLink(postData));
    clear();
  };
 
  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const addImage = async (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const base64: any = await convertBase64(file);
      setPostData({ ...postData, image: base64 });
    }
  };

  return (
    <React.Fragment>
      <Grid spacing={2} container>
        <Grid item  xs={12}>
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
        </Grid>

        <Grid item  xs={12}>
          <TextField
            name="url"
            variant="outlined"
            label="Url"
            fullWidth
            required
            inputProps={{ maxLength: 5000 }}
            value={postData.url}
            onChange={(e) => {
              setPostData({ ...postData, url: e.target.value });
            }}
          />
        </Grid>

        <Grid item  xs={12} display="flex" justifyContent="center" alignItems="center">
          <Typography>Upload Image</Typography>
          <FormControlLabel
            labelPlacement="top"
            control={
              <Input
                sx={{ display: "none" }}
                type="file"
                onChange={(e) => addImage(e)}
              />
            }
            label={
              <FileUploadIcon
                sx={{
                  "&:hover": {
                    color: "inherit",
                  },
                }}
                color="secondary"
                fontSize="large"
              />
            }
          />
          <Box component="img" maxHeight="100px" src={postData.image} />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            type="button"
            fullWidth
          >
            <Typography fontWeight={600}>Submit</Typography>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CreateLink;
