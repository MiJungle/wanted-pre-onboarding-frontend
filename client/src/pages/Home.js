import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HomeForm = styled.div`
    margin: auto;
    height: 200px;
    width: 620px;
    height: calc(100vh - 0.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    flex: 1;
    overflow-y: auto;
`
const TestHeading = styled.div`
    font-size: 2rem;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    color: #222;
    padding: 0 10px;
    margin-top: 17vh;

`
const TestHeading2 = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -.5px;
    margin: 30px 0;
    justify-contents: center;

`

const TestStartBtn = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 335px;
    height: 100px;
    margin: 30px 0;
    border-radius: 20px;
    background-color: #00AE58;
    color: white;
    padding: 30px 30px;
    border: none;
`
const TestStartBtnVisits = styled.div`
`
const TestStartLogo = styled.button`
`

const TestFooterTitle = styled.div`
    font-weight: 700;
    margin-right: 8px;
    margin-bottom: 4px;
`

const TestFooterEmail = styled.div`
`

function Home(){
    return (
        <HomeForm>
            <TestHeading>내 성격에 딱! 어울리는 TEA는?</TestHeading>
            <TestHeading2>TEA로 보는 나의 성격, MB"TEA"I!</TestHeading2>
            <Link to="/question">
            <TestStartBtn >
     
                테스트 시작하기
                <TestStartBtnVisits>현재 총 ... 명이 참여했어요</TestStartBtnVisits>
            </TestStartBtn>
            </Link>

            <div>로고</div>
            <div>문의</div>
            <div>mijunglee1215@gmail.com</div>
        </HomeForm>
    )
}

export default Home;