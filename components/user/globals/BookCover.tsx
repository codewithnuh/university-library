import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "../BookCoverSvg";
type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";
const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book_cover_extra_small",
  small: "book_cover_small",
  medium: "book_cover_medium",
  regular: "book_cover_regular",
  wide: "book_cover_wide",
};
interface BookCover {
  variant: BookCoverVariant;
  className?: string;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  variant,
  className,
  coverColor,
  coverImage,
}: BookCover) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <div className="relative">
        <BookCoverSvg coverColor={coverColor} />

        <div className="h-[87%] w-[88%] bottom-[52px] absolute ">
          <Image src={coverImage} fill alt="Book" className="!left-9" />
        </div>
      </div>
    </div>
  );
};

export default BookCover;
