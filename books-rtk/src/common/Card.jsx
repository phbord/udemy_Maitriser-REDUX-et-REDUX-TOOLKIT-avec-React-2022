import { useDispatch } from 'react-redux'
import { addBook as addBookAction } from '../features/library/librarySlice'
import { useState } from 'react'

const Card = ({booksArray}) => {
  const [clickedIds, setClickedIds] = useState([])
  const dispatch = useDispatch()

  const handleSave = (id, title, author) => {
    const bookToSave = {title, author}
    dispatch(addBookAction(bookToSave))

    setClickedIds([...clickedIds, id])
  }

  const handleIsDisabled = (id) => {
    return clickedIds.includes(id)
  }

  return booksArray.map(({id, volumeInfo}) => (
    <div className="card mb-2" key={id}>
      <div className="card-header">
        <h5 className='mb-0'>
          <button type="button" 
                  className="btn btn-link collapsed" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#${id}`}
                  aria-expanded="false"  
                  aria-controls={id}>
            {volumeInfo.title}
          </button>
        </h5>
      </div>
      <div className="collapse" 
            id={id} 
            data-parent="#accordion">
        <div className="card-body">
          {
            volumeInfo.hasOwnProperty('imageLinks') && (
              <img src={volumeInfo.imageLinks.thumbnail} 
                    alt={volumeInfo.title} />
            )
          }
          <br />
          <h4 className='card-title'>Titre : {volumeInfo.title}</h4>
          <h5 className='card-title'>Auteurs :  {volumeInfo.authors}</h5>
          <p className='card-text'>Description : {volumeInfo.hasOwnProperty('description') && volumeInfo.description}</p>
          <a className='btn btn-outline-secondary'
              href={volumeInfo.previewLink} 
              target="_blank" 
              rel="noopener noreferrer">Plus d'infos</a>
          {
            !handleIsDisabled(id)
            && <button className='btn btn-outline-info ml-3' 
                        onClick={() => handleSave(id, volumeInfo.title, volumeInfo.authors[0])}>Enregistrer</button>
          }
        </div>
      </div>
    </div>
  ))
}

export default Card