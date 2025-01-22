import { Button } from "@/components/ui/button";
import BookList from "@/components/user/BookList";
import BookOverView from "@/components/user/BookOverView";
import { sampleBooks } from "@/constants";
import React from "react";

const HomePage = () => {
  return (
    <div className="container">
      <BookOverView {...sampleBooks[0]} />
      <BookList books={sampleBooks} containerClassName="mt-28" />
    </div>
  );
};

export default HomePage;
