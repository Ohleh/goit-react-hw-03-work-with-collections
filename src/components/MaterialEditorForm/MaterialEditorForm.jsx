import { Formik, Form, Field } from 'formik';

const MaterialEditorForm = () => {
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Description
          <Field name="title" type="text" />
        </label>
        <br />
        <label>
          Link here
          <Field name="link" type="text" />
          {/* <Field name="link" type="url"></Field> */}
        </label>
        <br />
        <button type="button"> Add material</button>
      </Form>
    </Formik>
  );
};

export default MaterialEditorForm;
