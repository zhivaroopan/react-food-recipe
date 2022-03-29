import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Popular() {

    const [popular, setPopular] = useState([])
    const api = '209a55af510e44f680b54a9ab2f5bd0d'

    const getPopular = async() => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9`)
        const data = await response.json()
        console.log(data.recipes)
        setPopular(data.recipes)
    }

    useEffect(() => {
        getPopular()
    },[])
  return (
    <div>
        {popular.map(recipe=>{
            return(
                <Wrapper key={recipe.id}>
                    <Card>
                    <p>{recipe.title}</p><br/>
                    <img src={recipe.image} alt={recipe.title}/>
                    </Card>
                </Wrapper>
            )
        })}
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem
`

const Card = styled.div` 
    min-height: 25rem;
    border-radius: 2rem;
`

export default Popular