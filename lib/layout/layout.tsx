import React, { ReactElement } from "react";
import { scopedClassMaker } from "../helper/classes";
import { Aside } from "./aside";
import "./layout.scss";

const sc = scopedClassMaker("steveUI-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = props => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;
  const hasAside =
    "length" in children &&
    children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <div className={sc({ "": true, hasAside }, { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export { Layout };
export { Header } from "./header";
export { Aside } from "./aside";
export { Content } from "./content";
export { Footer } from "./footer";
