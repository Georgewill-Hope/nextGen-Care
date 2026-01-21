"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section>
      <div className="w-full max-w-xl mx-auto px-5 py-20">
        <p className="text-center text-sm md:text-lg tracking-wider font-lato">
          <b className="text-lg md:text-xl text-custom-orange">
            Next Generation Care
          </b>{" "}
          is headquartered in Lacey, Washington State. Simply fill the form
          below and contact us to play your part in improving the lives of
          orphans around the world.
        </p>
        <form className="pt-10">
          <label htmlFor="name" className="tracking-wider font-bold font-lato">
            Full Name:
          </label>
          <InputField
            name="name"
            type="text"
            value={formData.name}
            handleChange={handleChange}
            placeholder="e.g John Doe"
          />
          <label htmlFor="email" className="tracking-wider font-bold font-lato">
            Email:
          </label>
          <InputField
            type="email"
            name="email"
            value={formData.email}
            handleChange={handleChange}
            placeholder="e.g JohnDoe@gmail.com:"
          />

          <label
            htmlFor="message"
            className="tracking-wider font-bold font-lato"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Your Message..."
            className="w-full h-60 outline-none resize-none tracking-wider border border-custom-orange p-5 mb-10 mt-1"
          />

          <Button title="Submit" href="" />
        </form>
      </div>
    </section>
  );
};

export default Form;
