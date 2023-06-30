import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillYoutube,
  AiOutlineLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import img from "../../assets/AND-Logo-Lockup-Green-Black-RGB.svg";
import img1 from "../../assets/access.webp";


const data:any=[
  {
    title: "Disccover Talent",
    text: "For Companies",
    text1: "Enterprise",
    text2: "Case studies",
  },
  {
    title: "Find Work",
    text: "For Technologists",
    text1: "Leadership Commuinty",
    text2: "Leadership Program",
    text3: "Resources",
  },
  {
    title: "Andela",
    text: "About us",
    text1: "Events",
    text2: "Blog",
    text3: "Press Center",
    text4: "Careers",
  },
  {
    title: "Privacy Policy",
    text: "Terms and Conditions",
    text1: "Modern Slavery Statement",
    text2: "Accessibility Statement",
  },
]

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Logo src={img} />
            <Social>
              <Icon1 />
              <Icon2 />
              <Icon3 />
              <Icon4 />
              <Icon5 />
              <Icon6 />
              <Icon7 src={img1} />
            </Social>
            <Below>© 2023 Andela. All rights reserved</Below>
          </Div>
{
  data.map((el:any)=>(
    <Div1>
    <Title>{el.title}</Title>
    <Text>{el.text}</Text>
    <Text>{el.text1}</Text>
    <Text>{el.text2}</Text>
    <Text>{el.text3}</Text>
    <Text>{el.text4}</Text>
  </Div1>
  ))
}
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Text = styled.div`
margin: 10px 0;
font-size: 12px;
`
const Title = styled.div`
margin-bottom: 15px;
font-weight: 700;
`
const Below = styled.div`
  font-size: 12px;
`;
const Social = styled.div`
  /* background-color: green; */
  margin-bottom: 70px;
  justify-content: space-between;
`;
const Icon7 = styled.img`
  width: 80px;
  margin-top: 20px;
`;
const Icon6 = styled(AiOutlineLinkedin)`
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;
const Icon5 = styled(AiFillYoutube)`
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;
const Icon4 = styled(AiFillInstagram)`
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;
const Icon3 = styled(AiFillGithub)`
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;
const Icon2 = styled(AiOutlineTwitter)`
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;
const Icon1 = styled(AiFillFacebook)`
  font-size: 30px;
  color: white;
  margin-right: 10px;
`;
const Logo = styled.img`
  width: 200px;
`;
const Div1 = styled.div`
  height: 350px;
`;

const Div = styled.div`
  width: 300px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  background-color: #173b3f;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;