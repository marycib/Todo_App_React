import React from "react";
import { BsJournalX } from "react-icons/bs";


function DeleteIcon(props) {
    return (
        <BsJournalX 
        className={"Icon Icon-delete"}
        onClick={props.onDelete}
        />
    )
}


export {DeleteIcon};