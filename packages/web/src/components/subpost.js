import React from 'react'
import { Link } from 'gatsby'

const SubPost = (props) => (
    <div class='text-center mr-5'>
        <Link to="/contact/" class="hover:text-red-600" /*Right now links to Contact page but will later link to respect blog post*/>
            <h1 class="font-serif text-3xl text-white-800 text-center mt-10">
                {props.header}
            </h1>

            <div
            style={{
                backgroundColor: "#f1111d",
                borderRadius: 10,
                margin: 5,
                width: props.children.width,
                height: props.children.height,
            }}
            class='inline-block border-solid border-2 border-black'
            >
                <div 
                    style={{
                        position:'relative', 
                        left: 20, // 20
                        top: 20 // 20
                    }}
                    class = 'border-solid border-2 border-black'
                >
                    {props.children}
                </div>
            </div>
        </Link>
        <p class='justify-center mx-20 mt-10' /*'text-justify'*/>{props.desc}</p>
    </div>
)

export default SubPost