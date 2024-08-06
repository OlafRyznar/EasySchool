import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LibraryPage = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', is_borrowed: 0, student_id: null });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/book');
            if (Array.isArray(response.data)) {
                setBooks(response.data);
            } else {
                console.error('Unexpected data format:', response.data);
                setBooks([]);
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            setBooks([]);
        }
    };

    const handleAddBook = async () => {
        try {
            await axios.post('http://localhost:8080/book', newBook);
            setNewBook({ title: '', author: '', is_borrowed: 0, student_id: null });
            fetchBooks();
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/book/${id}`);
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <div>
            <h1>Library</h1>

            <div>
                <h2>Add New Book</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Is Borrowed (1 for yes, 0 for no)"
                    value={newBook.is_borrowed}
                    onChange={(e) => setNewBook({ ...newBook, is_borrowed: Number(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder="Student ID (if borrowed)"
                    value={newBook.student_id || ''}
                    onChange={(e) => setNewBook({ ...newBook, student_id: e.target.value ? Number(e.target.value) : null })}
                />
                <button onClick={handleAddBook}>Add Book</button>
            </div>

            <div>
                <h2>Books List</h2>
                <ul>
                    {books.length === 0 ? (
                        <li>No books available</li>
                    ) : (
                        books.map(book => (
                            <li key={book.book_id}>
                                {book.title} by {book.author} (Borrowed: {book.is_borrowed ? 'Yes' : 'No'}){book.student_id && ` - Borrowed by Student ID: ${book.student_id}`}
                                <button onClick={() => handleDeleteBook(book.book_id)}>Delete</button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default LibraryPage;
