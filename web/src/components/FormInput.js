import React from 'react';
import { AlertCircle } from 'lucide-react';

const FormInput = ({
  label,
  id,
  name,
  type,
  icon,
  value,
  onChange,
  error,
  placeholder,
  autoComplete
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
          className={`block w-full pl-10 pr-3 py-2.5 border ${
            error ? 'border-red-300' : 'border-gray-300'
          } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <div className="mt-2 flex items-center text-sm text-red-600">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;