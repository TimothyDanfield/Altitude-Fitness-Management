import React, { useState } from 'react'
import './blog.css'

const Blog = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const joinBlog = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <section className="blog-section">
                <div className="blog-title" id="blog1">
                    <h2 className="blog">Blog Title 1</h2>
                </div>
                <div className="blog-title" id="blog2">
                    <h2 className="blog">Blog Title 2</h2>
                </div>
                <div className="form-section">
                    <h2 className="blog">Join Our Community</h2>
                    <p className="post">Get the latest updates and exclusive content by joining our community. Fill out the form below to get started!</p>
                    <form className="form" action="" method="post">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="textt" id="name" name="name" required onChange={nameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="emaill" id="email" name="email" required onChange={emailChange}/>
                        </div>
                        <button type="submit" className="btn-join" onClick={joinBlog}>Join Now</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Blog