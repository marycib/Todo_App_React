import React from "react";

import { BsClipboardCheck } from "react-icons/bs";



function CompleteIcon(props) {
    return (
<BsClipboardCheck  className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
    onClick={props.onComplete}
    />
    )
}


export {CompleteIcon};

