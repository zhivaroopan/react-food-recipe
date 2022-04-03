import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
function Cuisine() {

  const [cuisine, setCuisine] = useState([])
  const api = '86e1fed4a3e740d88794b8f6ad777e3c'

  const params = useParams()
  console.log(params.type)

  const getCuisine = async(cuisineName) => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&cuisine=${cuisineName}&number=9`)
      const data = await response.json()
      setCuisine(data.recipes)
      console.log(cuisine);
    }

    useEffect(() => {
      getCuisine(params.type)
      console.log('came here')
    },[params.type])
  
    return (
      <Grid animate={{ opacity:1 }}
      initial={{opacity:0}}
      transition={{duration:0.5}}
      exit={{opacity:0}}>
        {cuisine.map((item)=>{
          return(
            <Card key={item.id}>
              <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt=''/>
              <h4>{item.title}</h4>
              </Link>
            </Card>
          )
        })}
      </Grid>
    )
  }

const Grid = styled(motion.div)`
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

export default Cuisine