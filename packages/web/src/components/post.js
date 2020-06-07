import React from 'react'

// ref: https://wdexplorer.com/20-examples-beautiful-css-typography-design/

const Post = (props) => (
    <article
        style={{
            backgroundColor: 'grey',
            padding: 20,
            borderRadius: 10,
            margin: 5
        }}
        className='inline-block'
    >
        <h1 style={{ 
            color: '#111', 
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '30px',
            fontWeight: 300,
            lineHeight: '32px',
            margin: '0 0 72px',
            textAlign: 'center'
         }}>
             {props.header}</h1>
        <p>{props.children}</p>

    </article>
)

export default Post