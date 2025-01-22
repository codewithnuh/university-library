import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import BookCover from "./globals/BookCover";

const BookOverView = ({
  author,
  title,
  availableCopies,
  coverColor,
  coverUrl,
  description,
  genre,
  id,
  rating,
  summary,
  totalCopies,
  videoUrl,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-col flex-1 gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            by <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1"></div>
        </div>
        <div className="book-copies">
          <p>
            Total Books: <span>{totalCopies}</span>
          </p>
          <p>
            Available Books: <span>{availableCopies}</span>
          </p>
          <p className="book-description">{description}</p>
          <Button className="book-overview_btn">
            <Image src={"/icons/book.svg"} alt={title} width={20} height={20} />
            <p className="text-xl !text-dark-100 uppercase">
              Borrow Book Request
            </p>
          </Button>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center ">
        <div className="relative">
          <BookCover
            coverColor={coverColor}
            coverImage={coverUrl}
            variant="regular"
          />
        </div>
      </div>
    </section>
  );
};

export default BookOverView;
