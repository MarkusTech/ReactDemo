import React from "react";

const contactInfo = 
[
    {name: "Juan", phone:"09078249017"},
    {name: "tamad", phone:"09127632096"},
    {name: "Tapolana", phone:"09913258194"}
];

const contacts = contactInfo.map( (contact, index) => {
    return <li key={index}>{contact.name}: {contact.phone}</li>
} );

class ArrayList extends React.Component{
    render(){
        return(
            <ul className="container">
                {contacts}
            </ul>
        );
    }
}

export default ArrayList;