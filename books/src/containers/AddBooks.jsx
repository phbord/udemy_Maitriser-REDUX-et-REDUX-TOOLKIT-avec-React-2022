import React, { useState } from 'react'
import { connect } from 'react-redux'
import FlipMove from 'react-flip-move'
import { addBook, deleteBook, deleteAllBooks } from '../redux/actions/actionAddBooks'

// libraryData : provient de "addStateToProps"
// addBook, deleteBook : proviennent de "addDispatchToProps"
const AddBooks = ({ libraryData, addBook, deleteBook, deleteAll }) => {
  console.log(libraryData)

  const initialState = {
    title: '',
    author: '',
  }
  const [newData, setNewData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    addBook(newData)
    // vider l'input
    setNewData(initialState)
  }

  const displayData = libraryData.length > 0
    ? <FlipMove>
      {
        libraryData.map((data) => {
          return (
            <li className="list-group-item list-group-item-light d-flex justify-content-between" key={data.id}>
              <span><strong>Titre : </strong>{data.title}</span>
              <span><strong>Auteur : </strong>{data.author}</span>
              <button className="btn btn-danger" 
                      onClick={() => deleteBook(data.id)}>x</button>
            </li>
          )
        })
      }
    </FlipMove>
    : <p className='text-center my-4'>Aucune data à afficher</p>

    const deleteAllBooksBtn = libraryData.length > 0 
      && (
        <div className="d-flex justify-content-center">
          <button className='btn btn-danger mt-4 mb-5' 
                  onClick={() => deleteAll()}>Effacer tous les livres</button>
        </div>
      )

  return (
    <main role="main">

      {/* Ajouts de livres */}
      <div className="jumbotron jumbotron-fluid bg-light p-5">
        <div className="container text-center">
          <h1 className='display-4'>BOOKS</h1>
          <p>Ajouter un livre à votre bibliothèque</p>
          <form className="form-inline justify-content-center mt-2 mb-5" 
                onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="form-group col">
                <input type="text" 
                        value={newData.title}
                        className='form-control' 
                        placeholder='Titre' 
                        required
                        onChange={(e) => setNewData({...newData, title: e.target.value})} />
              </div>
              <div className="form-group col">
                <input type="text" 
                        value={newData.author}
                        className='form-control' 
                        placeholder='Auteur' 
                        required
                        onChange={(e) => setNewData({...newData, author: e.target.value})} />
              </div>
              <div className="form-group col">
                <button className='btn btn-outline-secondary w-100'>Ajouter un livre</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Liste et suppressions de livres */}
      <div className="container" style={{minHeight: '200px'}}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              { displayData }
            </ul>
            { deleteAllBooksBtn }
          </div>
        </div>
      </div>
      
    </main>
  )
}

const addStateToProps = (state) => {
  return {
    libraryData: state.library
  }
}

const addDispatchToProps = (dispatch) => {
  return {
    addBook: (param) => dispatch(addBook(param)),
    deleteBook: (id) => dispatch(deleteBook(id)),
    deleteAll: () => dispatch(deleteAllBooks())
  }
}

export default connect(addStateToProps, addDispatchToProps)(AddBooks)