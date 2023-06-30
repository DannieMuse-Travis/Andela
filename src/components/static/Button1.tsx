import React from 'react'
import styled from 'styled-components'

interface iButton1{
    col: string
    bg: string
    desc: string
}
const Button1:React.FC<iButton1> = ({col,bg,desc}) => {
  return (
    <div>
        <Container>
            <Main col={col} bg={bg}>
             {desc}
            </Main>
        </Container>
    </div>
  )
}

export default Button1

const Container = styled.div`
    display:flex;
    margin-right:20px;

`

const Main = styled.div<{col:string,bg:string}>`
   padding:15px 30px;
   border-radius:30px;
   font-weight:700;
   color:${({col})=>col};
   background-color:${({bg})=>bg};
   transition:all 300ms;
   cursor: pointer;

   :hover{
    transform:scale(1.44)
   }
`