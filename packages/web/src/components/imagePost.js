import React from 'react'
import { Link } from 'gatsby'
 
// ref: https://wdexplorer.com/20-examples-beautiful-css-typography-design/

const ImagePost = (props) => (
    <div class='text-center'>
        <article>
            <h1 class="font-serif text-3xl text-white-800 text-center mb-2">
                <Link to="/contact/" class='hover:text-red-600' /*Right now links to Contact page but will later link to respect blog post*/>{props.header}</Link>
            </h1>
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
        <p class='justify-center mx-20 mt-10' /*'text-justify'*/>{props.desc}</p>
    </div>
)

export default ImagePost