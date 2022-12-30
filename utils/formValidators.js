import * as Yup from 'yup';

export const loginValidator = Yup.object().shape({
  email: Yup.string()
    .min(1)
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required'),
});
