import React from "react";
import "./importIcons";
import "./icon.scss";
import { classes } from "../helper/classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ className, name, ...restProps }) => {
  return (
    <svg className={classes("steveUI-icon", className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export { Icon };
