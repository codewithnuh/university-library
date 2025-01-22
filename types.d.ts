interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  coverColor: string;
  coverUrl: string;
  isLoaned?: boolean;
  videoUrl: string;
  summary: string;
}
interface BookListProps {
  containerClassName?: string;
  books: Book[];
}
