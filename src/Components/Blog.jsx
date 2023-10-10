import React from "react";

const Blog = ({ blog }) => {
  const { title, author, date, content, tags } = blog;
  return (
    <div className=" px-2 md:px-24 py-3 space-y-3 shadow-md">
      <h2 className="font-semibold text-xl">{author}</h2>
      <h3>Date : {date}</h3>
      <ul className="flex gap-2">
        {tags?.map((tag, index) => (
          <li key={index} className="text-blue-600">
            #{tag}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Blog;
