import React from 'react'
import { Form, useActionData } from 'react-router-dom'

const Contact = () => {
    let errorMessages = useActionData()
    console.log(errorMessages)
    return (
        <section className='contact'>
            <h1>This is Contact Form</h1>
            <Form method='post' action='/contact'>
                <input name="fname" type="text" placeholder='First Name' />
                {errorMessages && <p className='errorMassage'>{errorMessages.fname}</p>}

                <input name="lname" type="text" placeholder='Last Name' />
                {errorMessages && <p className='errorMassage'>{errorMessages.lname}</p>}

                <input name="email" type="email" placeholder='Enter Email' />
                {errorMessages && <p className='errorMassage'>{errorMessages.email}</p>}

                <input name="password" type="password" placeholder='Enter password' />
                {errorMessages && <p className='errorMassage'>{errorMessages.password}</p>}

                <textarea name="message" rows="5" placeholder='Enter Your Message'></textarea>
                <button type='submit'>Send Message</button>
            </Form>
        </section>
    )
}

export default Contact


export async function data({ request }) {
    let formData = await request.formData();
    let errors = {}

    if (!formData.get("fname")) {
        errors.fname = "Enter First Name"
    }

    if (!formData.get("lname")) {
        errors.lname = "Enter Last Name"
    }

    if (!formData.get("email")) {
        errors.email = "Enter Email"
    }

    if (!formData.get("password")) {
        errors.password = "Enter password"
    }

    // console.log(errors == {})
    return errors
}