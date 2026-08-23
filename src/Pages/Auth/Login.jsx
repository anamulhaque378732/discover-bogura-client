import { Link, useLocation, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";
import { IoEye } from "react-icons/io5";

import { useForm } from "react-hook-form";

import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import GithubLogin from "./SocialLogin/GithubLogin";
import FacebookLogin from "./SocialLogin/FacebookLogin";
import GoogleLogin from "./SocialLogin/GoogleLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { signInUser, resetPassword } = UseAuth();

  const handleLogin = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${result.user.displayName || "User"}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33",
        });
      });
  };

  const handleResetPassword = () => {
    const email = getValues("email");
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email first.",
      });

      return;
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Check Your Email",
          text: "If an account exists with this email, a password reset link has been sent.",
          confirmButtonColor: "#8b5cf6",
        });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          Swal.fire({
            icon: "error",
            title: "Invalid Email!",
            text: "Please enter a valid email address.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Something Went Wrong!",
            text: error.message,
          });
        }
      });
  };

  return (
    <>
      <div className="w-full max-w-md md:mt-10   mt-2 mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-5xl font-semibold text-center">
          Please Login
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Dont have account? please Register
          <Link state={location?.state} to="/register">
            <button className="btn btn-secondary ml-2">Register</button>
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <GoogleLogin></GoogleLogin>
          <FacebookLogin></FacebookLogin>
          <GithubLogin></GithubLogin>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          noValidate=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500"> Email Is Required</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleResetPassword}
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </button>
              </div>
              <div className="flex">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <span
                  className="mt-2.5 text-xl -ml-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <IoEye />}
                </span>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-xl"> Password is required</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
