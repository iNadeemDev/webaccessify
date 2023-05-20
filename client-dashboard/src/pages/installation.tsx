import React from "react";
import { Button, message } from "antd";
import "antd";

type InstallationProps = {
  [key: string]: any;
};

const Installation = (props: InstallationProps) => {
  const { code } = props;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    message.success({
      content: "Code copied to clipboard!",
      className: "copy-message",
      //style: { zIndex: 9999 }, // This will not work, use CSS instead
    });
  };

  return (
    <>
    <div style={{ marginBottom: "16px" }}>
      {code}
    </div>
    <Button onClick={handleCopy}>Copy Code</Button>
    </>
    
  );
};

export default Installation;