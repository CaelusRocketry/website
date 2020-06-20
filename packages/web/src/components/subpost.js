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
                        left: 20,
                        top: 20
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

/*
OLD CODE

    <div class='text-center' style={{marginRight: 20}}>
        <h1 class="font-serif text-3xl text-white-800 text-center mt-10">
            <Link to="/contact/" class='hover:text-red-600' Right now links to Contact page but will later link to respect blog post>
            {props.header}
            </Link>
        </h1>
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
                <Link to="/contact/">{props.children}</Link>
            </div>
        </div>
    </div>
*/