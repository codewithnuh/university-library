import Link from "next/link";
import React from "react";
import BookCover from "./globals/BookCover";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverUrl,
  isLoaned = false,
}: Book) => {
  return (
    <li>
      <Link href={`/books/${id}`}>
        <BookCover
          coverColor={coverColor}
          coverImage={coverUrl}
          variant="regular"
        />
      </Link>
    </li>
  );
};

export default BookCard;
