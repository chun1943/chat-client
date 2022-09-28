import { Field, Form, Formik } from "formik";
import TextInput from "../components/textInput";

interface Props {}

interface FormValues {
  email: string;
}

const Register: React.FC<Props> = () => {
  const initialValues: FormValues = { email: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        {/* <label htmlFor="username">Username: </label>
        <Field id="username" name="username" placeholder="Username" />
         */}
         <TextInput label="username"
            name="username"
            type="text"
            placeholder="username"/>
        <label htmlFor="password">Password: </label>
        <Field id="password" name="password" placeholder="Password" />
        <label htmlFor="confirm">Confirm Password: </label>
        <Field id="confirm" name="confirm" placeholder="Confirm Password" />
        <label htmlFor="email">Email: </label>
        <Field id="email" name="email" placeholder="email" />

        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default Register;
