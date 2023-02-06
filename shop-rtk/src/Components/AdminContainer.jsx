import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePhoneColor } from '../redux/admin/actionAdmin'

function AdminContainer() {
  const { infos } = useSelector((state) => state.phone)
  const dispatch = useDispatch()
  const [color, setColor] = useState('')

  return (
    <div className='container' style={{margin: "9px auto"}}>
      <h2>Admin Actions</h2>
      <p>
        <span>Couleur de l'iPhone : </span>
        <span id="count">{infos.color}</span>
      </p>
      <div className='btnContainer'>
        <button onClick={() => dispatch(changePhoneColor(color))}>Changer la couleur</button>
        <input type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)} />
      </div>
    </div>
  )
}

export default AdminContainer