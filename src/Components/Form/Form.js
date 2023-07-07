import React, { useState } from 'react';

import Button from '../Button/Button';
import classes from 'Form.module.css';
import UserInputField from '../SharedUIComponents/UserInputField/UserInputField';
import { placeholder } from '@babel/types';

const Form = () => {
  const [formData, setFormData] = useState({
    email: {
      inputName: 'email',
      placeholder: 'enter your email',
      value: '',
      type: 'email',
    },
    username: {
      inputName: 'username',
      placeholder: 'enter your username',
      value: '',
      type: 'text',
    },
    password: {
      inputName: 'password',
      placeholder: 'enter your password',
      value: '',
      type: 'password',
    },
  });

  // const handleInputChange = () => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  const handleSubmit = () => {
    e.preventDefault();

    clearInputs();
  };

  const clearInputs = () => {
    setFormData({ email: '', username: '', password: '' });
  };

  return (
    // how to use userInputField component instead here? is it neccessary?
    <form>
      <UserInputField inputData={formData.email} />
      <UserInputField inputData={formData.username} />
      <UserInputField inputData={formData.password} />
      <Button />
    </form>
  );
};

export default Form;
