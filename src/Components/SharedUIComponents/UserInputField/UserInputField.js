import React from 'react';

import classes from './UserInputField.module.css';

const UserInputField = ({ inputData }) => {
  const { inputName, placeholder, type, value } = inputData;

  const handleInputChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          inputName={inputName}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default UserInputField;
