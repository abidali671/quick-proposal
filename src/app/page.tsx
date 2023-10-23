"use client";
import Spinner from "@/components/Spinner";
import { clientAPI } from "@/utils/api";
import { FormEventHandler, useState } from "react";

export const maxDuration = 30;

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [values, setValues] = useState({
    title: "",
    description: "",
    skills: "",
  });

  const handleUpdateValue = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSend: FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      const response = await clientAPI.post("/prompt", values);

      setData(response.data.choices[0].message.content);
      console.log("client response: ", response.data);
    } catch (error) {
      console.log("client error: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyContent = () => navigator.clipboard.writeText(data);

  return (
    <div className="w-full items-center grid grid-cols-2 gap-5 p-5">
      <form
        onSubmit={handleSend}
        className=" bg-gray-50 w-full flex flex-col gap-4 border border-gray-200 p-5 rounded-xl shadow-sm"
      >
        <label className="flex flex-col gap-1">
          <p>Job Title</p>
          <input
            required
            placeholder="Job Title"
            className="px-3 py-2 border-2 border-gray-500 rounded-lg"
            value={values.title}
            onChange={(e) => handleUpdateValue("title", e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p>Job Description</p>
          <textarea
            required
            placeholder="Job Description"
            className="px-3 py-2 border-2 border-gray-500 rounded-lg"
            rows={15}
            value={values.description}
            onChange={(e) => handleUpdateValue("description", e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p>Skills (optional)</p>
          <input
            placeholder="Job Required Skills"
            className="px-3 py-2 border-2 border-gray-500 rounded-lg"
            value={values.skills}
            onChange={(e) => handleUpdateValue("skills", e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="w-full h-10 bg-gray-600 rounded-xl text-gray-50"
        >
          {loading ? <Spinner /> : "Generate Proposal"}
        </button>
      </form>
      <div className="h-full bg-gray-50 w-full flex flex-col gap-4 border border-gray-200 p-5 rounded-xl shadow-sm relative">
        {data && (
          <button
            type="submit"
            className="text-xs px-3 py-1 absolute right-4 -top-3 bg-gray-600 rounded text-gray-50"
            onClick={handleCopyContent}
          >
            Copy
          </button>
        )}
        <textarea className="h-full" value={data} />
      </div>
    </div>
  );
}
