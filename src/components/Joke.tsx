import React from 'react'

// Styling

const contentStyle = {
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
} as React.CSSProperties

const sectionStyle = {
  overflow: 'hidden',
} as React.CSSProperties


const Joke = (props: any): any => {
  return (
    <section style={sectionStyle} className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div style={contentStyle} className="container">
          <div className="is-size-2">
            {/* <input style={inputStyle} className="input" type="text" placeholder="Top Text" /> */}
            <p style={{display: props.topText ? 'block': 'none'}}>
              topText: {props.topText}
            </p>
          </div>
          <figure className="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Nothing" />
          </figure>
          <div className="is-size-2">
            {/* <input style={inputStyle} className="input" type="text" placeholder="Bottom text" /> */}
            <p>
              bottomText: {props.bottomText}
            </p>
          </div>
          <hr/>
        </div>
      </div>
    </section>
  )
}

export default Joke