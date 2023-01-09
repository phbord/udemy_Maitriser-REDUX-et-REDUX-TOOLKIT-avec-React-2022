import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { fetchBooks } from '../redux/actions/actionFetchBooks'
import { addBook } from '../redux/actions/actionAddBooks'

//toast.configure()

const SearchBooks = () => {
  const [ title, setTitle ] = useState('')

  const state = useSelector((state) => state.search)
  const dispatch = useDispatch()

  console.log('state: ', state);

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(fetchBooks(title))
  }

  const handleSave = (title, author) => {
    const bookToSave = { title, author }
    dispatch(addBook(bookToSave))
    toast.info('Livre enregistré', { position: toast.POSITION.BOTTOM_RIGHT })
  }

  const displayFetchedBooks = state.isLoading 
    ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-info" role="status">
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    )
    : state.error !== ''
      ? (
        <p>{state.error}</p>
      )
      : (
        state?.fetchedBooks?.map(data => {
          return (
            <div className="card mb-2" key={data.id}>
              <div className="card-header">
                <h5 className='mb-0'>
                  <button type="button" 
                          className="btn btn-link collapsed" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#${data.id}`}
                          aria-expanded="false"  
                          aria-controls={data.id}>{data.volumeInfo.title}</button>
                </h5>
              </div>
              <div className="collapse" 
                    id={data.id} 
                    data-parent="#accordion">
                <div className="card-body">
                  {
                    data.volumeInfo.hasOwnProperty('imageLinks') && (
                      <img src={data.volumeInfo.imageLinks.thumbnail} 
                            alt={data.volumeInfo.title} />
                    )
                  }
                  <br />
                  <h4 className='card-title'>Titre : {data.volumeInfo.title}</h4>
                  <h5 className='card-title'>Auteurs :  {data.volumeInfo.authors}</h5>
                  <p className='card-text'>Description : {data.volumeInfo.description}</p>
                  <a className='btn btn-outline-secondary'
                      href={data.volumeInfo.previewLink} 
                      target="_blank" 
                      rel="noopener noreferrer">Plus d'infos</a>
                  <button className='btn btn-outline-secondary ms-3' 
                          onClick={() => handleSave(data.volumeInfo.title, data.volumeInfo.authors)}>Enregistrer</button>
                </div>
              </div>
            </div>
          )
        })
      )

  return (
    <main role="main">

      {/* Ajouts de livres */}
      <div className="jumbotron jumbotron-fluid bg-light p-5">
        <div className="container text-center">
          <h1 className='display-4'>BOOKS</h1>
          <p>Indiquez le sujet du livre à rechercher sur Google API</p>
          <form className="form-inline justify-content-center mt-2 mb-5" 
                onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="form-group col">
                <input type="text" 
                        className='form-control' 
                        placeholder='Quoi rechercher ?' 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="form-group col">
                <button className='btn btn-outline-secondary w-100'>Rechercher</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container my-4" style={{minHeight: '200px'}}>
        <div id="accordion">
          { displayFetchedBooks }
        </div>
      </div>

      <ToastContainer />
      
    </main>
  )
}

export default SearchBooks