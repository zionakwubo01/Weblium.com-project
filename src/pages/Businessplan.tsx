import styled from "styled-components"
import {FaCheckCircle} from "react-icons/fa"
const Businessplan = ()=>{
    return(
        <div>
<Container>
    <Wrapper>
     <Plans bg="">
        <Bizz>
        Business plans from <br/>Weblium
        </Bizz>
        <Dis>
            <p>Up to <span>50% discount</span> on the cost of subscription. 
                Buy several sites at once to work <br/>with them simultaneously.</p>
                <Advert>
                    <Text>
                        <FaCheckCircle/>
                        <p>For adverting agencies</p>
                    </Text>
                    <Text>
                        <FaCheckCircle/>
                        <p>For mini studios</p>
                    </Text>
                    <Text>
                        <FaCheckCircle/>
                        <p>For active freelancers</p>
                    </Text>
                </Advert>
        </Dis>
     </Plans>
    
    </Wrapper>
</Container>
        </div>
    )
}

export default Businessplan;
const Text = styled.div`
min-width: ;
display: flex;
align-items: center;
flex-direction: row;
gap: 7px;
margin-top: 18px;
font-size: 20px;
@media screen and (max-width: 320px){
    width: 100%;
    font-size: 15px;
    display: flex;
    flex-direction: row;
}
`
const Advert = styled.div`
display: flex;
align-item: center;
flex-direction: row;
gap: 20px;
flex-wrap: nowrap;
@media screen and (max-width: 320px){
    width: 100%;
    flex-wrap: wrap;
}
`
const Dis = styled.div`
height: 100%;
width: 55%;
// background-color: green;
flex-wrap: nowrap;
p{
    span{
        color: blue;
    }
    font-size: 18px;
    font-weight: 600;
    @media screen and (max-width: 320px){
        width: 100%;
       flex-wrap: wrap;
       p{
        text-align: center;
       }
    }
}
`
const Bizz = styled.text`
font-size: 50px;
font-weight: 700;
color: blue;
display: flex;
align-items: center;
// justify-content: center;
@media screen and (max-width: 320px){
    width: 100%;
    font-size: 40px;
        text-align: left;
        diplay: flex;
        align-items: center;
        justify-content: center;
}
`
const Plans = styled.div<{bg: string, box?: string}>`
min-height: ;
width: 100%;
background-color: ${({bg})=>bg};
border-radius: 10px;
box-shadow: ${({box})=>box};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  @media screen and (max-width: 320px){
    width: 100%;
    flex-wrap: wrap;
}
`
const Wrapper = styled.div`
min-height: ;
width: 76%;
// background-color:  green;
display: flex;
align-items:center;
flex-direction: column;
border-radius: 20px;
flex-wrap: nowrap;
justify-content: space-between;
@media screen and (max-width: 320px){
    width: 100%;
flex-wrap:wrap;
}
`
const Container = styled.div`
min-height: ;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5f5f5;
@media screen and (max-width: 320px){
    width: 100%;
}
`