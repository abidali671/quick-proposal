import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import Input from "./Input";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="wrapper py-24" id="contact-us">
      <div className="">
        <h6 className="text-green-light font-bold text-center tracking-widest	">
          Get in Touch
        </h6>
        <h3 className="text-3xl text-center font-bold">
          Reach Out to Us for{" "}
          <span className="text-orange-light">
            Inquiries, Assistance, or
            <br /> Just to Say Hello!
          </span>
        </h3>

        <form
          className="grid grid-cols-12 md:grid-cols-3 *:outline-none py-10 gap-6 "
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="col-span-12 md:col-span-1"
            variant="filled"
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="col-span-12 md:col-span-1"
            variant="filled"
          />
          <Input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="col-span-12 md:col-span-1"
            variant="filled"
          />

          <Input
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-1 col-span-full md:col-start-1 md:col-end-4"
            rows={10}
            multiline
            variant="filled"
          />

          <Button
            className="mx-auto col-span-3 max-w-60"
            type="submit"
            label="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
