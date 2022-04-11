import {React, useState} from "react";

function Toggle() {
  const [on, setOn] = useState(true);

  function toggle(){
    setOn((on)=> !on);
  }

  return <button onClick={toggle}>{on ? "Off" : "On"}</button>;
}

export default Toggle;
