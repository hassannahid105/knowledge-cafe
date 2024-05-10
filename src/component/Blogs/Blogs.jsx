import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookmarks, handleSpendTime }) => {
  const [blogs, setBlogs] = useState([]);
  useState(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="col-span-3 ">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          key={blog.id}
          handleBookmarks={handleBookmarks}
          handleSpendTime={handleSpendTime}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmarks: PropTypes.func,
  handleSpendTime: PropTypes.func,
};
export default Blogs;
