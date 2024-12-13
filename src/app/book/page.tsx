import { Book } from "@/types/book";
import axios from "axios";
import Link from "next/link";
import { formatDateToDDMMYYYY } from '@/utils/helper';

const fetchBooks = async (): Promise<Book[]> => {
  const response = await axios.get("https://fakerapi.it/api/v1/books");
  return response.data.data;
};

const BookListPage = async () => {
  const books = await fetchBooks();

  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Published Date</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>
                <Link href={`/book/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.isbn}</td>
              <td>{formatDateToDDMMYYYY(book.published)}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookListPage;
