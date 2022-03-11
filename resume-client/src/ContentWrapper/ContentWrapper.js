import React from "react";
import Tag from "../ui-components/Tag";

const ContentWrapper = ({ children }) => {
  return (
    <div className="content-wrapper">
      <Tag content="<!doctype>" indent="0" />
      <Tag content="<html>" indent="0" />
      <Tag content="<body>" indent="2%" />
      {children}
      <Tag content="</body>" indent="2%" />
      <Tag content="</html>" indent="0" />
    </div>
  );
};
export default ContentWrapper;
