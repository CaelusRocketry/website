import React from 'react'

// ref: https://wdexplorer.com/20-examples-beautiful-css-typography-design/

const ImagePost = (props) => (
    <div class='text-center'>
        <article>
            <h1 style={{ 
                color: 'white', 
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '30px',
                fontWeight: 300,
                lineHeight: '32px',
                margin: '20px 0px 18px',
                textAlign: 'center'
            }}>
                {props.header}</h1>
            <p class='text-justify'>{props.desc}</p>
        </article>
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
    </div>
)

export default ImagePost

// OLD ATTEMPT
/*
    <div class='text-center'>
        <article>
            <h1 style={{ 
                color: 'white', 
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '30px',
                fontWeight: 300,
                lineHeight: '32px',
                margin: '20px 0px 18px',
                textAlign: 'center'
            }}>
                {props.header}</h1>
            <p class='text-justify break-all ...'>{props.desc}</p>
        </article>
        <div
            style={{
                backgroundColor: "#f1111d",
                padding: 0,
                borderRadius: 10,
                margin: 5,
                position: 'relative',
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
    </div>
*/