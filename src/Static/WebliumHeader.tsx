import styled from 'styled-components'
import Buttonglobal from '../Globalbutton/Buttonglobal';
import logo from "../asssets/W-logo.svg"
import {FaAngleDown} from "react-icons/fa"
import { StringLiteral } from 'typescript';
import { useState } from 'react'
import {FiMenu} from "react-icons/fi"
const Header = ()=>{ 
    const [Header, setHeader] = useState(true) 

    const HeaderChange = ()=>{
        if(Header && window.pageYOffset >=100){
            setHeader(false)
        }else if (Header && window.pageYOffset <=100){
            setHeader(true)
        }
    }

    window.addEventListener('scroll', HeaderChange)
    const [show, setshow] = useState(false)

    const Letshow = ()=>{
        setshow(!show)
        setshow2(false)
    }
    const [show2, setshow2] = useState(false)
    const Letshow2 = ()=>{
        setshow2(!show2)
        setshow(false)
    }
    return(
        <div>
  {Header ? (
     <Container>
     <Wrapper>
 <Logo>
     <img src={logo} alt="" width="62%"/>
 </Logo>
 <Texts>
 <Nav onClick={Letshow}>Solutions
 <FaAngleDown style={{marginTop: "5px", fontSize: "18px", fontWeight: "lighter"}}/>
 </Nav>
 <Nav>Features</Nav>
 <Nav>Pricing</Nav>
 <Nav>Templates</Nav>
 <Nav onClick={Letshow2} >Resources 
     <FaAngleDown style={{marginTop: "5px", fontSize: "18px", fontWeight: "lighter"}}/>
 </Nav>
 </Texts>
 <Butt>
     <En>En
     <FaAngleDown style={{marginTop: "5px", fontSize: "18px" ,fontWeight: "lighter"}}/>
 
     </En>
  <Log wi="70px" bg="white" cl="blue" ho="blue" hocl="white">Log in</Log>
  <Log wi="110px" bg="blue" cl="white" ho="#3e78ff">Start for free</Log>
 </Butt>
 <Ican>
    <FiMenu/>
 </Ican>
     </Wrapper>
    {show ? (
      <Dropdown ri="700px" bg="blue">
         
      </Dropdown>
    ):(
     null
    )}
 
  {show2?(
       <Dropdown left="700px;" bg="yellow">
 
       </Dropdown>
  ):(
     null
  )}
    </Container>
  ):(
    <Container box=" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;">
    <Wrapper>
<Logo>
    <img src={logo} alt="" width="62%"/>
</Logo>
<Texts>
<Nav onClick={Letshow}>Solutions
<FaAngleDown style={{marginTop: "5px", fontSize: "18px", fontWeight: "lighter"}}/>
</Nav>
<Nav>Features</Nav>
<Nav>Pricing</Nav>
<Nav>Templates</Nav>
<Nav onClick={Letshow2}>Resources 
    <FaAngleDown style={{marginTop: "5px", fontSize: "18px", fontWeight: "lighter"}}/>
</Nav>
</Texts>
<Butt>
    <En>En
    <FaAngleDown style={{marginTop: "5px", fontSize: "18px"}}/>

    </En>
 <Log wi="70px" bg="white" cl="blue" ho="blue" hocl="white">Log in</Log>
 <Log wi="110px" bg="blue" cl="white" ho="#3e78ff">Start for free</Log>
</Butt>
{show ? (
     <Dropdown ri="700px" bg="blue">
        
     </Dropdown>
   ):(
    null
   )}

 {show2?(
      <Dropdown left="700px;" bg="red">

      </Dropdown>
 ):(
    null
 )}
 <Ican>
    <FiMenu/>
 </Ican>
    </Wrapper>
  
   </Container>
  )}
        </div>
    )
}
export default Header;
const Ican = styled.div`
font-size: 30px;
color: black;
display: none;
@media screen and (max-width: 320px){
display:flex;
}
`
const Dropdown = styled.div<{ri?:string, left?: string, bg: string}>`
height: 200px;
width: 600px;
background-color: ${({bg})=>bg};
position: absolute;
top: 90px;
right: ${({ri})=>ri};
left: ${({left})=>left};
border-radius: 10px;
`
const En = styled.text`
color: black;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const Nav = styled.text`
font-size: 16px;
font-weight: 600;
color: blue;
display: flex;
align-items: center;
justify-content: center;
`
const Log = styled.div<{wi: string, bg: string, cl: string, ho: string, hocl?: string}>`
height: 35px;
background-color: ${({bg})=>bg};
width: ${({wi})=>wi};
border-radius: 10px;
border: 2px solid blue;

display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: bold;
color: ${({cl})=>cl};
&:hover{
    background-color: ${({ho})=>ho};
cursor: pointer;
color: ${({hocl})=>hocl};

}
`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 15px;
// background-color: green;
flex-direction: row;
`
const Butt = styled.div`
display: flex;
align-items: center;
gap: 15px;
flex-direction: row;
@media screen and (max-width: 320px){
    display:none;

    }
`
const Texts = styled.div`
display: flex;
align-items: center;
gap: 20px;
flex-direction: row;
justify-content: center;
gap: 15px;
// height: 50px;
// width: 100px;
// background-color: tan;
@media screen and (max-width: 320px){
    display:none;

    }
`
const Wrapper = styled.div`
height: 100%;
width: 95%;
background-color: white;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
@media screen and (max-width: 320px){
    
}
`
const Container = styled.div<{box?: string}>`
height: 65px;
width: 100%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
z-index: 3;
box-shadow: ${({box})=>box};
@media screen and(max-width: 320px){
    width: 100%;
}
`


