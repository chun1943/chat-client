import { Form, Formik } from "formik";
import TextInput from "../components/textInput";

interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const initialValues: FormValues = { username: "", password: "" };
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
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default Login;
