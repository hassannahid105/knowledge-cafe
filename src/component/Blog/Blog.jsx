import PropTypes from "prop-types";
import { IoBookmarksSharp } from "react-icons/io5";
const Blog = ({ blog, handleBookmarks, handleSpendTime }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="mb-6 ">
      <img src={cover} alt="blog images" className="rounded-xl" />
      {/* new */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center justify-center gap-3 ">
          <div>
            <img src={author_img} alt="authorImage" className="w-16" />
          </div>
          <div>
            <p className="font-bold text-lg">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p className="font-bold">{reading_time}</p>
          {/* =========== */}
          <button
            className="text-2xl"
            onClick={() => {
              handleBookmarks(blog);
            }}
          >
            <IoBookmarksSharp />
          </button>
        </div>
      </div>
      {/* end */}
      <div className="text-3xl font-bold mb-6 ml-6">
        <h3>{title}</h3>
        <div className="flex items-center gap-2">
          {hashtag.map((tag, idx) => (
            <p className="text-sm text-gray-500 mt-6 font-semibold" key={idx}>
              #{tag}
            </p>
          ))}
        </div>
        <button
          className="text-purple-800 underline text-sm underline-offset-2"
          onClick={() => {
            handleSpendTime(reading_time);
          }}
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmarks: PropTypes.func,
  handleSpendTime: PropTypes.func,
};
export default Blog;
