import { Link } from "react-router-dom";
import Account from "./Account";
import { AppBar, Toolbar, Button, Typography, ThemeProvider } from "@mui/material";
import theme from "../theme";

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" >
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Link to="/">
            <Button variant="outlined" color="secondary" size="small">
              <Typography variant="button">Bring me home</Typography>
            </Button>
          </Link>
          <Link to="/submit">
            <Button variant="outlined" color="secondary" size="small">
              <Typography variant="button">Create new post</Typography>
            </Button>
          </Link>
          <Account />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}
