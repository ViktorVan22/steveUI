import React from "react";
import ReactDom from "react-dom";
import { Icon } from "./icon";

ReactDom.render(
  <div>
    <Icon name="wechatPay" />
    <Icon name="alipay" />
    <Icon name="milkTea" />
    <Icon name="chips" />
  </div>,
  document.querySelector("#root")
);
