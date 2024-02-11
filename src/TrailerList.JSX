import React from 'react'
import Trailer from './Trailer'

function TrailerList() {
  return (
    <div>
          {filtredFilm.map(e => 
              <Trailer list={e}></Trailer>
          )}
    </div>
  )
}

export default TrailerList
