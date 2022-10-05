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
        <TextInput label="Username" name="username" type="text" placeholder="username" />
        <TextInput label="Password" name="password" type="text" placeholder="password" />
        <TextInput label="Confirm" name="confirm" type="text" placeholder="confirm" />
        <TextInput label="Email" name="email" type="text" placeholder="email" />
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default Register;
