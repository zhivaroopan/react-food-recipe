import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import React from 'react'

function Recipe() {

    const [details, setDetails] = useState({})
    let [activeTab, setActiveTab] = useState('instructions')
    let params = useParams()

    const api = '86e1fed4a3e740d88794b8f6ad777e3c'

    const getRecipe = async() => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${api}`)
        const data = await response.json()
        setDetails(data)
    }

    useEffect(() => {
        getRecipe()
    },[params.name])
    console.log(activeTab);
  return (
    <DetailsWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title}/>
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === 'instructions' && (
                <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                </div>
            )}       
            {activeTab === 'ingredients' && (
                <ul>
                    {details.extendedIngredients.map((ingredient) => {
                        return(
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )
                    })}
                </ul>
            )}
        </Info>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul {
        margin-top: 2rem;
    }
`
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div`
    margin-left: 10rem;
`

export default Recipe