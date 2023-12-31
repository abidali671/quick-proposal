import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { StarFilled, StarOutlined } from "@/assets/icon";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { clientAPI } from "@/utils/api";

function FeedbackForm() {
  const [hovered, setHovered] = useState(0);

  const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        message: "",
        rating: 0,
      },
      onSubmit: async (data, formikHelpers) => {
        try {
          const response = await clientAPI.post("/feedback", data);
          toast(response.data.msg, { type: "success" });
        } catch (error: any) {
          if (error.response.data.non_field_error)
            toast(error.response.data.non_field_error, { type: "error" });
          else formikHelpers.setErrors(error.response.data);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold text-xl text-footer-link">Feedback Form</h3>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
          {new Array(5)
            .fill("")
            .map((_, i) =>
              hovered > i || values.rating > i ? (
                <StarFilled
                  key={i}
                  className="text-gray-600"
                  onMouseEnter={() => setHovered(i + 1)}
                  onClick={() => setFieldValue("rating", i + 1)}
                />
              ) : (
                <StarOutlined
                  key={i}
                  className="text-gray-600"
                  onMouseEnter={() => setHovered(i + 1)}
                  onClick={() => setFieldValue("rating", i + 1)}
                />
              )
            )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input
            placeholder="Name"
            variant="filled"
            value={values.name}
            error={errors.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFieldValue("name", event.target.value)
            }
          />
          <Input
            placeholder="Email"
            variant="filled"
            value={values.email}
            error={errors.email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFieldValue("email", event.target.value)
            }
          />
        </div>
        <Input
          placeholder="Message"
          variant="filled"
          value={values.message}
          error={errors.message}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFieldValue("message", event.target.value)
          }
        />
        <Button loading={isSubmitting} label="Submit" type="submit" />
      </div>
    </form>
  );
}

export default FeedbackForm;
