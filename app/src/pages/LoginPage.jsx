import { useState } from "react";
import Layout from "../components/Layout";
import { v4 as uuidv4 } from "uuid";

const LoginPage = () => {
  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  function handleClick(e) {
    e.preventdefault();
  }
  return (
    <Layout title="login Page">
      <h2>Login Page</h2>
      <form onSubmit={(e) => handleClick(e)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          // onChange={(e) => handleOnChange("name", e.target.value)}
          required
        />
        <label htmlFor="image">Proifle pic</label>
        <input
          id="image"
          type="text"
          placeholder="Enter url"
          name="image"
          value={user.image}
          // onChange={(e) => handleOnChange("image", e.target.value)}
          required
        />
        <button type="submit">login</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
