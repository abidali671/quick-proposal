import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import Button from "./Button";
import Input from "./Input";
import { toast } from "react-toastify";
import config from "@/utils/config";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(config.formSpreeId);

  useEffect(() => {
    state.succeeded &&
      toast("Form submitted successfully", { type: "success" });
  }, [state.succeeded]);

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
            className="col-span-12 md:col-span-1"
            variant="filled"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className="col-span-12 md:col-span-1"
            variant="filled"
            required
          />
          <Input
            placeholder="Subject"
            name="subject"
            className="col-span-12 md:col-span-1"
            variant="filled"
            required
          />

          <Input
            name="message"
            placeholder="Message"
            className="md:col-span-1 col-span-full md:col-start-1 md:col-end-4"
            rows={10}
            multiline
            variant="filled"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Button
            className="mx-auto col-span-3 max-w-60"
            type="submit"
            label="Submit"
            loading={state.submitting}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
