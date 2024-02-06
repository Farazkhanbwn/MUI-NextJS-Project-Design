import { Avatar, Box, Button, Stack, Typography, styled } from "@mui/material";
import React from "react";

const CardStyle = styled(Stack)({
  display: "flex",
  maxWidth: "300px",
  flexDirection: "column",
});

const UserDesign = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const UserCard = () => {
  return (
    <CardStyle>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
          bgcolor: "cyan",
        }}
      >
        <Typography variant="h4" component="p">
          Welcome
        </Typography>
        <Button>Home Button</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/20001214/pexels-photo-20001214/free-photo-of-buyukada-2023-yaz.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <Typography sx={{ ml: 2 }}>Image container</Typography>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Manufacture</Typography>
          <Typography>Essentials For Living</Typography>
        </Box>

        {/* 2nd box */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>SKU</Typography>
          <Typography>Essentials For Living</Typography>
        </Box>

        {/* 3rd box */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Modal #</Typography>
          <Typography>Essentials For Living</Typography>
        </Box>

        {/* 4th box */}
        <Box
          sx={{ display: "flex", justifyContent: "space-between", m: 0, p: 0 }}
        >
          <Typography>Inventory</Typography>
          <Typography>Essentials For Living</Typography>
        </Box>
      </Box>

      <UserDesign>
        <Typography>Crawl Type</Typography>
        <Typography>Discovery Crawl</Typography>
      </UserDesign>

      <UserDesign>
        <Typography>Crawl Stage</Typography>
        <Typography>Google Crawl 3</Typography>
      </UserDesign>

      <UserDesign>
        <Typography>Error Code:</Typography>
        <Typography>404 Error</Typography>
      </UserDesign>

      <UserDesign>
        <Typography>Status Date</Typography>
        <Typography>Jan 2, 2024</Typography>
      </UserDesign>

      <UserDesign>
        <Typography>Crawl Page Link:</Typography>
        <Typography></Typography>
      </UserDesign>
    </CardStyle>
  );
};

export default UserCard;
