import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import BooksMarks from "./component/Booksmarks/BooksMarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spendTime, setSpendTime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const handleSpendTime = (time, id) => {
    const newSpendTime = spendTime + time;
    setSpendTime(newSpendTime);
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
  };

  console.log(bookmarks);
  return (
    <>
      <Header></Header>
      <main>
        <div className="grid grid-cols-4 gap-4 mt-6 p-10">
          <Blogs
            handleBookmarks={handleBookmarks}
            handleSpendTime={handleSpendTime}
          ></Blogs>
          <BooksMarks bookmarks={bookmarks} spendTime={spendTime}></BooksMarks>
        </div>
      </main>
    </>
  );
}

export default App;
