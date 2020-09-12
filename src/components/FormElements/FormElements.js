import React from "react";
import { Field } from "formik";

export function InputField({ type, name, placeholder, label }) {
  return (
    <Field type={type} name={name} placeholder={placeholder}>
      {({ field, form: { touched, errors }, meta }) => (
        <div>
          <label>{label}</label>
          <input type={type} {...field} className="form-control" />
          {meta.touched && meta.error && (
            <div className="small text-danger">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
}

export function SelectField({ name, label, options }) {
  return (
    <Field type="select" name={name}>
      {({ field, form: { touched, errors, handleChange }, meta }) => (
        <div>
          <label>{label}</label>
          <select className="form-control" name={name} onChange={handleChange}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          {meta.touched && meta.error && (
            <div className="small text-danger">{meta.error}</div>
          )}
        </div>
      )}
    </Field>
  );
}

export function TextAreaField({ name, label, numberOfRows, placeholder }) {
  return (
    <Field name={name} placeholder={placeholder}>
      {({ field, form: { touched, errors, handleChange }, meta }) => (
        <div>
          <label>{label}</label>
          <textarea
            className="form-control"
            name={name}
            rows={numberOfRows}
            onChange={handleChange}
          ></textarea>
        </div>
      )}
    </Field>
  );
}
