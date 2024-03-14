import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = (props) => {
    return (
        <form action="">
          <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
          <InputForm label="Password" type="password" placeholder="*****" name="password" />
          <Button classname="bg-blue-700 w-full">Login</Button>
        </form>
    );
};

export default FormLogin;