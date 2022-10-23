import { Form, Formik } from "formik";
import styled from "styled-components";
import TextInput from "./textInput";

const StyledModal = styled.div`
  /* position: absolute; */
  /* z-index: 1;
  background-color: white ; */
`;

interface FormValues {
  name: string;
  description: string;
  isPrivate: boolean;
  password: string;
  limitation: number;
}
const CreateRoomModal = () => {
  const initialValues: FormValues = {
    name: "",
    description: "",
    isPrivate: false,
    password: "",
    limitation: 100,
  };
  return (
    <StyledModal>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            label="Room Name"
            name="name"
            type="text"
            placeholder="Room Name"
          />
          <TextInput
            label="Room Description"
            name="description"
            type="text"
            placeholder="Room Description"
          />
          <TextInput
            label="Password"
            name="password"
            type="text"
            placeholder="Password"
          />
          <TextInput
            label="People Limitation"
            name="limitation"
            type="text"
            placeholder="People Limitation"
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </StyledModal>
  );
};
export default CreateRoomModal;
