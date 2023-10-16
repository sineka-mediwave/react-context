import { useContext } from "react";
import Layout from "../components/Layout";
import { ThemeContext, AvatarContext } from "../contexts/UserContext";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext);
  const avatarContext = useContext(AvatarContext);

  return (
    <Layout title="My context app">
      <h2>React context</h2>
      <p>Current theme: {themeContext.value}</p>
      <p>Current User: {avatarContext.name}</p>
    </Layout>
  );
};

export default IndexPage;
