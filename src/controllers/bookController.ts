import { Request, Response } from 'express';
import Book from '../models/books';

export const save = (req: Request, res: Response) => {
    const { title, ISBN, publishedDate, author } = req.body;
    const newBook = new Book(null, title, ISBN, publishedDate, author);
    const savedBook = newBook.save();
    res.status(201).json(savedBook);
};


export const getAll = (req: Request, res: Response) => {
    const books = Book.fetchAll();
    res.json(books);
};


export const getById = (req: Request, res: Response) => {
    try {
        const book = Book.fetchById(req.params.id);
        res.json(book);
    } catch (err) {
        res.status(404).json({ error: (err as Error).message });
    }
};


export const updateById = (req: Request, res: Response) => {
    try {
        const book = Book.fetchById(req.params.id);
        const { title, ISBN, publishedDate, author } = req.body;
        if (book) {
            book.title = title;
            book.ISBN = ISBN;
            book.publishedDate = publishedDate;
            book.author = author;
            book.save();
            res.json(book);
        }
    } catch (err) {
        res.status(404).json({ error: (err as Error).message });
    }
};


export const deleteById = (req: Request, res: Response) => {
    try {
        Book.deleteById(req.params.id);
        res.status(200).send("Book successfully deleted");
    } catch (err) {
        res.status(404).json({ error: (err as Error).message });
    }
};
