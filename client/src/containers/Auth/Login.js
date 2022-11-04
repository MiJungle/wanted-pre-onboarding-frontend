
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SignupContainer,SignupForm,SignupFormbox,WarningMessage,ActiveBtn,UnactiveBtn,Input,  } from "../../style.js"
import oc from 'open-color';
import * as authActions from '../../redux/modules/auth';
import * as userActions from '../../redux/modules/user'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import storage from '../../lib/storage';

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
    cursor: pointer;

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
const ErrorMessage = styled.div`
    color: red;
    `

class Login extends Component {
    
    email = {
        mask: "",
    }
     maskingName = (mask) => {

        if (mask.length === 2) {
            // document.form1.email.value = 123
          return mask.replace(/(?<=.{1})./gi, '*');
        } else if (mask.length > 2) {
          return mask.replace(/(?<=.{2})./gi, '*');
        } else {
          return mask;
        }
        this.setState({
            mask: mask.substring(0, mask.length) || ''
        })
      };
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        })

     }
    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'login',
            message
        });
        return false
    }
    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login')
    }
    
    handleLocalLogin = async()=> {
        const { form, AuthActions, UserActions, history } = this.props;
        const { email, password } = form.toJS();

        try {
            await AuthActions.localLogin({email, password});
            const loggedInfo = this.props.result.toJS();

            UserActions.setLoggedInfo(loggedInfo);
            storage.set('loggedInfo', loggedInfo);
            window.location.href = '/'

        } catch (e) {
            this.setError('잘못된 계정정보입니다.');
        }


    }
     render(){
        const { email, password } = this.props.form.toJS();
        const { handleChange , handleLocalLogin, maskingName} = this;
        const { error } = this.props
  
        return (
                <SignupContainer> 
                    <SignupForm id="login">
                        Login
                        <SignupFormbox>
                            <Input 
                            name="email"
                            placeholder="이메일"
                            value = {this.email.mask}
                            // onfocus="this.value=document.form1.id.value"
                            onChange ={(e)=> {handleChange(e);maskingName(e)}}
                            />
                        </SignupFormbox>
                        <SignupFormbox>
                            <Input 
                            name= "password"
                            placeholder="비밀번호"
                            type="password"
                            value = {password}
                            onChange = {handleChange}
                            />
                        </SignupFormbox>
                        {
                            error && <div>{error}</div>

                        }
                        <AuthButton type="button" onClick = {handleLocalLogin}>로그인</AuthButton>
                        <RightAlignedLink><Link to="/auth/register">회원가입</Link></RightAlignedLink>
                    </SignupForm>
                </SignupContainer>

        );
}
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form']),
        error: state.auth.getIn(['login','error']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(Login);