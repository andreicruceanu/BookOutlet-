import React from "react";
import Author from "../Author/Author";

const ListAuthors = ({ listAuthors }) => {
  return (
    <>
      {listAuthors && listAuthors.map((author) => <Author author={author} />)}
    </>
  );
};

export default ListAuthors;
