import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header, { LoginButton } from './../../components/Base/Header'
import { connect } from 'react-redux';
import styled from 'styled-components'

const Heading = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    justify-content: space-between; 
    margin: 5px; 
    top: 0px;
    width: 100%;
`;

const Logo = styled.div`
    background-color: teal;
    padding: 3px;
    width: 5rem;
    height: 3rem;
`

const Login = styled.button`


`
class HeaderContainer extends Component{
    componentWillMount(){
        console.log(window)

    }
    render(){


    return (
        <div>
            <Heading>
                <Logo>Mijungle</Logo>
                <Link to= "/auth/login">  
                    <Login >로그인/회원가입</Login>
                </Link>
          </Heading>
        </div>
    )
    }
}

export default HeaderContainer;