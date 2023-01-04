import * as Yup from 'yup';

export const loginValidator = Yup.object().shape({
  email: Yup.string()
    .min(1)
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required'),
});

export const dataValidator = Yup.object().shape({
  noOfCows: Yup.number()
    .required('Number of cows is required')
    .min(1, 'Number of cows must be greater than 0'),
  quantity: Yup.number()
    .required('Quantity is required')
    .positive('Quantity cannot be a negative number'),
  meterReading: Yup.number()
    .required('The meter reading is required')
    .positive('The meter reading cannot be a negative number'),
  waterUsage: Yup.number()
    .required('The water usage is required')
    .positive('The water usage cannot be a negative number'),
  pumpDial: Yup.number()
    .required('The pump dial is required')
    .positive('The pump dial cannot be a negative number'),
  floatBeforeDelivery: Yup.number()
    .required('The float before delivery is required')
    .positive('The float before delivery cannot be a negative number'),
  targetFeedRate: Yup.number()
    .required('The target feed rate is required')
    .positive('The target feed rate cannot be a negative number'),
  floatAfterDelivery: Yup.number()
    .required('The float after delivery is required')
    .positive('The float after delivery cannot be a negative number')
    .min(
      Yup.ref('floatBeforeDelivery'),
      'The float after delivery cannot be less than the float before delivery'
    ),
});
