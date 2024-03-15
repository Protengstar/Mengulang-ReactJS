import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if( status ) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  })
    return (
        <form onSubmit={handleLogin}>
          <InputForm label="Username" type="text" placeholder="John Doe" name="username" ref={usernameRef} />
          <InputForm label="Password" type="password" placeholder="*****" name="password" />
          {/* {loginFailed && <p className="text-red-700 text-center mb-2">{loginFailed}</p>} */}
          <Button classname="bg-blue-700 w-full" type="submit">Login</Button>
        </form>
    );
};

export default FormLogin;