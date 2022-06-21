import React from "react";
import { Icon } from "./icon";

const fn: React.MouseEventHandler = e => {
  console.log(e.target);
};

const IconExample = () => {
  return (
    <div>
      <Icon
        name="wechatPay"
        onClick={fn}
        onMouseEnter={() => {
          console.log("enter");
        }}
        onMouseLeave={() => {
          console.log("leave");
        }}
      />
    </div>
  );
};

export { IconExample };
