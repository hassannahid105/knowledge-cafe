/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

const BooksMarks = ({ bookmarks, spendTime }) => {
  return (
    <div>
      <div>
        <p className="border-2 border-blue-500 px-8 py-4 rounded-xl mb-6 bg-blue-50 text-lg font-bold">
          Spent time on read: {spendTime} min
        </p>
      </div>
      <div className="font-bold p-4 bg-gray-100">
        <p>Bookmarked Blogs : {bookmarks.length}</p>

        <div className="">
          {bookmarks.map((single, idx) => (
            <div key={idx} className="bg-white p-4 mt-4 rounded-md ">
              <p className="font-semibold">{single.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// BooksMarks.propTypes = {
//   booksmarks: PropTypes.object,
//   bookmarks: PropTypes.map,
//   spendTime: PropTypes.number,
// };
export default BooksMarks;
