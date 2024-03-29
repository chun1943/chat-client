import { Form, Formik } from "formik";
import TextInput from "../components/textInput";

interface FormValues {
  username: string;
  password: string;
  confirm: string;
  email: string;
}

const Register = () => {
  const initialValues: FormValues = { username: "", password: "", confirm: "", email: "" };
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
        <TextInput label="Username" name="username" type="text" placeholder="username" />
        <TextInput label="Password" name="password" type="password" placeholder="password" />
        <TextInput label="Confirm" name="confirm" type="password" placeholder="confirm" />
        <TextInput label="Email" name="email" type="email" placeholder="email" />
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default Register;
