import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {ProgressBarLine} from 'react-progressbar-line'
import * as QuestionAPI from '../lib/api/auth';
import * as answerActions from '../redux/modules/answer'
// https://reactjsexample.com/a-linear-progressbar-component-for-react/
// import * as AuthAPI from '../../lib/api/auth';


const QuestionForm = styled.div`
    margin: auto;
    height: 200px;
    width: 620px;
    height: calc(100vh - 0.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
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
    width: calc(100% - 80px);
    min-height: 92px;
    font-size: 16px;
    background-color: #00AE58;
    color: white;
    line-height: 1.63;
    letter-spacing: -1px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 36px;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 30px;
    border: none;
`
const AnswerChoiceContainer = styled.div`
    margin-top: 30px;
`


function Question(){
  const [id, setId] = useState(0)
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [type, setType]= useState([1,2,3]);
  // const { id } = useParams(); 
  let arr = []

  useEffect(()=> {
      checkIndex()
      async function getQuestions(){
      await QuestionAPI.surveyQuestion()
      .then(res => {
          setQuestions(res.data[questionIndex]);
          setAnswers(res.data[questionIndex].A)
      })
  }
  getQuestions();
  }, [questionIndex])

  const checkIndex = () => {
    if(questionIndex === 5){
      window.location.href = `/result/${id}`
    }
  }
 


  function addType(value){
    setType([...value, ...type])
    console.log(type)
    setId(5)

  }

  // state.concat(action.mbti)
  return(
    <QuestionForm>
        <ProgressBarLine
        value={questionIndex*10}
        min={0}
        max={100}
        strokeWidth={1}
        trailWidth={5}
        styles={{
          path: {
            stroke: '#17b978'
          },
          trail: {
            stroke: '#a7ff83'
          },
          text: {
            fill: '#404040',
            textAlign: 'center',
            fontSize: '17px'
          }
        }}
      />    <QuestionText key={questionIndex}> Q{questions.Q}</QuestionText>
            <AnswerChoiceContainer>

              {
                answers.map(({answer,type})=> (
                  <AnswerChoice key={answer} onClick={()=>{setQuestionIndex(questionIndex+1); addType(type)}}>{answer}</AnswerChoice>
                ))
              }
            </AnswerChoiceContainer>
    </QuestionForm>
    )

}

export default Question