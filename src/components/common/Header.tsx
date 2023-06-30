import React from 'react'
import styled from 'styled-components'
import {BsChevronDown} from 'react-icons/bs'
import andela from "../../assets/AND-Logo-Lockup-Green-Black-RGB.svg"
import Button1 from '../static/Button1'
const Header = () => {
  return (
    <div>
        <Container1>
            <Main>
                <BigText>Andela acquires Qualified.io and Codewars</BigText>
                <Small>
                Learn More
                </Small>
            </Main>
        </Container1>
        <Container2>
            <Main1>
                <Logo src={andela}/>
                <NavBar>
                   <Nav>For Technology Experts </Nav> 
                   <Nav>Business</Nav> 
                   <Nav> Enterprise</Nav> 
                </NavBar>
                <NavBar>
                    <Nav>Apply for jobs</Nav>
                    <Button1 col={'#132128'} bg={'#56C870'}
                    desc={'Hire Talent'}/>
                </NavBar>
            </Main1>
        </Container2>
    </div>
  )
}

export default Header

const IconDown = styled(BsChevronDown)`
    font-size:12px;
    margin-top:3px;
    margin-left:3px;
`

const NavBar = styled.div`
    display:flex;
`
const Nav = styled.div`
    margin-right:25px;
    display:flex;
    align-items:center;
`

const   Logo = styled.img`
height:50px;`

const BigText = styled.div`
font-weight:700;
margin-right:20px;
font-size:20px;`

const Small= styled.div`
    font-size:18px;
    font-weight:500;
`

const Container1= styled.div`
    height:60px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    background-color:white;
    position:fixed;
    z-index:2;
`

const Main1 = styled.div`
width:95%;
display:flex;
justify-content:space-between;
align-items:center;
color:white;`

const  Main = styled.div`
    width:95%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Container2 = styled.div`
margin-top: 80px;
margin-bottom: 80px;
height: 80px;
z-index: 2;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
`