"use client";
import { ChatBox, History } from "@/assets/icon";
import Button from "@/components/Button";
import Input from "@/components/Input";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useStore } from "@/lib/Context";
import { clientAPI } from "@/utils/api";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<null | string>(null);
  const [originalData, setOriginalData] = useState<null | string>(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
    emojis: false,
  });

  const { accessToken, updateUser, user, showHistory, toggleHistory } =
    useStore();

  const handleSend: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const response = await clientAPI.post("/prompt", values, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      updateUser(response.data.user);
      setData(response.data.result?.choices?.[0]?.message?.content);
      setOriginalData(response.data.result?.choices?.[0]?.message?.content);
    } catch (error: any) {
      if (error?.response?.data?.error)
        toast(error?.response?.data?.error, { type: "error" });
      console.log("client error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateValue = <T extends string | boolean>(
    key: string,
    value: T
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleCopyContent = () => {
    navigator.clipboard.writeText(data ?? "");
    toast("Text copied to the clipboard", { type: "success" });
  };

  const handleResetContent = () => {
    setData(originalData);
  };

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setData(event.target.value);
  };

  return (
    <ProtectedRoute>
      <div className="w-full grid md:grid-cols-[400px_1fr] max-md:grid-rows-[auto_1fr]">
        <div className="md:grid md:grid-rows-[auto_auto_1fr] border-r border-gray-200 shadow-sm">
          <form onSubmit={handleSend} className="bg-white grid gap-4 p-5">
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
              className="max-md:h-[100px]"
              label="Job Description"
              value={values.description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                handleUpdateValue("description", e.target.value)
              }
            />
            <label className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={values.emojis}
                onChange={(e) => handleUpdateValue("emojis", e.target.checked)}
              />
              <p>Include Emojis</p>
            </label>
            <Button
              className="max-md:col-span-2"
              variant="secondary"
              label="Generate Proposal"
              type="submit"
              loading={loading}
            />
          </form>
          <div className="border-b border-gray-200" />
          <div
            onClick={toggleHistory}
            className={
              "md:hidden fixed bg-black h-screen w-screen z-50 top-[56px] left-0 opacity-50 " +
              (showHistory ? "block" : "hidden")
            }
          />
          <div
            className={
              "p-5 flex flex-col gap-1 w-full max-md:fixed max-md:h-screen max-md:w-10/12 z-50 top-[56px] bg-white transition-all duration-30000 " +
              (showHistory ? "left-0" : "-left-full")
            }
          >
            <div className="flex items-center gap-1 pb-1">
              <History className="text-gray-500 h-4 w-4" />
              <h6 className="text-xs font-semibold text-gray-400">HISTORY</h6>
            </div>
            {user?.history?.map((d: any, i: number) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] gap-2 items-center bg-gray-50 hover:bg-gray-100 cursor-pointer px-5"
                onClick={() => {
                  setData(d?.choices?.[0]?.message?.content);
                  setOriginalData(d?.choices?.[0]?.message?.content);
                  toggleHistory();
                }}
              >
                <ChatBox className="text-gray-500 w-5 h-5 min-w-5" />
                <p className="text-sm leading-10 font-medium text-gray-600 truncate capitalize">
                  {d?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full bg-white w-full flex flex-col gap-2 p-5 relative">
          <div className="h-full w-full border border-gray-200 p-5 relative">
            <div className="flex h-10 items-center justify-end absolute right-5 -top-5 bg-white rounded-md">
              {data && (
                <div className="flex items-center gap-2">
                  {data !== originalData && (
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
              disabled={!data}
              className="h-full w-full pt-1 resize-none outline-none"
              value={data ?? ""}
              onChange={handleChangeContent}
            />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
