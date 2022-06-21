import React from "react";

interface DialogProps {
  visible: boolean;
}

const Dialog: React.FC<DialogProps> = props => {
  return props.visible ? <div>hi</div> : null;
};

export { Dialog };
