import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const ResultContainer = styled.div`
    background-color: red;
    margin: auto;
    height: 200px;
    width: 620px;
    height: calc(100vh - 0.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 0.25rem solid rgb(112, 93, 242);
    border-right: 0.25rem solid rgb(112, 93, 242);
    padding-bottom: 1rem;
    flex: 1;
    overflow-y: auto;
`

function Result() {

    const { id } = useParams()
    const [result, setResult] = useState('붉은 노을')

//result logic 
//배열에서 type이 가장 많이 불린것을 id 에 넣고 result를 가지고 온다. 

    useEffect(()=>{
        changeResult()
    })
    function changeResult(){
        setResult(id)
    }
    
    
    return(
        <ResultContainer>
        {result}

    </ResultContainer>


    )
}

export default Result