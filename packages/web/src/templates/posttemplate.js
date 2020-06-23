import React from 'react'
import Layout from "../components/layout"

const PostTemplate = ({ data: { post } }) => (
    <Layout>
        <SEO title={`$(post.title)`} />
        {post.title}
        
    </Layout>
)