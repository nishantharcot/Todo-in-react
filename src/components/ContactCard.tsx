import React from 'react'

const headStyle = {
  display: 'flex',
} as React.CSSProperties

const ContactCard = (props: any): any => {
  console.log(props.contact['name'])
  return (
    <div className="contact-card">
      <h3 style={headStyle}>
        <strong>
          {props.contact['name']}
        </strong>
      </h3>
      <p>
        Phone: {props.contact['phone']}
      </p>
      <p>
        Email: {props.contact['email']}
      </p>
    </div>
  )
}

export default ContactCard