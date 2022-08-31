import { Field, Form, Formik } from "formik";

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
        <label htmlFor="email">Email: </label>
        <Field id="email" name="email" placeholder="email" />
        <label htmlFor="account">Account: </label>
        <Field id="account" name="account" placeholder="account" />
        <button className="btn" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
export default Register;
