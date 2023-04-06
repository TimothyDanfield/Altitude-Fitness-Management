import React, { useState } from 'react'
import axios from "../../../utils/axiosConfig"
import './blog.css'

const Blog = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const emailChange = (e) => {
        setError('')
        setSuccess('')
        setEmail(e.target.value)
    }

    const nameChange = (e) => {
        setError('')
        setSuccess('')
        setName(e.target.value)
    }

    const joinBlog = async (e) => {
        e.preventDefault()
        try {
            const newBlogUser = await axios.post('/blog', { name, email })
            setSuccess(newBlogUser.data.success)
            setName('')
            setEmail('')
        } catch (error) {
            setError(error.response.data.error)
            setName('')
            setEmail('')
        }

    }

    return (
        <div className='blog'>
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
                            <div style={{color: 'red'}}>{error ? error : ''}</div><br></br>
                            <div style={{color: 'green'}}>{success ? success : ''}</div><br></br>
                            <label htmlFor="name">Full Name:</label>
                            <input id="name" name="name" value={name} required={true} onChange={nameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={email} required={true} onChange={emailChange} />
                        </div>
                        <button type="submit" className="btn-join" onClick={joinBlog}>Join Now</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Blog