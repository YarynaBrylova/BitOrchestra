import React from 'react';

import type { FC, ChangeEvent } from 'react';
import type { FormikProps } from 'formik';

import { TextFieldWrapper, TextareaComponent, InputComponent, CheckboxComponent } from './Review-form-elements';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { ReviewForm } from '../../../variables';
import './Review-form.scss';

interface FormValuesI {
  comment: string
  name: string
  email: string
  phone: string
  saving: boolean
}

export const ReviewFormComponent: FC = () => {
  const initialValues: FormValuesI = {
    comment: '',
    name: '',
    email: '',
    phone: '',
    saving: false
  };

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  /* eslint-disable */
  const createInputField = (fieldName: string, onChange: (e: ChangeEvent) => void, value: string, placeholder: string) => (
    <InputComponent
      fieldName={fieldName}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );

  return (
    <div className='form-review-wrapper'>
      <h3>{ReviewForm.FormHeader}</h3>
      <span className='additional-info'>{ReviewForm.AdditonalInfo}</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {console.log(values);}}
      >
        {(props: FormikProps<FormValuesI>) => (
          <form onSubmit={props.handleSubmit} className="form">
            <TextFieldWrapper error={props.errors.comment}>
              <TextareaComponent
                fieldName="comment"
                onChange={props.handleChange}
                value={props.values.comment}
                placeholder={ReviewForm.CommentTextFieldPlaceholder}
              />
            </TextFieldWrapper>

            <div className='form-row'>
              <TextFieldWrapper error={props.errors.name}>
                {createInputField('name', props.handleChange, props.values.name, ReviewForm.NameTextFieldPlaceholder)}
              </TextFieldWrapper>
              <TextFieldWrapper error={props.errors.email}>
                {createInputField('email', props.handleChange, props.values.email, ReviewForm.EmailTextFieldPlaceholder)}

              </TextFieldWrapper>
            </div>

            <TextFieldWrapper error={props.errors.phone}>
              {createInputField('phone', props.handleChange, props.values.phone, ReviewForm.PhoneTextFieldPlaceholder)}
            </TextFieldWrapper>
            
            <CheckboxComponent fieldName="saving" info={ReviewForm.CheckboxInfo}/>

            <button 
              type="submit" 
              disabled={!props.dirty || !props.isValid}
              className="btn btn-secondary btn-md submit"
            >
              {ReviewForm.Post}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};