import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {

    const params = useParams()

    let [searchRecipes, setSearchRecipes] = useState([])

    const getSearched = async(cuisineName) => {

        const api = '86e1fed4a3e740d88794b8f6ad777e3c'

        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}&query=${cuisineName}&number=9`)
        const data = await response.json()
        setSearchRecipes(data.results)
        console.log(searchRecipes)
      }
  
      useEffect(() => {
        getSearched(params.search)
      },[params.search])

  return (
    <Grid>
        {searchRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt={item.title}/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  a {
    text-decoration:none;
  }

  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Searched