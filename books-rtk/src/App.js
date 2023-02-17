import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import LibraryView from './features/library/LibraryView';
import FetchBooksView from './features/fetchBooks/FetchBooksView';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<LibraryView />} />
        <Route path='/search' element={<FetchBooksView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
