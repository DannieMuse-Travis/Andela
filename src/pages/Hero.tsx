import React from 'react'
import bgImg from "../assets/header-jpeg-webp.webp"
import Button2 from "../components/static/Button2"
import styled from 'styled-components'

const Hero = () => {
  return (
    <div>
        <Container>
            <BgImg src={bgImg}/>
                 <Main>
                    <BigText>
                    Discover <i> brilliant </i>talent
                        around the world
                    </BigText>
                    <Text>
                        Join Andela to build your team with developers, engineers, product designers, and the best remote technology experts.
                    </Text>

                    <ButtonHolder>
                    <Button2 col={'#132128'} bg={'#56C870'} desc={'Hire Talent'}/>
                    <Button2 col={'#132128'} bg={'white'} desc={'Apply for Jobs'}/>
                    </ButtonHolder>
                 </Main>
        </Container>
    </div>
  )
}

export default Hero

const BgImg = styled.img`
    position:absolute;
    top:0;
    height:100%;
    width:100%;
    z-index:0;
`

const ButtonHolder = styled.div`
    Display:flex;

`

const BigText= styled.div`
    font-size:70px;
    line-height:1.5;
    width:70%;
`
const Text =  styled.div`
    font-size:18px;
    margin:30px 0px;
`
const Main = styled.div`
   width:95;
   position:absolute; 
`

const Container = styled.div`
position: relative;
padding-top: 100px;
color: white;
height: 80vh;
width: 100%;

display: flex;
justify-content: center;
align-items: center;
`