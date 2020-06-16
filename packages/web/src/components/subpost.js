import React from 'react'

const SubPost = (props) => (
    <div class='text-center' style={{marginRight: 20}}>
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
                width: props.children.width,
                height: props.children.height,
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

export default SubPost