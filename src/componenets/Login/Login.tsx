import { Formik } from "formik";
import { login } from "../../services/login"

const Login = () => {

    const submitLogin = (username: string, password: string) => {
        console.log(username, password)
        login(username, password)
    }

    return  (
        <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            const errors: any = {};
            if (!values.username) {
              errors.username = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            submitLogin(values.username, values.password)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && errors.username}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
   

}

export default Login