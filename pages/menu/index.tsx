import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const data = [
  {
    id: "burger_king_combo_1",
    name: "Burger King Combo 1",
    image:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20220530043120018151/detail/820383be7c6d4b4ea3ff93f4270e4391_1653885080237208246.webp",
    type: "HTML",
    relevance: 10000,
  },
  {
    id: "cheese_burger_sprite",
    name: "Cheese Burger + Sprite",
    image:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20211108165905265301/detail/f6549438c7374128ba06df0816cb4cee_1636390745778928751.webp",
    type: "HTML",
    relevance: 9999,
  },
  {
    id: "burger_king_combo_2",
    name: "Burger King Combo 2",
    image:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE20200825092027650102/detail/399e64e7177941aa995d9c96833274f5_1648659025674487446.webp",
    type: "HTML",
    relevance: 90.46,
  },
  {
    id: "burger_king_combo_3",
    name: "Burger King Combo 3",
    image:
      "https://d1sag4ddilekf6.azureedge.net/compressed_webp/items/VNITE202008250920261120714/detail/9994801aca674455ab73ddbadd9eab95_1648658955734576921.webp",
    type: "HTML",
    relevance: 23.8,
  },
];

const theme = createTheme();

export default function MenuListPage() {
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
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((e, i) => (
              <Grid item key={i} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={
                      {
                        // 16:9
                        // pt: "56.25%",
                      }
                    }
                    image={e.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {e.name}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/menu/${e.id}`}>
                      View
                    </Button>
                    <Button size="small" href="#">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
