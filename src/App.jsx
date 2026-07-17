import React from 'react';
import { Book3D } from './components/Book3D';
import { booksData } from './data/books';

function App() {
  const book = booksData[0];

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>My Book Collection</h1>
      </header>
      
      <main className="portfolio-main">
        <div className="book-showcase">
          <div className="book-display-section">
            <Book3D 
              title={book.title} 
              frontCoverImage={book.coverImage} 
              fullCoverImage={book.fullCoverImage} 
            />
          </div>
          
          <div className="book-details-section">
            <h2 className="showcase-title">{book.title}</h2>
            <div className="showcase-meta">
              <span>{book.genre}</span> &bull; <span>{book.year}</span>
            </div>
            
            <div className="showcase-description">
              {book.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <button className="showcase-button" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
