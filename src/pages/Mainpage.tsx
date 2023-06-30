import React from 'react'
import img1 from "../assets/github-logo.svg"
import img2 from "../assets/invision-logo.svg"
import img3 from "../assets/coursera-logo.svg"
import img4 from "../assets/Kraft-Heinz-Logo.svg"
import img5 from "../assets/seismic-logo.svg"
import img6 from "../assets/goldman-sachs-logo.svg"
import im1 from "../assets/Andela_NewLogos.png"
import im2 from "../assets/Visual-3.png"
import {AiOutlineCheck} from "react-icons/ai"
import PeoCard from '../components/static/PeoCard'
import styled from 'styled-components'
import Button2 from '../components/static/Button2'
const Mainpage = () => {
    const logoImages=[
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
    ];
    const stats = [
        { text: "Long-term placements" },
        { text: "Trusted career partner" },
        { text: "Career Guidance" },
        { text: "96% match success" },
      ];

      const peopleData = [
        {
          name: "Florence",
          location: "Kenya",
          color: "rgb(235,224,255)",
          description:
            "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs.",
        },
        {
          name: "Kaji",
          location: "Great Britain",
          color: "rgb(252,225,225)",
          description:
            "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Start building your world-class team",
        },
        {
          name: "Adetola",
          location: "Nigeria",
          color: "rgb(253,240,220)",
          description:
            "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Start building your world-class",
        },
        {
          name: "Rafael",
          location: "Brazil",
          color: "rgb(176,214,206)",
          description:
            "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. ",
        },
        {
          name: "Adeyinka",
          location: "Nigeria",
          color: "rgb(253,240,220)",
          description:
            "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Start building.",
        },
      ];
    
  return (
    <div>
          <Container>
        <Label>
          <Main>
            <TextHold>
              <HeadText>
                {" "}
                Andela Launches New Platform to <i> Power the Future </i> of
                Customized Work{" "}
              </HeadText>
            </TextHold>

            <Button2 col={"#132128"} bg={"#56C870"} desc={"Find Out More"} />
          </Main>
        </Label>
        <LogoPart>
          <MainC>
            <HeadText>Trusted By</HeadText>
            <LogoHold>
              {logoImages.map((el) => {
                return <ImLogo src={el.img} />;
              })}
            </LogoHold>
          </MainC>
        </LogoPart>
        <Industry>
          <Mains>
            <ImLogo src={im1} height={"300px"} />
            <TextP>
              <SmT> Build your team today </SmT>
              <HeadText style={{ fontSize: "42px", marginTop: "10px" }}>
                {" "}
                We've cracked the code on creating engineering teams
              </HeadText>
              <Mmt>
                {" "}
                Skilled engineers, product managers, and designers at your
                fingertips. An extensive list of technical services to suit your
                business needs. Start building your world-class team faster with
                talent from Andela.
              </Mmt>
              <Button2 col={"#132128"} bg={"#56C870"} desc={"Find Out More"} />
            </TextP>
          </Mains>
        </Industry>
        <Industry>
          <Mains>
            <TextP style={{ width: "30%" }}>
              <SmT> Empower your future </SmT>
              <HeadText style={{ fontSize: "42px", marginTop: "10px" }}>
                {" "}
                Why the <i>world’s best talent</i> prefers Andela
              </HeadText>
              <TickHold>
                {stats.map((el) => {
                  return (
                    <div style={{ display: "flex", margin: "15px 0px" }}>
                      <Tick />
                      <Mmt style={{ margin: "0px" }}> {el.text}</Mmt>
                    </div>
                  );
                })}
              </TickHold>
              <Button2
                col={"#132128"}
                bg={"#56C870"}
                desc={"Find Text Experts"}
              />
            </TextP>
            <ImLogo
              src={im2}
              height={"400px"}
              style={{ marginRight: "150px" }}
            />
          </Mains>
        </Industry>
        <Industry>
          <MainC>
            <HeadText
              style={{
                fontSize: "42px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {" "}
              <i>Brilliant minds</i> and <i>companies</i> <br /> come together
              to build the future
            </HeadText>
            <br />
            <br />
            <CardHolder>
              {peopleData.map((el) => {
                return (
                  <PeoCard
                    name={el.name}
                    location={el.location}
                    description={
                      el.description
                    }
                    bgcol={el.color}
                  />
                );
              })}
            </CardHolder>
          </MainC>
        </Industry>
      </Container>
    </div>
  )
}

export default Mainpage

const Tick = styled(AiOutlineCheck)`
  color: green;
  margin-right: 20px;
`;
const CardHolder = styled.div`
display: flex;
overflow: hidden;
width: 100%;
`;
const TickHold = styled.div`
  font-size: 20px;
`;
const ImLogo = styled.img``;
const Mmt = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin: 20px 0px;
  font-weight: 300;
`;
const SmT = styled.div`
  font-weight: 600;
`;
const TextP = styled.div`
  width: 50%;
`;
const Industry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: #132128;
  width: 100%;
  min-height: 500px;
  margin-bottom: 64px;
`;
const LogoHold = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
const LogoPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e0f1eb;
  color: #132128;
  width: 100%;
  height: 200px;
`;
const Label = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #173b3f;
  color: white;
  height: 170px;
`;
const TextHold = styled.div`
  width: 45%;
  margin-right: 150px;
`;
const Main = styled.div`
  width: 90%;
  display: flex;
`;
const Mains = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MainC = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const HeadText = styled.div`
  font-size: 35px;
  font-family: "Inria Serif", Garamond, serif;
`;
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``







