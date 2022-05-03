import * as React from "react";
import "./../styles.css";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// ====================================
import PreTask from "./pretask";
import Patch from "./patch";
import PostTask from "./posttask";

function ControlTask() {
  return (
    <div>
      <PreTask />
      <Patch />
      <PostTask />
    </div>
  );
}
export default ControlTask;
