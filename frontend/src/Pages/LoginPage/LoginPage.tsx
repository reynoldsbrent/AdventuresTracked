import React from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';

type Props = {}

type LoginFormsInput = {
    userName: string;
    password: string;
};

const validation = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
    const { loginUser } = useAuth();
    const { register, handleSubmit, formState: { errors }} = useForm<LoginFormsInput>({ resolver: yupResolver(validation)});

    const handleLogin = (form: LoginFormsInput) => {
        loginUser(form.userName, form.password);
    };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl md:mb-20 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-4xl ">
              Sign in
            </h1>
            <p className="text-sm text-black leading-tight tracking-tight md:text-sm">Welcome back, Please sign in to your account.</p>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLogin)}>
              <div>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName ? <p className="text-black">{errors.userName.message}</p> : ""}
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("password")}
                />
                {errors.password ? <p className="text-black">{errors.password.message}</p> : ""}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-blue-700 font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm text-blue-700">
                New to AdventuresTracked?{" "}
                <a
                  href="#"
                  className="text-primary-600 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage