import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { children, title, type } = props;
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-800">{title}</h1>
                <p className="font-medium text-slite-500 mb-8">Yokoso, Please enter your details</p>
                {children}
                <p className="text-sm mt-3 text-center">
                    {type === 'login' ? "Don't have an account? " : "Have an account? "}
                    {type === "login" && (<Link to="/register" className="font-bold text-blue-600">Register!</Link>)}
                    {type === "register" && (<Link to="/login" className="font-bold text-blue-600">Log In!</Link>)}
                </p>
            </div>
        </div>
    );
};

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-sm mt-3 text-center">
                Don't have an account?{" "}
                <Link to="/register" className="font-bold text-blue-600">Register!</Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm mt-3 text-center">
                Have an account?{" "}
                <Link to="/login" className="font-bold text-blue-600">Log in!</Link>
            </p>  
        );
    }
};


export default AuthLayout;