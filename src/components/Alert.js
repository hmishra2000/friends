import React from "react";


    
export default function Alert(props) {
    
  return (
    props.alert && <div>
      <div class="alert alert-success" role="alert" align="center">
       <strong >{props.alert}</strong> 
      </div>
    </div>
  );
}
