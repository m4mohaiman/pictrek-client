import React, { useState } from "react";
import usestyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData , setPostData] = useState({ creator:'', title:'' , message:'', tags:'', selectedFile:''});  
  const classes = usestyles();
  const dispatch = useDispatch();
  //console.log(postData)
  const handleSubmit = (e) => {
    console.log('click')
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () =>{
    console.log('clear')
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      ></form>
      <Typography variant="h6" className={classes.mb20}>Create a Post</Typography>
      <TextField
        className={classes.mb20}
        name="creator"
        variant="outlined"
        label="Creator"
        fullWidth
        value={postData.creator}
        onChange={(e)=>setPostData({...postData, creator: e.target.value})}
      ></TextField>
      <TextField
        className={classes.mb20}
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={postData.title}
        onChange={(e)=>setPostData({...postData, title: e.target.value})}
      ></TextField>
      <TextField
        className={classes.mb20}
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        value={postData.message}
        onChange={(e)=>setPostData({...postData, message: e.target.value})}
      ></TextField>
      <TextField
        name="tags"
        variant="outlined"
        label="Tags"
        fullWidth
        value={postData.tags}
        onChange={(e)=>setPostData({...postData, tags: e.target.value})}
      ></TextField>
      <div className={classes.fileInput}>
        <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
      </div>
      <Button onClick={handleSubmit} className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
        Submit
      </Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
        Clear
      </Button>
    </Paper>
  );
};

export default Form;
