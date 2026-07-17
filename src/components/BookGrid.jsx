import React from 'react';
import { BookCard } from './BookCard';
import { BookX } from 'lucide-react';

export const BookGrid = ({ books }) => {
  if (books.length === 0) {
    return (
      <div className="no-results">
        <BookX size={48} className="no-results-icon" />
        <h2>No books found</h2>
        <p>Try adjusting your search criteria</p>
      </div>
    );
  }

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
