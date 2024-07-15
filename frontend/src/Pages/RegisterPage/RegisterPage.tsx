import React from 'react'
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';

type Props = {}

type RegisterFormsInput = {
    email: string;
    userName: string;
    password: string;
};

const validation = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    userName: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const RegisterPage = (props: Props) => {
    const { registerUser } = useAuth();
    const { register, handleSubmit, formState: { errors }} = useForm<RegisterFormsInput>({ resolver: yupResolver(validation)});

    const handleLogin = (form: RegisterFormsInput) => {
        registerUser(form.email, form.userName, form.password);
    };


  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-2xl md:mb-20 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-4xl">
              Register now
            </h1>
            <p className="text-sm text-black leading-tight tracking-tight md:text-sm">Plan and document your next adventures</p>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="text-white">{errors.email.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName ? (
                  <p className="text-white">{errors.userName.message}</p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("password")}
                />
                {errors.password ? (
                  <p className="text-white">{errors.password.message}</p>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage