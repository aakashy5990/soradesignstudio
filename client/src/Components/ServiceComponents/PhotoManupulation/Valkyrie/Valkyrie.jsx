import React from 'react'
import valkyrie from "../../../../assets/service/manipulation/valkyrie/valkyrie.webp"
import './Valkyrie_parents.css'

function Valkyrie() {
  console.log(valkyrie)
  return (
    <main>
      <img src={valkyrie} alt="Sample WebP Image" className="responsive-image"/>
    </main>
  )
}

export default Valkyrie;