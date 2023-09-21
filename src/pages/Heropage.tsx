
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const Heropage= ()=>{
// const choose: string[] = [
//    "blue", "background-image: linear-gradient(to-right, blue, black), background-clip: text, -webkit-background-clip: text, -webkit-text-fill-color-background: transparent,",
// ]
// const your: string[] = [
//     "background-image: linear-gradient(to-right, blue, black), background-clip: text, -webkit-background-clip: text, -webkit-text-fill-color-background: transparent,",
// ]
// const price: string[] = [
//   "background-image: linear-gradient(to-right, blue, black), background-clip: text, -webkit-background-clip: text, -webkit-text-fill-color-background: transparent,",
// ]
// const plan: string[] = [
//    "background-image: linear-gradient(to-right, blue, black), background-clip: text, -webkit-background-clip: text, -webkit-text-fill-color-background: transparent,",
// ]


// let ref1:any = useRef()
// let ref2:any = useRef()
// let ref3:any = useRef()
// let ref4:any = useRef()

// const [text1, settext1] = useState(0)

// useEffect(()=>{
//   setInterval(()=>{
//     ref1.current.style = choose[text1 % choose.length]
//     ref2.current.style = your[text1 % your.length]
//     ref3.current.style = price[text1 % price.length]
//     ref4.current.style = plan[text1 % plan.length]
//   }, 2000) 
// },[])

// useEffect(()=>{
//     setInterval(()=>{
//         settext1((el)=>el+0.5)
//     }, 2000)
// },[])
    return(

<div>
<Container>
<Wrapper>
    <Text>
<Nav>Choose your pricing plan</Nav>
    </Text>
    <PriceBar>
<Pricetag>
    <h2>Free</h2>
    <h1>Weblium Studio: save time - the<br/>
     studio will create the site for you.</h1>
    <p><span>0</span> USD/month</p>
    <p>+14-days free trial. Most Pro features available</p>
    <button>Choose plan</button>
</Pricetag>
<Pricetag bor="2px solid blue" >
<h2>Pro</h2>
    <h1>Unlock the full potential of Weblium<br/>
    with the Pro plan.</h1>
    <p><span>8.25</span> USD/month*</p>
    <p>+*Billed annually. $15 for a monthly plan</p>
    <button>Choose plan</button>
</Pricetag>
<Pricetag>
<h2>Studio</h2>
    <h1>Weblium Studio: save time - the<br/>
    studio will create the site for you.<br/>
    with the Pro plan.</h1>
    <p><span>8.25</span> USD/month*</p>
    <p>+*Billed annually. $15 for a monthly plan</p>
    <button>Order a site</button>
</Pricetag>

    </PriceBar>
</Wrapper>
</Container>
</div>

    )
} 

export default Heropage;

const Pricetag = styled.div<{bor?:string, mar?: string, hobg?: string, cl?: string}>`
background-color: red;
height: 450px;
width: 350px;
background-color: white;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 10px;
padding-left: 30px;
display: flex;
flex-direction: column;
gap: 30px;
border: ${({bor})=>bor};
h2{
    font-size: 35px;
    font-weight: 500;
    color: blue;
margin:0;
margin-top: 35px;

}
h1{
    font-size: 18px;
    font-weight: 400;
margin:0;

}
p{
margin:0;
    span{
        font-size: 30px;
        color: blue;
        font-weight: 600;
margin:0;

    }
}
button{
    height: 44px;
    width: 120px;
    background-color: blue;
    color: white;
    displa: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 10px;
    margin-top: ${({mar})=>mar};
    font-size: 13px;
    font-weight: 400;
}
@media screen and (max-width: 320px){
    width: 100%;
}
`
const PriceBar = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
flex-direction: row;
flex-wrap: nowrap;
@media screen and (max-width: 320px){
    width: 100%;
    flex-wrap: wrap;
}
`
const Nav = styled.text`
font-size: 40px;
color: blue;
font-weight: 500;
@media screen and (max-width: 320px){
    font-size: 20px;
}
`
const Text = styled.div`
// display: flex;
// align-items: center;
// flex-direction: row;
// gap: 10px;
@media screen and (max-width: 320px){
    width: 100%;
}
`
const Wrapper = styled.div`
height: 620;
width: 85%;
display: flex;
align-items: center;
flex-direction: column;
gap: 30px;
flex-wrap: nowrap;
@media screen and (max-width: 320px){
  flex-wrap: wrap;
}
`
const Container = styled.div`
min-height: ;
width: 100%;
background-color: #f5f5f5;
display: flex;
align-items: center;
justify-content: center;
padding-top: 100px;
padding-bottom: 100px;
@media screen and (max-width: 320px){
    width: 100%;
}
`