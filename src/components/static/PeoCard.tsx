import React from 'react'
import img from "../../assets/user.png"
import styled from 'styled-components';

interface iCard {
  name: string;
  location: string;
  description: string;
  bgcol: string;
}

const PeoCard:React.FC<iCard> = ({
  name,location,description,bgcol
}) => {
  return (
    <Container bgcol ={bgcol}>
      <Main>
        <HeadText>
        <IconImg src={img}/>
        <BigText>{name}</BigText>
        <SmallText>{location}</SmallText>

        </HeadText>
         <Destext>{description}</Destext>
      </Main>
    </Container>
  )
}

export default PeoCard

const Container = styled.div<{bgcol:string}>`
height:260px;
margin-right:20px;
width:250px;
padding-top:20px;
padding-left:20px;
border-radius:20px;
background-color:${({bgcol})=>bgcol};
display:flex;
justify-content:start;
align-items:start;
flex-direction:column;
`
const  HeadText = styled.div`
  display:flex;
`
const Main = styled.div`
  
`

const IconImg = styled.img`
  height:40px;
  margin-right:30px;
`

const BigText = styled.div`
  font-weight:700;
`
const SmallText= styled.div`
  font-size:13px;
`

const Destext= styled.div`
  margin-top:20px;
  line-height:1.7;
  font-weight:300;
  width:90%;
`