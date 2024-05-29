import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import "./BookList.css";

const BookList = () => {
  // const filteredBooks = books.filter((book) => {
  //     const matchesTitle = book.title
  //         .toLowerCase()
  //         .includes(titleFilter.toLowerCase());
  //     const matchesAuthor = book.author
  //         .toLowerCase()
  //         .includes(authorFilter.toLowerCase());
  //     const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
  //     return matchesTitle && matchesAuthor && matchesFavorite;
  // });

  const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {[] === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {[].map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.title, titleFilter)} by{" "}
                <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                {book.source})
              </div>
              <div className="book-actions">
                <span>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
