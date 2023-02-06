import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import phone from '../../../images/phone.png'
import tablet from '../../../images/tablet.png'
import { phones as phonesAction, tablets as tabletsAction } from './phoneSlice'

function PhoneView() {
  // state.phone => provient du store (reducer)
  // phones => provient de phoneSlice.actions
  const { phones, tablets } = useSelector(state => state.phone)
  const dispatch = useDispatch()
  const [phoneNum, setPhoneNum] = useState('')
  const [tabletNum, setTabletNum] = useState('')

  return (
    <>
      <div className='container'>
        <img src={phone} alt="phone" />
        <p>
          Disponibilité : 
          <span className='count'> {phones}</span>
        </p>
        <div className='btnContainer'>
          <button onClick={() => dispatch(phonesAction(phoneNum))}>Acheter</button>
          <input type="number" 
                  value={phoneNum} 
                  onChange={(e) => setPhoneNum(e.target.value)} />
        </div>
      </div>
      <div className='container'>
        <img src={tablet} alt="tablet" />
        <p>
          Disponibilité : 
          <span className='count'> {tablets}</span>
        </p>
        <div className='btnContainer'>
          <button onClick={() => dispatch(tabletsAction(tabletNum))}>Acheter</button>
          <input type="number" 
                  value={tabletNum} 
                  onChange={(e) => setTabletNum(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default PhoneView