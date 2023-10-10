import { useLoaderData } from "react-router-dom";
import Blog from "../Components/blog";

const Blogs = () => {
  const { blogs } = useLoaderData();

  return (
    <div className="my-32 px-2 md:px-10 lg:px-28">
      <h2 className="text-3xl text-center font-bold text-gray-400 border-b-orange-400 my-6">
        Here Some Collected Blogs
      </h2>

      <div className="md:p-6">
        <div className="">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <Blog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
