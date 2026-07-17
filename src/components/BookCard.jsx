import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

export const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-cover-container">
        <img 
          src={book.coverImage} 
          alt={`Cover of ${book.title}`} 
          className="book-cover"
          loading="lazy"
        />
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
        
        <div className="book-footer">
          <div className="book-rating">
            <Star size={16} fill="currentColor" stroke="none" />
            <span>{book.rating.toFixed(1)}</span>
          </div>
          <span className="book-year">{book.year} &bull; {book.genre}</span>
        </div>
        
        <div className="book-action" style={{ marginTop: '1rem' }}>
          {book.buyLink ? (
            <a href={book.buyLink} target="_blank" rel="noopener noreferrer" className="buy-button">
              <ShoppingCart size={16} />
              Buy Now
            </a>
          ) : (
            <button className="buy-button disabled" disabled>
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
