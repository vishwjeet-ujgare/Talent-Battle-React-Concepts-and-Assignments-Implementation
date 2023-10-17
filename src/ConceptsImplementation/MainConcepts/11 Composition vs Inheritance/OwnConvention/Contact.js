import React from 'react';

function Contact() {
  const contactInfo = [
    { name: "Vishwjeeet", number: 9284452980 },
    { name: "Rohit Sir", number: 998746321 },
    { name: "Ajinkya sir", number: 8523698741 },
    { name: "Amit Prabhi sir", number: 7418529630 },
    { name: "Ruturaj Sir", number: 9876543210 },
  ];

  return (
    <div className='Contacts'>
        <div><h2>Contact Details</h2></div>
      <ul>
        {contactInfo.map((contact, index) => (
          <li key={index}>
            <strong>{contact.name}</strong>: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
