"use client";
import { ChatBox, History } from "@/assets/icon";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ProtectedRoute from "@/components/ProtectedRoute";
import { clientAPI } from "@/utils/api";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
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

  let accessToken = "";

  if (typeof window !== "undefined") {
    accessToken = localStorage?.getItem("accessToken") ?? "";
  }

  const handleSend: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const response = await clientAPI.post("/prompt", values, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
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
    <ProtectedRoute>
      <div className="w-full grid md:grid-cols-[400px_1fr] max-md:grid-rows-[auto_1fr]">
        <div className="md:grid md:grid-rows-[auto_auto_1fr] border-r border-gray-200 shadow-sm">
          <form
            onSubmit={handleSend}
            className="bg-white grid gap-4 max-md:grid-cols-2 p-5"
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
              label="Skills"
              placeholder="Skills (optional)"
              value={values.skills}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleUpdateValue("skills", e.target.value)
              }
            />

            <Input
              rows={5}
              multiline
              required
              className="max-md:h-[100px] max-md:col-span-2"
              label="Job Description"
              value={values.description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleUpdateValue("description", e.target.value)
              }
            />

            <Button
              className="max-md:col-span-2"
              variant="secondary"
              label="Generate Proposal"
              type="submit"
              loading={loading}
            />
          </form>
          <div className="border-b border-gray-200" />
          <div className="p-5 flex flex-col gap-1 w-full max-md:hidden">
            <div className="flex items-center gap-1 pb-1">
              <History className="text-gray-500 h-4 w-4" />
              <h6 className="text-xs font-semibold text-gray-400">HISTORY</h6>
            </div>
            {["Web Developer", "Mern Stack"].map((d, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] gap-2 items-center bg-gray-50 hover:bg-gray-100 cursor-pointer px-5"
              >
                <ChatBox className="text-gray-500 w-5 h-5 min-w-5" />
                <p className="text-sm leading-10 font-medium text-gray-600 truncate">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full bg-white w-full flex flex-col gap-2 p-5 relative">
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
    </ProtectedRoute>
  );
}
