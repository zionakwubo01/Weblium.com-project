import react from "react"
import styled from "styled-components"
import { RouterProvider } from "react-router-dom";
import { types } from "util";

type buttonsize ={
    size?: 'xl' | 'xs' | 'large' | 'm'
}

const btnsize = {
    xl:{
        padding: [10, 20]
    },
    xs: {
        padding: [5, 10]
    },
    large: {
        padding: [10, 20]
    },
    m: {
        padding: [5, 5]
    }
}

const Buttonglobal= ()=>{

    return(

<div>
<Buttonslip></Buttonslip>
</div>

    )
}

export default Buttonglobal;
const Buttonslip = styled.button<buttonsize>`
padding: ${({size = 'm'})=>btnsize[size].padding.map((value, index)=>`${value}px`).join(" ")};
`