import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import OthersNavbar from "../../Shared/OthersNavbar";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import FacebookLogin from "../SocialLogin/FacebookLogin";
import GithubLogin from "../SocialLogin/GithubLogin";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = UseAuth();

  const handleRegister = (data) => {
    const { name, photo, email, password } = data;

    const profileImage = photo[0];

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);

        // store the image and get the photo url
        const formData = new FormData();

        formData.append("image", profileImage);

        const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

        axios.post(imageApiUrl, formData).then((res) => {
          // update user profile to firebase

          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(userProfile)
            .then(() => {
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error.code);

              Swal.fire({
                icon: "error",
                title: "Profile Error!",
                text: ` ${error.message}`,
              });
            });
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Database Error!",
          text: ` ${error.message}`,
        });
      });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <OthersNavbar></OthersNavbar>
      </div>
      <div className="w-full max-w-md mx-auto p-4 md:mt-6 mt-2 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3 text-4xl font-semibold text-center">
          Please Register
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Have an account? please Login
          <Link state={location?.state} to="/login">
            <button className="btn btn-primary ml-2">Login</button>
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

        {/* from */}

        <form
          onSubmit={handleSubmit(handleRegister)}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Your full name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-500"> Name Is Required</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Photo
                </label>
              </div>
              <input
                type="file"
                {...register("photo", { required: true })}
                name="photo"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-500"> Photo Is Required</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
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
              </div>
              <div className="flex">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).{8,}$/,
                  })}
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
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be 6 character or Longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have at least one uppercase, at least one
                  lowercase , at least one number , at least one spacial
                  characters like as "Ac@4mk45"
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
