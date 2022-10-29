import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { AuthContent , AuthError} from '../../components/Auth';
import styled from 'styled-components'
import { SignupContainer,SignupForm,SignupFormbox,WarningMessage,ActiveBtn,UnactiveBtn,Input } from "../../style.js"
import oc from 'open-color';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import { isEmail, isLength, isAlphanumeric } from 'validator';


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

class Register extends Component{
    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'register',
            message
        });
    }
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });
        const validation = this.validate[name](value);
        if(name.indexOf('password')> -1 || !validation) return;
    }

    validate = {
        email: (value) => {
            if(!isEmail(value)){
                this.setError('잘못된 이메일 형식 입니다.');
                return false;
            }
            return true;
        },
        username: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, { min:4, max: 15})){
                this.setError('아이디는 4~15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
                return false;
            }
            return true;
        },
        password: (value) => {
            if(!isLength(value, { min: 6 })){
                this.setError('비밀번호를 6자 이상 입력하세요.');
                return false;
            }
            this.setError(null);
            return true;
        },
        passwordConfirm: (value) => {
            if(this.props.form.get('password') !== value){
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null);
            return true;
        }
    }

    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register')
    }
         
    render(){
        const { error } = this.props;
        const { email, username, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange } = this;
        console.log(error)

        return (
            <SignupContainer>
                    
            <SignupForm>
                Register
                <SignupFormbox>
                    <Input 
                    name = "email"
                    placeholder="이메일"
                    value = {email}
                    onChange = {handleChange}
                    />
                </SignupFormbox>
                <SignupFormbox>
                    <Input 
                        placeholder="아이디"
                        onChange = {handleChange}
                        />                
                </SignupFormbox>
                <SignupFormbox>
                    <Input 
                        placeholder="비밀번호"
                        onChange = {handleChange}
                    />    
                </SignupFormbox>
                <SignupFormbox>
                    <Input 
                        placeholder="비밀번호 확인"
                        onChange = {handleChange}
                    />    
                    {
                        error && <AuthError>{error}</AuthError>
                    }        
                </SignupFormbox>
                <AuthButton>회원가입</AuthButton>
                <RightAlignedLink><Link to="/auth/login">로그인</Link></RightAlignedLink>
            </SignupForm>
        </SignupContainer>

        );
    
}
}
export default connect(
    (staet) => ({
        form: staet.auth.getIn(['register','form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Register);


