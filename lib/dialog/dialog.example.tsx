import React, { useState } from "react";
import { Dialog } from "./dialog";

const DialogExample = () => {
  const [x, setX] = useState(false);
  const openDialog = () => {
    setX(!x);
  };
  return (
    <div>
      <button onClick={openDialog}>点击出现对话框</button>
      <Dialog visible={x} />
    </div>
  );
};

export { DialogExample };
