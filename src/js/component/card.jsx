import React from "react";
import Number from "./number.jsx";





const Card = (props) => {

return (
<div className="body">
<Number number={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>}/>
<Number number={props.counter5}/>
<Number number={props.counter4}/>
<Number number={props.counter3}/>
<Number number={props.counter2}/>
<Number number={props.counter1}/>
<Number number={props.counter}/>
</div>
);
};



export default Card;