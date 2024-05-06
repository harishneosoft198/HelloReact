import React from "react";
import ReactDOM from 'react-dom/client';

//create element using JSX is transplied before reaching js engine
const heading = <h1 id="heading">react from JSX</h1>
console.log(heading);


const Title = ()=>(
    <h1>This is Title</h1>
)
//creating the functional components
//component composition--combiation of two or more components
const HeadingComponent = ()=>{
    let text = 'Heading component from var';
    return(
        <div id="container" className="container">
            <Title/>
            <h1>{text}</h1>
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);