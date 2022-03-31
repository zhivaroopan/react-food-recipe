import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Category from "../components/Category";

import React from 'react'

function Home() {
  return (
    <div>
        <Category/>
        <Popular/>
        <Veggie/>
    </div>
  )
}

export default Home