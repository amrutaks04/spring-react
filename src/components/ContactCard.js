import React from "react";
import user from   "../images/user.png";
const ContactCard = (props) => {

    const {id,name,email} = props.contact;
    return (
        <div className="item">
            <div className="content">
                <img className="ui avatar image" src={ user}></img>
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
        </div>
    );
}

export default ContactCard;