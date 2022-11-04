import React from 'react';
import styled from 'styled-components'

const QuestionForm = styled.div`
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

const QuestionText = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -.5px;
    margin: 100px 0 0 0;
    justify-contents: center;
`

const AnswerChoice = styled.button`
justify-content: center;
    align-items: center;
    width: calc(100% - 60px);
    min-height: 92px;
    background-color: transparent;
    background-color: #ff5100;
    font-size: 16px;
    color: #222;
    color: #fff;
    line-height: 1.63;
    letter-spacing: -1px;
    font-weight: 600;
    text-align: center;
    padding: 20px;
    margin-bottom: 36px;
    margin-left: 30px;
    margin-right: 30px;
`
const AnswerChoiceContainer = styled.div`
    margin-top: 30px;
`


function Question(){

    return(
    <QuestionForm>
            <QuestionText> Q1. 시킨 메뉴가 잘못나왔다. 그때 당신은? </QuestionText>
            <AnswerChoiceContainer>
                <AnswerChoice> 메뉴가 잘못나왔다고 얘기하고, 음료를 다시 만들어달라고 한다.</AnswerChoice>
                <AnswerChoice> 음.. 말하기 귀찮다. 그냥 마신다.</AnswerChoice>
            </AnswerChoiceContainer>
    </QuestionForm>
    )

}

export default Question