import { sampleBooks } from "@/constants";
import React from "react";
import BookCard from "./BookCard";
const BookList = ({ book, containerClassName }: BookListProps) => {
  return (
    <section className="mt-10">
      <h1 className="font-bebas-neue text-4xl text-light-100 ">Latest Books</h1>
      <div className="book-list">
        {sampleBooks.map((book) => (
          <BookCard {...book} key={book.id} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
