"use client";
import Spinner from "@/components/Spinner";
import { clientAPI } from "@/utils/api";
import { ChangeEvent, FormEventHandler, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [originalData, setOriginalData] = useState<string[]>([]);
  const [selectedData, setSelectedData] = useState(0);
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
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
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

  const handleChangeData = (index: number) => {
    setSelectedData(index);
  };

  return (
    <div className="w-full items-center grid grid-cols-[400px_1fr]">
      <form
        onSubmit={handleSend}
        className=" bg-white w-full h-full flex flex-col gap-4 border-r border-gray-200 p-5 shadow-sm"
      >
        <label className="flex flex-col gap-1">
          <p>Job Title</p>
          <input
            required
            placeholder="Job Title"
            className="px-3 py-2 border-2 border-gray-500 rounded-md"
            value={values.title}
            onChange={(e) => handleUpdateValue("title", e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p>Job Description</p>
          <textarea
            required
            placeholder="Job Description"
            className="px-3 py-2 border-2 border-gray-500 rounded-md"
            rows={15}
            value={values.description}
            onChange={(e) => handleUpdateValue("description", e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p>Skills</p>
          <input
            placeholder="Job Required Skills"
            className="px-3 py-2 border-2 border-gray-500 rounded-md"
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
      <div className="h-full bg-white w-full flex flex-col gap-2 p-5 relative">
        <div className="flex h-10 items-center justify-between">
          {data.length > 0 && (
            <>
              <div className="flex gap-2">
                <button
                  disabled={selectedData === 0}
                  onClick={() => handleChangeData(selectedData - 1)}
                  className={`text-xs w-14 py-1 rounded text-gray-50 duration-300 bg-gray-600 disabled:bg-gray-300`}
                >
                  Prev
                </button>
                <button
                  disabled={selectedData === data.length - 1}
                  onClick={() => handleChangeData(selectedData + 1)}
                  className={`text-xs w-14 py-1 rounded text-gray-50 duration-300 bg-gray-600 disabled:bg-gray-300`}
                >
                  Next
                </button>
              </div>
              <p className="text-xs">
                {selectedData + 1} / {data.length}
              </p>
              <div className="flex items-center gap-2">
                {data[selectedData] !== originalData[selectedData] && (
                  <button
                    type="submit"
                    className={`text-xs px-3 py-1 rounded text-gray-50 duration-300 bg-gray-600`}
                    onClick={handleResetContent}
                  >
                    Reset Changes
                  </button>
                )}
                <button
                  type="submit"
                  className={`text-xs w-14 py-1 rounded text-gray-50 duration-300 ${
                    copied ? "bg-yellow-500" : "bg-gray-600"
                  }`}
                  onClick={handleCopyContent}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </>
          )}
        </div>
        <textarea
          disabled={!data.length}
          className="h-full resize-none outline-none"
          value={data[selectedData]}
          onChange={handleChangeContent}
        />
      </div>
    </div>
  );
}
