import { Link } from "react-router-dom";
import Account from "./Account";
export default function NavBar() {
  return (
    <nav>
      <div className="contents">
        <Link to="/">
          <button type="button">Bring me home</button>
        </Link>
        <Link to="/submit">
          <button type="button">Create new post</button>
        </Link>
        <Account />
      </div>
    </nav>
  )
}
