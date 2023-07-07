import React from 'react';

import classes from './UserInputField.module.css';

const UserInputField = ({ inputData, setFormData, formData }) => {
  const { inputName, placeholder, type, value } = inputData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: {
      ...inputData, value: e.target.value
    } });
  };

  return (
    <div>
      <form>
        <input
          name={inputName}
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
