import { Book } from "@/types/book";
import { formatDateToDDMMYYYY } from "@/utils/helper";
import axios from "axios";
import { notFound } from "next/navigation";

const fetchBookById = async (id: number): Promise<Book | null> => {
    const response = await axios.get('https://fakerapi.it/api/v1/books/');
    const books = response.data.data;
    return books[id] || null;
  };  

const BookDetailPage = async ({ params }: { params: { id: string } }) => {
  const bookId = parseInt(params.id, 10);
  const book = await fetchBookById(bookId);

  if (!book) {
    notFound();
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img
        src={book.image}
        alt={book.title}
      />
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>Published Date:</strong> {formatDateToDDMMYYYY(book.published)}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>
    </div>
  );
};

export default BookDetailPage;
