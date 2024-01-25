import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Account() {
  const isLoggedIn = typeof sessionStorage.getItem("user_id") === 'string';
  const name = sessionStorage.getItem("user_name") || 'Guest';
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear()
    navigate("/");
  }
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      {isLoggedIn ? (
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
          Log Out
        </Button>
      ) : (
        <Link to="/login">
          <Button variant="outlined" color="secondary" size="small">
            <Typography variant="button">Log In</Typography>
          </Button>
        </Link>
      )}
    </>
  )  
}

