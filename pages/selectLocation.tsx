import Head from "next/head";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
export default function SelectLocationPage() {
  const handleNext = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      streetSingapore: data.get("streetSingapore"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar> */}
        <Typography
          component="h3"
          variant="h5"
          style={{ marginRight: "auto", fontWeight: "600" }}
        >
          Select location!
        </Typography>
        <Box
          component="form"
          onSubmit={handleNext}
          noValidate
          sx={{ mt: 1 }}
          style={{ width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="streetSingapore"
            label="Street Singapore"
            name="streetSingapore"
            autoComplete="streetSingapore"
            autoFocus
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Grid
            container
            style={{ display: "inline-block", width: "100%", textAlign: "end" }}
          >
            <Link href="#" variant="body2">
              {"Use Current Location"}
            </Link>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            href="/menu"
          >
            Next
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
}
