import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { AuthContent } from '../../components/Auth';
import styled from 'styled-components'
import { SignupContainer,SignupForm,SignupFormbox,WarningMessage,ActiveBtn,UnactiveBtn,Input } from "../../style.js"
import oc from 'open-color';


const AuthButton = styled.button`
    background-color:hsl(155, 71%, 53%);
    border: 1px solid  hsl(155, 71%, 53%);
    color: white;
    transition: transform 3ms ease-in;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    margin-top: 7px;
    width: 60%;
    transition: transform 3ms ease-in;
    text-transform: uppercase;
    align-self: center;
`


const RightAlignedLink = styled.button`
    margin-top: 1rem;
    margin-right: 2rem;
    text-align: right;
    color: ${oc.gray[6]};
    background-color: white;
    text-decoration: underline;
    border: none;
    &:hover {
        color: ${oc.gray[7]};
    }
`

function Register(){
         

        return (
            <SignupContainer>
                    
            <SignupForm>
                Register
                <SignupFormbox>
                    <Input placeholder="이메일"></Input>
                </SignupFormbox>
                <SignupFormbox>
                    <Input placeholder="아이디"></Input>
                </SignupFormbox>
                <SignupFormbox>
                    <Input placeholder="비밀번호"></Input>
                </SignupFormbox>
                <SignupFormbox>
                    <Input placeholder="비밀번호 확인"></Input>
                </SignupFormbox>
                <AuthButton>회원가입</AuthButton>
                <RightAlignedLink><Link to="/auth/login">로그인</Link></RightAlignedLink>
            </SignupForm>
        </SignupContainer>

        );
    
}

export default Register;


