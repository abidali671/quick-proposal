import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { StarFilled, StarOutlined } from "@/assets/icon";

function FeedbackForm() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <h3 className="font-bold text-xl text-footer-link">Feedback Form</h3>

      <div className="flex flex-col gap-2 py-4">
        <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
          {new Array(5)
            .fill("")
            .map((_, i) =>
              hovered > i || selected > i ? (
                <StarFilled
                  key={i}
                  className="text-gray-600"
                  onMouseEnter={() => setHovered(i + 1)}
                  onClick={() => setSelected(i + 1)}
                />
              ) : (
                <StarOutlined
                  key={i}
                  className="text-gray-600"
                  onMouseEnter={() => setHovered(i + 1)}
                  onClick={() => setSelected(i + 1)}
                />
              )
            )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="Name" variant="filled" />
          <Input placeholder="Email" variant="filled" />
        </div>
        <Input placeholder="Message" variant="filled" />
        <Button label=" Submit" />
      </div>
    </div>
  );
}

export default FeedbackForm;
