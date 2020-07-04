import React from "react";

import SubPost from "../components/subpost";
import Img from "gatsby-image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PostCarousel = props => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    return (
        <Carousel responsive={responsive}>
            {props.posts.slice(props.start).map((post) => (
                <div class="flex-auto">
                    <SubPost header={post.title} slug={post.slug.current} date={post.date}>
                        <Img fixed={post.image.asset.fixed} />
                    </SubPost>
                </div>
            ))}
        </Carousel>
    );
}

export default PostCarousel