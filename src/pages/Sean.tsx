import styled from "styled-components";

import video from "../asssets/sean.mp4"
import { useRef, useEffect, useState } from "react";
import {FaAngleUp} from "react-icons/fa"

const Hero = ()=>{
    const Dev: string[] = [
        "background-image: linear-gradient(to right, darkblue, gold);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
        "white",
        "white",
      ];
      const Prev: string[] = [
        "white",
        "background-image: linear-gradient(to right, purple, violet);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
        "white",
      ];
      const Shi: string[] = [
        "white",
        "white",
        "background-image: linear-gradient(to right, orangered, orange);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
      ];
    
      let dev_ref: any = useRef();
      let prev_ref: any = useRef();
      let shi_ref: any = useRef();
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        dev_ref.current.style = Dev[count % Dev.length];
        prev_ref.current.style = Prev[count % Prev.length];
        shi_ref.current.style = Shi[count % Shi.length];
      });
    
      useEffect(() => {
        setInterval(() => {
          setCount((el) => el + 1 / 2);
        }, 2000);
      }, []);


const [Top, setTop] = useState(false)

const ScrolltoTop = ()=>{
    if(Top && window.pageYOffset >=100){
        setTop(true)
    }else if(Top && window.pageYOffset <=100){
        setTop(false)
    }
}

const ScrollT = ()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
}
window.addEventListener("scroll", ScrolltoTop)
    return(
        <div>
            <Container>
             <Wrapper>
                <Textholg>
                    <Big ref={dev_ref}>
                          The most effortless<br/>
                          website builder
                    </Big>
                    <Small ref={prev_ref}>
                    Create your website in the blink of an eye!<br/>
                    No coding or designing skills needed.
                    </Small>
                    <Holdbut>
                    <Button>Start For Free</Button>
                    <Button2>Order a Website</Button2>
                    </Holdbut>
                <Text ref={shi_ref}>* No Credit Card Needed</Text>
                    </Textholg>
                <Video style={{borderRadius:"15px"}}  src={video} muted loop autoPlay playsInline/>
            <Topp onClick={ScrollT}>
               <FaAngleUp/>
            </Topp>
             </Wrapper>
            </Container>
        </div>
    );
}
export default Hero;
const Topp = styled.div`
color: white;
font-size: 20px;
height: 50px;
width: 50px;
border-radius: 50%;
background-color: blue;
position: fixed;
// position: absolute;
left: 1500px;
top: 700px;
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.text`
font-size: 13px;
color: blue;
`

const Video = styled.video`
    height: 75%;
    width: 60%;
    border-radius: 200px;
    /* background-color: black; */
`

const Holdbut = styled.div`
        width: 85%;
        height: 80px;
        /* background-color: red; */
        display: flex;
        flex-direction: row;
        align-items: center;
       gap: 30px;
`

const Button2 = styled.div`
width: 180px;
height: 50px;
background-color: white;
border-radius: 10px;
color: blue;
display: flex;
justify-content: center;
align-items: center;
border: 2px solid blue;
&:hover{
    background-color: blue;
    color: white;
}
`
const Button = styled.div`
width: 180px;
height: 50px;
background-color: blue;
border-radius: 10px;
color: white;
display: flex;
justify-content: center;
align-items: center;

&:hover{
    background-color: white;
    color: blue;
    border: 2px solid blue;

}
`


const Small = styled.div`
font-weight: bold;
font-size: 25px;
`


const Big = styled.div`
    font-size: 45px;
    font-family: Quicksand;
    font-weight: bold;
    color: blue;
`

const Textholg = styled.div`
min-height: 290px;
width: 40%;
/* background-color: green; */
display: flex;
justify-content: space-between;
flex-direction: column;

`

const Wrapper  = styled.div`
    width: 95%;
    height: 80%;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
   flex-wrap: nowrap;
    @media screen and (max-width: 320px){
        width: 100%;
flex-wrap: wrap;
    }
`

const Container = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 320px){
        width: 100%;
    }
`