import { Link, useNavigate } from "react-router-dom";

export default function Account() {
  const isLoggedIn = typeof sessionStorage.getItem("user_id") === 'string';
  const name = isLoggedIn ? "Welcome" : "Guest";  
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear()
    navigate("/");
  }
  return (
    <>
      <span>
        {name}
        {isLoggedIn ?
        <button type="button" onClick={handleLogout}>Log Out</button>:
        <Link to="/login">
          <button type="button">Log In</button>
        </Link>}
      </span>
    </>
  )  
}

