import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Card.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
library.add(fab, faCheckSquare, faCoffee)
export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  ilink,
  llink,
  elink,
  plink,
  name
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {<h3 style={{color:"white",backgroundColor:"black", textAlign:"center"}}>
{name? name : ""}
      </h3> }
      {<h6 style={{color:"white",backgroundColor:"black",textAlign:"center",fontWeight:"bold"}}> { title? title :""} </h6> }
{<div id="gflex">
<script src="https://kit.fontawesome.com/d915a6a92d.js" crossorigin="anonymous"></script>
<Link id="mauu" to={ilink}><div id="gflexx"><FontAwesomeIcon icon="fa-brands fa-instagram" /></div></Link>  
<Link id="mauu" to={llink}> <div id="gflexx"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div></Link>
<Link id="mauu" to={elink}> <div id="gflexx">   <FontAwesomeIcon icon={faEnvelope} /></div></Link>
<Link id="mauu" to={plink}> <div id="gflexx"> <FontAwesomeIcon icon={faPhone} /></div></Link>
<Link id="mauu" to={"https://sahil-shakoor.web.app"}> {name==="Sahil"?<div id="gflexx"> <FontAwesomeIcon icon={faLink} spin/> </div>:""}</Link>
  
  
   </div> }
    </div>
  );
};