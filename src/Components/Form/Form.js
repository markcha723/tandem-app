import React, { useState } from 'react';

import Button from '../Button/Button';
import classes from './Form.module.css';
import UserInputField from '../SharedUIComponents/UserInputField/UserInputField';

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
      placeholder: 'new password',
      value: '',
      type: 'password',
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    clearInputs();
  };

  const clearInputs = () => {
    setFormData({ email: '', username: '', password: '' });
  };

  return (
    <form>
      <UserInputField inputData={formData.email} setFormData={setFormData} formData={formData} />
      <UserInputField inputData={formData.username} setFormData={setFormData} formData={formData} />
      <UserInputField inputData={formData.password} setFormData={setFormData} formData={formData} />
      <Button color='primary' size='small' onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

export default Form;
