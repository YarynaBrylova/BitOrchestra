import React from 'react';

import type { FC, ChangeEvent , ReactNode } from 'react';

import { Field } from 'formik';

interface TextFieldI {
    children: ReactNode
    error?: string 
}

interface ChildrenPropsI {
    fieldName: string
    /* eslint-disable */
    onChange: (e: ChangeEvent) => void
    value: string
    placeholder: string
}

interface CheckboxPropsI {
    fieldName: string
    info: string
}

export const TextFieldWrapper:FC<TextFieldI>= ({children, error}) => (
  <div className='form-field'>
    {children}
    {error && <div className='error'>{error}</div>}
  </div>
);

export const TextareaComponent: FC<ChildrenPropsI> = ({ fieldName, onChange, value, placeholder }) => (
  <textarea
    id={fieldName}
    name={fieldName}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export const InputComponent: FC<ChildrenPropsI> = ({ fieldName, onChange, value, placeholder }) => (
  <input
    id={fieldName}
    name={fieldName}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export const CheckboxComponent:FC<CheckboxPropsI> = ({fieldName, info}) => (
  <div className='checkbox-info'>
    <Field type="checkbox" name={fieldName} />
    <span>{info}</span>
  </div>
);