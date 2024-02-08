"use client";
import { Button, Fab, Typography, colors, styled } from "@mui/material";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { EditNotifications } from "@mui/icons-material";
import UserCard from "@/shared/components/user-card";
import ListDoc from "@/shared/components/list-doc";

export default function Home() {
  const BlueButton = styled(Button)({
    backgroundColor: "yelllow",
    color: "black",
    fontWeight: "bold",
    ":hover": { backgroundColor: "darkcyan", color: "white" },
    ":disabled": {
      backgroundColor: "lightblue",
    },
  });

  return (
    <div>
      <Button sx={{ p: 0 }} variant="outlined">
        Text
      </Button>
      <Fab
        sx={{ width: "30px", height: "20px" }}
        color="secondary"
        aria-label="edit"
      >
        <EditNotifications />
      </Fab>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize", bgcolor: "success" }}
        startIcon={<ArrowCircleRightRoundedIcon />}
      >
        Arrow Icon
      </Button>
      <Button
        sx={{ background: "primary" }}
        variant="contained"
        endIcon={<CheckCircleRoundedIcon />}
      >
        CheckCircleRounded
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "yelllow",
          ":hover": { backgroundColor: "darkcyan" },
          // ":disabled" : {
          //   backgroundColor : "lightblue"
          // }
        }}
      >
        Sky Blue
      </Button>

      {/* 2nd Button */}

      <BlueButton>Orange</BlueButton>
      <Typography variant="h3" component="p">
        It Uses H1 Style But ..
      </Typography>

      {/* 3rd Button */}
      {/* <UserCard /> */}
      {/* <ListDoc/> */}
      
    </div>
  );
}
