import React, { Fragment, ReactElement } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: Boolean;
  children: React.ReactNode;
}

const Dialog: React.FunctionComponent<Props> = props => {
  // const onClickClose: React.MouseEventHandler = e => {
  //   props.onClose(e);
  // };

  // const onClickMask: React.MouseEventHandler = e => {
  //   if (props.closeOnClickMask) {
  //     props.onClose(e);
  //   }
  // };

  const x = props.visible ? (
    <Fragment>
      <div className="steveUI-dialog-mask"></div>
      <div className="steveUI-dialog">
        <div className="steveUI-dialog-close">close</div>
        <header className="steveUI-dialog-header">提示</header>
        <main className="steveUI-dialog-main">{props.children}</main>
        <footer className="steveUI-dialog-footer">
          {props.buttons &&
            props.buttons.map((button, index) =>
              React.cloneElement(button, { key: index })
            )}
        </footer>
      </div>
    </Fragment>
  ) : null;
  return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

const alert = (content: string) => {
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {content}
    </Dialog>
  );
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
};

export { alert };
export { Dialog };
