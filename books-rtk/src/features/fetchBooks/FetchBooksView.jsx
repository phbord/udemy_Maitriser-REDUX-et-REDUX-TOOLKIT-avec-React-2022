import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Jumbotron from "../../components/Jumbotron"
import { fetchBooks as fetchBooksAsyncAction } from "./fetchBooksSlice"
import Spinner from "../../common/Spinner"
import Card from "../../common/Card"

const FetchBooksView = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const booksSliceData = useSelector(state => state.search)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchBooksAsyncAction(title))
  }

  return (
    <>
      <Jumbotron subtitle="Indiquez le sujet du livre à rechercher sur Google">
        <form className="form-inline justify-content-center" 
              onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" 
                    className="form-control"
                    placeholder='Quoi rechercher ?'
                    required
                    onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <button className="btn btn-warning ml-3">Rechercher</button>
          </div>
        </form>
      </Jumbotron>
      <main className="container mb-5">
        <div id="accordion">
          {
            booksSliceData.isLoading
              ? <Spinner />
              : booksSliceData.error !== ''
                ? <alert>{booksSliceData.error}</alert>
                : <Card booksArray={booksSliceData.fetchedBooks} />
          }
        </div>
      </main>
    </>
  )
}

export default FetchBooksView