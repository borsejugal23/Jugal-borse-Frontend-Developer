// SignUpForm.js

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/AuthReducer/action";
import { useToast } from "@chakra-ui/react";

const SignUpForm = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { toggle } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ formData: formData, callback: handelcallback }));
  };
  const handelcallback = (data) => {
    if (data.msg === "Registered successfully") {
      toast({
        position: "top",
        title: `${data?.msg}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: `${data?.msg}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleToggle = () => {
    toggle();
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-2">
        Create Your Account
      </h2>
      <p className="mb-2 text-center">
        Have an account?{" "}
        <strong onClick={handleToggle} className="cursor-pointer text-blue-600">
          Log in now
        </strong>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="text-md font-medium text-gray-600 mb-1 px-0"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-md font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-md font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
