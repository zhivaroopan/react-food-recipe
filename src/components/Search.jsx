import { useState } from "react";
import { FaSearch } from 'react-icons/fa'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

import React from 'react'

function Search() {
    
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
        console.log("reached the console da boi");
    }

  return (
    <FormStyle onSubmit={onSubmitHandler}>
        <div>   
            <FaSearch/>
            <input type='text' onChange={(e) => setInput(e.target.value)} value={input}/>
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {        
        position: relative;
        width:100%;
        margin-top: 1rem;
        margin-left: -100px
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        color: white;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%)
    }
`

export default Search