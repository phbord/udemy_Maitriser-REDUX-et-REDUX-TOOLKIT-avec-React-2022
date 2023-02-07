import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StockInfos from '../../../components/StockInfos'
import { addPhones as addPhonesAction, addTablets as addTabletsAction } from '../phones/phoneSlice'

const container = {
  width: '300px',
  padding: '20px',
  border: '1px solid grey',
  margin: '10px auto'
}
const btnContainer = {
  display: 'flex',
  marginBottom: '12px'
}

function AdminView() {
  const [phones, setPhones] = useState(1)
  const [tablets, setTablets] = useState(1)
  const { phone, television } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div style={container}>
      <h2>Admin</h2>
      <StockInfos product="Téléphones"
                  stock={phone.phones} />
      <div style={btnContainer}>
        <input type="number"
                min="1"
                value={phones}
                onChange={(e) => setPhones(e.target.value)} />
        <button onClick={() => dispatch(addPhonesAction(+phones))}>Augmenter stock</button>
      </div>
      <StockInfos product="Tablettes"
                  stock={phone.tablets} />
      <div style={btnContainer}>
        <input type="number"
                min="1"
                value={tablets}
                onChange={(e) => setTablets(e.target.value)} />
        <button onClick={() => dispatch(addTabletsAction(+tablets))}>Augmenter stock</button>
      </div>
      <StockInfos product="Télévisions"
                  stock={television.tvs} />
      <div style={btnContainer}>
        <input type="number"
                min="1" />
        <button>Augmenter stock</button>
      </div>
    </div>
  )
}

export default AdminView