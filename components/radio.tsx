import { FieldHookConfig, useField } from "formik";
import { ClassAttributes, InputHTMLAttributes } from "react";

type Props = { children: JSX.Element } & InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>;

const Radio = ({ children, ...props }: Props) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    // <div>
       <div role="group" aria-labelledby="my-radio-group">
            <label>
              <input type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <input type="radio" name="picked" value="Two" />
              Two
            </label>
            {/* <div>Picked: {values.picked}</div> */}
          </div>
    //   <label className="checkbox-input">
    //     <input type="checkbox" {...field} {...props} />
    //     {children}
    //   </label>
    //   {meta.touched && meta.error ? (
    //     <div className="error">{meta.error}</div>
    //   ) : null}
    // </div>
  );
};
export default Radio;
