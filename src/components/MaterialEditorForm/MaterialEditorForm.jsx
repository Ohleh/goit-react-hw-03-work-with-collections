import { Formik, Form, Field } from 'formik';

const MaterialEditorForm = () => {
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={(xxx = console.log(xxx))}
    >
      <Form>
        <label>
          Description
          <Field name="title"></Field>
        </label>
        <button type="button"> Add material</button>
      </Form>
    </Formik>
  );
};

export default MaterialEditorForm;
