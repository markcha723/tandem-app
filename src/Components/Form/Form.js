import React, { useState } from "react";

import Button from "../Button/Button";


const Form = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleInputChange = () => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        e.preventDefault();

        clearInputs()
    }

    const clearInputs = () => {
        setFormData({ email: '', username: '', password: ''})
    }

    return (
        <form>
            <input 
                type='text'
                placeholder='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
            />

        </form>
    )

};

export default Form