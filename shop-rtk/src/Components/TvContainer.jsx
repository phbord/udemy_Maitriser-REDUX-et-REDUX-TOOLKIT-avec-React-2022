import React, { useState } from 'react'
import tvImg from '../images/tv.png'
import { useDispatch, useSelector } from 'react-redux'
import { buyTv } from '../redux/tv/actionTv'

function TvContainer() {
  const tv = useSelector(state => state.television.tv)
  const dispatch = useDispatch()
  const [totalTv, setTotalTv] = useState(1)

  return (
    <div className='container'>
      <img src={tvImg} alt="tv" />
      <p>
        <span>Disponibilité: </span>
        <span id="count">{tv}</span>
      </p>
      <div className='btnContainer'>
        <button onClick={() => dispatch(buyTv(totalTv))}>Acheter</button>
        <input type="text"
                value={totalTv}
                onChange={(e) => setTotalTv(e.target.value)} />
      </div>
    </div>
  )
}

export default TvContainer
