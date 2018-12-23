import React from 'react'
import { Ambrella, Beach } from 'assets/icons'

//best trick is:
const seasonConfig = {
  summer: {
    clientSeason: `Where is my beach Baby`,
    iconName: Beach
  },
  winter: {
    clientSeason: `ouuuuuuuch it's chilly`,
    iconName: Ambrella
  }
}

const getSeason = (lat, month) =>
  month > 2 && month < 9 ?
  lat > 0 ? 'summer' : 'winter'
  : lat > 0 ? 'winter' : 'summer'


const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth())
  // const clientSeason = season === 'winter' ?
  //   `ouuuuuuuch it's chilly` : `Where is my beach Baby`; // i can replace it with the an Object ahahaha

  const { clientSeason, iconName } = seasonConfig[season]

  return (
    <div className={`season-display season-display-${season} in`}>
      <h2>{season}</h2>
      <i>
        <img src={iconName} alt={clientSeason}/>
      </i>
      <h1 className="season-title">{clientSeason}</h1>
      <i>
        <img src={iconName} alt={clientSeason}/>
      </i>
    </div>
  )
}

export default SeasonDisplay
