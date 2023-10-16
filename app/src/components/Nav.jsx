import { useContext } from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import { ThemeDispatchContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/UserContext";

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);

  function handleClick(mode) {
    console.log({ value: mode });
    themeDispatch({ ...themeContext, value: mode });
  }

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Sineka Ramamoorthy</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Login</Link>
        </li>
        <Avatar
          title="Sineka Ramamoorthy"
          alt="Itachi"
          src={themeContext.user.image}
          sx={{ width: 62, height: 62 }}
        />
        <li>
          {themeContext.value === "light" ? (
            <button onClick={() => handleClick("dark")}>🌙</button>
          ) : (
            <button onClick={() => handleClick("light")}>🌞</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
