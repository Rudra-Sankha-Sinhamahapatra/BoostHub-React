
import InputBox from "../components/InputBox";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <InputBox
        type="signin"
        title="Login into your Account"
        label1="Email"
        label2="Password"
        warning="Don't Have an Account!"
        warningopt="Signup"
      />
    </div>
  );
};

export default Login;
