import React from 'react'
import { Ambrella, Beach } from 'assets/icons'

const getSeason = (lat, month) =>
  month > 2 && month < 9 ?
  lat > 0 ? 'summer' : 'winter'
  : lat > 0 ? 'winter' : 'summer'


const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());
  const clientSeason = season === 'winter' ?
    `ouuuuuuuch it's chilly` : `Where is my beach Baby`;

  return (
    <div className="season-display">
      <h2>Season</h2>
      <i>
        <img src={Ambrella} alt={season}/>
      </i>
      <h1 className="season-title">{clientSeason}</h1>
      <i>
        <img src={Ambrella} alt={season}/>
      </i>
    </div>
  )
}

export default SeasonDisplay
