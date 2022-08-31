import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import bookServices, { getBooks } from "../book.services"
import { doc } from 'firebase/firestore';
import { Button } from '@mui/material';



export default function BooksList({ setBookId }) {
    const [books, setBooks] = useState([])



    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = async () => {
        const data = await bookServices.getAllBooks();
        console.log(data.docs, 'this is all books');
        setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    // deleteHandler
    const deleteHandler = async (id) => {
        await bookServices.deleteBook(id)
        getBooks()
    }

    return (
        <>
            <TableContainer component={Paper} sx={{ width: 800, padding: 4, marginTop: 2 }}>
                {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ '&:last-child td, &:last-child ': { border: 2 } }} >
                            <TableCell>Books</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">Note</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {books?.map((book, index) => (
                            <TableRow
                                key={book.id}
                                sx={{ '  td ': { border: 1 } }}
                            >
                                <TableCell component="" scope="" >
                                    {book.book}
                                </TableCell>
                                <TableCell align="right">{book.topic}</TableCell>
                                <TableCell align="right">{book.note}</TableCell>
                                <TableCell align="center"><Button onClick={(e) => deleteHandler(book.id)}>Delete </Button> <Button onClick={(e) => setBookId(book.id)}>Edit</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
