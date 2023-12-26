import React, { useState, ChangeEvent, FormEvent } from "react";

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
        <h1 className="text-4xl font-bold text-center">Contact Form</h1>

        <form
          className="grid grid-cols-12 md:grid-cols-3 [&>*]:bg-black/10 *:outline-none py-10 gap-6 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id=""
            className="p-4 col-span-12 md:col-span-1"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id=""
            className="p-4 col-span-12 md:col-span-1"
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id=""
            className="p-4 col-span-12 md:col-span-1"
          />

          <textarea
            name="message"
            placeholder="Message..."
            id=""
            cols={30}
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-1 col-span-full md:col-start-1 md:col-end-4 p-4"
            rows={10}
          ></textarea>

          <button
            type="submit"
            className="text-white !bg-orange-light text-center col-span-full   w-32 p-3 rounded-sm mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
