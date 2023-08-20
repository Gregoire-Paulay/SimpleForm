import CustomInput from "./CustomInput";
import Info from "./Info";

const Content = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmpassword,
  setConfirmpassword,
  showResult,
  setShowResult,
  //   showPassword,
  //   setShowPassword,
}) => {
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email || !confirmpassword) {
      alert("Tout les champs doivent être rempli");
    } else if (password !== confirmpassword) {
      alert("Vos deux mot de passe ne sont pas identiques");
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  //   const togglePassword = () => {
  //     setShowPassword(true);
  //   };

  return (
    <>
      {showResult === false ? (
        <form onSubmit={handleSubmit}>
          <h1>Create account</h1>
          <CustomInput
            label="name"
            title="Name"
            value={username}
            type="text"
            name="username"
            placeholder="Frédéric Rassiat"
            onChange={handleUsernameChange}
          />
          <CustomInput
            title="Email"
            value={email}
            type="email"
            name="email"
            placeholder="fredericrassiat@gmail.com"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <CustomInput
            title="Password"
            value={password}
            type="password"
            name="password"
            placeholder="LeReacteur2023"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <CustomInput
            title="Confirm your password"
            value={confirmpassword}
            type="password"
            name="confirmpassword"
            placeholder="LeReacteur2023"
            onChange={(event) => {
              setConfirmpassword(event.target.value);
            }}
          />

          <button type="submit">Register</button>
        </form>
      ) : (
        <Info
          username={username}
          email={email}
          password={password}
          setShowResult={setShowResult}
        />
      )}
    </>
  );
};

export default Content;
