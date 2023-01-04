import { Formik, useFormik } from 'formik';
import { Div, Text, Input, Button } from 'react-native-magnus';

import { loginValidator } from '../utils/formValidators';

const LoginForm = ({ loginUser }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }) => {
      loginUser({ email, password });
    },
    validationSchema: loginValidator,
  });

  return (
    <Div m="lg">
      <Text mt="2xl" color="gray900" fontWeight="bold" fontSize="6xl">
        Login
      </Text>
      <Text color="gray500" mt="sm">
        Login to your account with your email and password
      </Text>
      <Text fontSize="md" mt="2xl">
        Email
      </Text>
      <Input
        mt="sm"
        py="lg"
        placeholder="Email address"
        autoCapitalize={false}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        borderColor={
          formik.touched.email && formik.errors.email ? 'red500' : 'gray400'
        }
      />
      <Div h={5}>
        <Div position="absolute" top={0} zIndex={1}>
          <Text color="red500" fontSize="md" mt="sm">
            {formik.touched.email && formik.errors.email}
          </Text>
        </Div>
      </Div>
      <Text fontSize="md" mt="xl">
        Password
      </Text>
      <Input
        mt="sm"
        py="lg"
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        borderColor={
          formik.touched.password && formik.errors.password
            ? 'red500'
            : 'gray400'
        }
      />
      <Div h={5}>
        <Div position="absolute" top={0} zIndex={1}>
          <Text color="red500" fontSize="md" mt="sm">
            {formik.touched.password && formik.errors.password}
          </Text>
        </Div>
      </Div>
      <Button block py="lg" mt="xl" bg="green700" onPress={formik.handleSubmit}>
        Submit
      </Button>
    </Div>

    // </View>
    // <Div m="lg">
    //   <Formik
    //     initialValues={{
    //       email: '',
    //       password: '',
    //     }}
    //     onSubmit={onPress}
    //     validationSchema={loginValidator}
    //   >
    //     {(props) => {
    //       const {
    //         values,
    //         status,
    //         touched,
    //         errors,
    //         isSubmitting,
    //         handleChange,
    //         handleBlur,
    //         handleSubmit,
    //       } = props;
    //       console.log('Values:', values);
    //       return (
    //         <>
    //           <Text mt="2xl" color="gray900" fontWeight="bold" fontSize="6xl">
    //             Login
    //           </Text>
    //           <Text color="gray500" mt="sm">
    //             Lorem ipsum dolor sit, amet consectetur.
    //           </Text>
    //           <Text fontSize="md" colo="gray600" mt="2xl">
    //             Email
    //           </Text>
    //           <Input
    //             mt="sm"
    //             py="lg"
    //             placeholder="Email address"
    //             autoCapitalize={false}
    //             value={values.email}
    //             onChangeText={handleChange('email')}
    //             onBlur={handleBlur('email')}
    //           />
    //           <Div h={20}>
    //             <Div position="absolute" top={0} zIndex={1}>
    //               <Text color="red500" fontSize="md" mt="sm">
    //                 {touched.email && errors.email}
    //               </Text>
    //             </Div>
    //           </Div>
    //           <Text fontSize="md" color="gray600" mt="xl">
    //             Password
    //           </Text>
    //           <Input
    //             mt="sm"
    //             py="lg"
    //             placeholder="Password"
    //             secureTextEntry
    //             value={values.password}
    //             onChangeText={handleChange('password')}
    //             onBlur={handleBlur('password')}
    //           />
    //           <Div h={20}>
    //             <Div position="absolute" top={0} zIndex={1}>
    //               <Text color="red500" fontSize="md" mt="sm">
    //                 {touched.password && errors.password}
    //               </Text>
    //             </Div>
    //           </Div>
    //           <Button block py="lg" mt="xl" onPress={handleSubmit}>
    //             Submit
    //           </Button>
    //         </>
    //       );
    //     }}
    //   </Formik>
    // </Div>
  );
};

export default LoginForm;
