import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useQuery } from "urql";
import TextInput from "../components/textInput";
const HelloQuery = `
  query {
    hello
  }
`;
interface FormValues {
  username: string;
  password: string;
}

const Login = () => {
  const initialValues: FormValues = { username: "", password: "" };
  const [result, execute] = useQuery({
    query: HelloQuery,
  });

  useEffect(() => {
    console.log(result.data);
  }, [result]);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        execute();
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
