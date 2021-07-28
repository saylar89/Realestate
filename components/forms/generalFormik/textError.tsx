import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren<{}> {}

const TextError = (props: LayoutProps): JSX.Element => {
  return <div className="error">{props.children}</div>;
};

export default TextError;
