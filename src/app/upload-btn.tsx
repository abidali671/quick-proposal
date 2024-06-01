import axios from "axios";

const UploadBtn = () => {
  return (
    <input
      type="file"
      onChange={async (e) => {
        try {
          axios.post(
            "/api/file",
            { file: e?.target?.files?.[0] },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
        } catch (error) {
          console.log("error: ", error);
        }
      }}
    />
  );
};

export default UploadBtn;
