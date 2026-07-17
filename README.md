<h1 align="center">
  My Book Collection 📚
</h1>

<p align="center">
  <strong>A clean, minimalist 3D book showcase built with React and Vite.</strong>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-18.x-blue">
  <img alt="Vite" src="https://img.shields.io/badge/vite-8.x-purple">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
</p>

<hr>

This project is a beautifully designed, minimalist portfolio for showcasing books. It features a fully interactive 3D book representation built entirely with CSS 3D transforms.

## 📑 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Customizing Books](#-customizing-books)

---

## ✨ Features

- **Interactive 3D Book**: Hover over the book cover to elegantly reveal the spine and the back cover.
- **Pure CSS 3D**: The 3D model is built using mathematically precise CSS transforms, requiring no heavy WebGL libraries.
- **Minimalist Design**: A dark, sleek UI that focuses entirely on your literature and typography.
- **Responsive Layout**: Seamlessly adapts from desktop to mobile screens.
- **Fast Build Times**: Powered by Vite for lightning-fast hot module replacement.

---

## 🚀 Installation

1. Clone the repository or download the source code.
2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## 📖 Usage Guide

The application is configured to run out-of-the-box. Open your browser to `http://localhost:5173` to view your stunning book collection.

### Customizing Books

To add or update your own books:

1. Place your book cover images inside `src/data/<book-folder-name>/`.
2. Open `src/data/books.js`.
3. Import your images at the top of the file.
4. Update the `booksData` array with your book's details (title, author, genre, description).
5. Pass your imported images to `coverImage` and `fullCoverImage`.

**Required Images:**
- `coverImage`: The front cover of your book.
- `fullCoverImage` (optional but recommended): A single image containing the back cover, spine, and front cover. The CSS engine automatically maps this single texture perfectly across the 3D faces.

---

## 📄 License

Distributed under the MIT License.
