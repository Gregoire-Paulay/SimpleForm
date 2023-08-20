import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const [showResult, setShowResult] = useState(false);
  return (
    <>
      <Content
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmpassword={confirmpassword}
        setConfirmpassword={setConfirmpassword}
        showResult={showResult}
        setShowResult={setShowResult}
        // showPassword={showPassword}
        // setShowpassword={setShowPassword}
      />

      <Footer />
    </>
  );
};

export default App;
