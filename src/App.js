import logo from './logo.svg';
import './App.css';
import AddBook from './components/AddBook';
import TableData from './components/BooksList';
import BooksList from './components/BooksList';
import { useState } from 'react';

function App() {
  const [bookId, setBookId] = useState('')

  const getBookId = (id) => {
    console.log(id);
    setBookId(id)
  }
  return (
    <div className="App" >
      <AddBook id={bookId} setBookId={setBookId} />
      <BooksList setBookId={getBookId}></BooksList>
    </div>
  );
}

export default App;
