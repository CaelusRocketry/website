import React from 'react'
import { Link } from 'gatsby'

const SubPost = (props) => (
    <div class='text-center' style={{marginRight: 20}}>
        <article>
            <h1 class="font-serif text-3xl text-white-800 text-center mt-10">
                <Link to="/contact/" class='hover:text-red-600' /*Right now links to Contact page but will later link to respect blog post*/>{props.header}</Link>
            </h1>
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