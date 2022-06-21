import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// id: "Burger_King_Combo_1",
//     name: "Burger King Combo 1",
//     image:
//       "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220530043120018151/detail/820383be7c6d4b4ea3ff93f4270e4391_1653885080237208246.webp",
//     type: "HTML",
//     relevance: 10000,
const theme = createTheme();
export default function MediaCard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Burger King Combo 1</h1>
            <Card >
              <CardMedia
                component="img"
                // height="100%"
                width="100%"
                image="https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220530043120018151/detail/820383be7c6d4b4ea3ff93f4270e4391_1653885080237208246.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Burger King Combo 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  1 Whopper Jr Grilled Beef Burger, 1 Medium Cheese Beef Whopper
                  Burger, 4 Chicken Nuggets, 2 Soft Drinks
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
