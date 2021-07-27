import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
<<<<<<< HEAD
  title: "Welcome Fellow Reader",
=======
  title: "Welcome Fellow Peeper,",
>>>>>>> 2d158b5b3d3a3fd4c33389b7089f942501d248d7
  description: "All your favorite books in one place",
  keyword: "books,book,pages,bookshelf",
};

export default Meta;
