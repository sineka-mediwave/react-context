import { useContext } from "react";
import Layout from "../components/Layout";
import { ThemeContext } from "../contexts/UserContext";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Layout title="My context app">
      <h2>React context</h2>
      <p>Current theme: {themeContext.value}</p>
      <p>Current User: {themeContext.user.name}</p>
    </Layout>
  );
};

export default IndexPage;
