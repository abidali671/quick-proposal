"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { clientAPI } from "@/utils/api";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);
  const [originalData, setOriginalData] = useState<string[]>([]);
  const [selectedData] = useState(0);
  const [values, setValues] = useState({
    title: "",
    description: "",
    skills: "",
  });

  const handleSend: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const response = await clientAPI.post("/prompt", values);
      const contentList = response.data.choices.map(
        (value: any) => value.message.content
      );

      setData(contentList);
      setOriginalData(contentList);
    } catch (error) {
      console.log("client error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateValue = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleCopyContent = () => {
    navigator.clipboard.writeText(data[selectedData]);
    toast("Text copied to the clipboard", { type: "success" });
  };

  const handleResetContent = () => {
    setData((prev) =>
      prev.map((val, index) =>
        index === selectedData ? originalData[selectedData] : val
      )
    );
  };

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) =>
      prev.map((val, index) =>
        index === selectedData ? event.target.value : val
      )
    );
  };

  return (
    <div className="w-full items-center grid grid-cols-[400px_1fr]">
      <form
        onSubmit={handleSend}
        className=" bg-white w-full h-full flex flex-col gap-4 border-r border-gray-200 p-5 shadow-sm"
      >
        <Input
          required
          label="Job Title"
          value={values.title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleUpdateValue("title", e.target.value)
          }
        />

        <Input
          rows={5}
          multiline
          required
          label="Job Description"
          value={values.description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleUpdateValue("description", e.target.value)
          }
        />

        <Input
          label="Skills"
          placeholder="Skills (optional)"
          value={values.skills}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleUpdateValue("skills", e.target.value)
          }
        />

        <Button
          variant="secondary"
          label="Generate Proposal"
          type="submit"
          loading={loading}
        />
      </form>
      <div className="h-full bg-white w-full flex flex-col gap-2 p-5 relative ">
        <div className="h-full w-full border border-gray-200 p-5 relative">
          <div className="flex h-10 items-center justify-end absolute right-5 -top-5 bg-white rounded-md">
            {data.length > 0 && (
              <div className="flex items-center gap-2">
                {data[selectedData] !== originalData[selectedData] && (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleResetContent}
                    label="Reset Changes"
                  />
                )}
                <Button
                  size="sm"
                  label="Copy"
                  type="submit"
                  variant="secondary"
                  onClick={handleCopyContent}
                />
              </div>
            )}
          </div>
          <textarea
            disabled={!data.length}
            className="h-full w-full pt-1 resize-none outline-none"
            value={data[selectedData]}
            onChange={handleChangeContent}
          />
        </div>
      </div>
    </div>
  );
}
