import React from 'react';
import styled from 'styled-components'

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

    return(
        <ResultContainer>
        붉은 노을 히비스커스

    </ResultContainer>


    )
}

export default Result