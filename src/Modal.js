import React from "react";
import "./FormStyles.css";

export default function Modal({ isVisible,errormsg=null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The form has been submited successfully</h1> */}
          <h1 style={{color:errormsg?"red":"green"}}>{errormsg!=null?errormsg:"<h1>The form has been submited successfully</h1>"}</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
