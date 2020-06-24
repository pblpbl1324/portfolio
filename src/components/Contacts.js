import React from "react";
import CONTACTS from "../data/contacts";

const Contact = props => {
    //tie all project attributes to props' keys and render it
    const { name, info } = props.contact;
    return (
        <div>
            <p><b>{name}: </b>{info}</p>
        </div>
    )
}

const Contacts = () => (
    <div>
    {
        //pass each project object to the Project class to convert it to jsx code
        CONTACTS.map(CONTACT => (
            <Contact key={CONTACT.id} contact={CONTACT}/>
        ))
    }
    </div>
)

export default Contacts;