import React, { createContext, useState } from "react";

const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const AvatarContext = createContext(undefined);
const AvatarDispatchContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
    user: {
      name: "Sineka",
      image:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/itachi.jpg",
    },
  });

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Sineka",
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/06/itachi.jpg",
  });
  return (
    <AvatarContext.Provider value={user}>
      <AvatarDispatchContext.Provider value={setUser}>
        {children}
      </AvatarDispatchContext.Provider>
    </AvatarContext.Provider>
  );
}
export {
  ThemeProvider,
  UserProvider,
  AvatarContext,
  AvatarDispatchContext,
  ThemeContext,
  ThemeDispatchContext,
};
