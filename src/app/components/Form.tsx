"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import type { NextPage } from "next";

const Form: NextPage = () => {
  const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    onSubmit: () => {
      setMessage("Thank you for your message!");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
      message: yup.string().trim(),
    }),
  });

  return (
  
    <form
      className="w-full lg:w-3/5 mx-auto text-center p-9 lg:p-16 rounded-lg"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-12">
        Contact <span className="text-bold text-sky-700">Me</span>
      </h1>
      <div className=" bg-teal-100 text-sky-800 p-16 border-slate-300 border-solid shadow-xl shadow-sky-900/50 rounded-lg">
        <div>
          <label className="mr-6 font-bold " htmlFor="name">
            Name:
          </label>
          <input
            className="w-full md:w-4/5 px-9 py-3 border border-teal-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg placeholder-teal-700"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <div className="text-red-600 pt-3">{formik.errors.name}</div>
          )}
        </div>
        <div className="mt-6">
          <label className="mr-6 font-bold " htmlFor="email">
            Email:
          </label>
          <input
            className="w-full md:w-4/5 px-9  py-3 border border-teal-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg placeholder-teal-700"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-red-600 pt-3">{formik.errors.email}</div>
          )}
        </div>
        <div className="mt-6">
          <label className="font-bold mb-3" htmlFor="email">
            Message:
          </label>
          <textarea
            className="w-full md:w-4/5 px-9 py-3 border border-teal-300 focus:border-teal-500 focus:ring-teal-500 rounded-lg text-sky-800 placeholder-teal-700"
            name="message"
            placeholder="Enter your message here..."
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button className="btn group relative h-12 w-full overflow-hidden rounded-lg bg-white text-lg shadow mt-9">
          <div className="absolute inset-0 w-3 bg-sky-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-sky-800 font-bold group-hover:text-white">
            Send
          </span>
        </button>
      <div className="text-green-600 font-bold mt-6 uppercase" hidden={!submitted}>
    {message}
  </div>
      </div>
    </form>
  );
};

export default Form;
