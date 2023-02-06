/* SOLUTION 2 : useSelector() et useDispatch() */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneContainer() {
  const { phones, infos } = useSelector((state) => state.phone)
  const dispatch = useDispatch()
  const [totalPhone, setTotalPhone] = useState(1)

  return (
    <div className='container'>
      <img src={phone} alt="phone" />
      <p>Disponibilité : {phones} | Couleur : {infos.color}
      </p>
      <div className='btnContainer'>
        <button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
        <input type="text"
                value={totalPhone}
                onChange={(e) => setTotalPhone(e.target.value)} />
      </div>
    </div>
  )
}

export default PhoneContainer


/* SOLUTION 1 : connect(), mapStateToProps et mapDispatchToProps */

/* import React from 'react'
import { connect } from 'react-redux'
import phone from '../images/phone.png'
import { buyPhone } from '../redux/phone/actionPhone'

function PhoneContainer(props) {
  return (
    <div className='container'>
      <img src={phone} alt="phone" />
      <p>
        <span>Disponibilité : </span>
        <span id="count">{props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer) */
