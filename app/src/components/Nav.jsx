import { useContext } from "react";
import { Avatar } from "@mui/material";

import { ThemeDispatchContext } from "../contexts/UserContext";
import { ThemeContext, AvatarContext } from "../contexts/UserContext";

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);
  const avatarContext = useContext(AvatarContext);

  function handleClick(mode) {
    console.log({ value: mode });
    themeDispatch({ value: mode });
  }

  return (
    <nav className="container">
      <ul>
        <li>
          <strong>Brand</strong>
        </li>
      </ul>
      <ul>
        {/* <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li> */}
        <Avatar
          alt="Itachi"
          src={avatarContext.image}
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
