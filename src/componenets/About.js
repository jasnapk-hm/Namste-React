import { useState } from "react"

const About =()=>{
    const [obj,setObj]=useState({
        firstname:"jasn",
        lastName:"pk",
        address:{
            address1:"PKbhavan",
            address2:"Kannur"
        }

    })
 const array=[1,2,3,4]
 const a= array.map((e)=>e*2)
 
 
    const handleChange=()=>{
        array.forEach(element => {
            element*3
        });
        setObj({...obj,address:{...obj.address,address2:"test1"}})
    }
    return (
        <>
        <p>value of a {a} {array}</p>
        <h3>About page</h3>
        <h1>{obj['firstname']}</h1>
        <h1>{obj['lastname']}</h1>
        <h1>{obj.address['address1']}</h1>        <h1>{obj.address['address2']}</h1>

        <button onClick={handleChange}>Change</button>

        <div style={{display:'inline-block'}} >Abc</div>
        <div  style={{display:'inline-block'}}>sdf</div>
        </>
    )
}

export default About;