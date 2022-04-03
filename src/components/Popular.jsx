import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Link } from 'react-router-dom'

function Popular() {

    const [popular, setPopular] = useState([])
    const api = '86e1fed4a3e740d88794b8f6ad777e3c'

    const getPopular = async() => {

        let check = localStorage.getItem('popular')
        if(check){
            setPopular(JSON.parse(check))
            console.log(popular)
        }else{
            console.log('Came here')
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${api}&number=9`)
            const data = await response.json()
            console.log(data.recipes)
            setPopular(data.recipes)
            localStorage.setItem('popular', JSON.stringify(data.recipes))
        }
    }

    useEffect(() => {
        getPopular()
    },[])
  return (
    <div>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide options={{
                perPage: 2,
                arrows:false,
                pagination: false,
                drag: 'free',
                gap: '5rem'
            }}>
                {popular.map((recipe=>{
                    return(
                <SplideSlide key={recipe.id}>
                    <Card>
                    <Link to={'/recipe/'+ recipe.id}>
                    <p>{recipe.title}</p><br/>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient/>
                    </Link>
                    </Card>
                </SplideSlide>    
                    )
                }))}
            </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`

const Card = styled.div` 
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden; 
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    `

const Gradient = styled.div`
    z-index: 3;
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`



export default Popular