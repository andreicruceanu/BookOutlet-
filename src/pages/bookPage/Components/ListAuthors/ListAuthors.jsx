import Author from "../Author/Author";

const ListAuthors = ({ listAuthors }) => {
  return (
    <>
      {listAuthors &&
        listAuthors.map((author) => (
          <Author author={author} key={author.authorId} />
        ))}
    </>
  );
};

export default ListAuthors;
