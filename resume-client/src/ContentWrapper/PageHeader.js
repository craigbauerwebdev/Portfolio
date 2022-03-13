import React from "react";
import Tag from "../ui-components/Tag";

const PageHeader = ({ text }) => {
  return (
    <>
      <Tag content="<h1>" indent="4%" />
      <div className="page-title">
        <h1>{text}</h1>
      </div>
      <Tag content="</h1>" indent="4%" />
    </>
  );
};
export default PageHeader;
