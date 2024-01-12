import React, { useState } from 'react';

const PasswordToggle = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleTogglePassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
};

export default PasswordToggle;
