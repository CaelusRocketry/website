import React from 'react'

// ref: https://wdexplorer.com/20-examples-beautiful-css-typography-design/

const ImagePost = (props) => (
    <div class='text-center'>
        <div
            style={{
                backgroundColor: "#f1111d",
                padding: 0,
                borderRadius: 10,
                margin: 5,
                width: '35%',
                height: '25%'
            }}
            class='inline-block'
        >
            <div 
                style={{
                    position:'relative', 
                    left: 20,
                    top: 20
                }}
            >
                {props.children}
            </div>
        </div>
        <article
            style={{
                //position: 'relative',
                //left: 400,
                //bottom: 370
            }}
            class='content-end'
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
            <p>{props.desc}</p>
        </article>
    </div>
)

export default ImagePost