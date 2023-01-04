import { useFormik } from 'formik';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Button, Div, Input, Text } from 'react-native-magnus';
import { dataValidator } from '../../utils/formValidators';
import InputField from '../Farm/InputField';

const DataForm = () => {
  const formik = useFormik({
    initialValues: {
      noOfCows: '',
      quantity: '',
      meterReading: '',
      waterUsage: '',
      pumpDial: '',
      floatBeforeDelivery: '',
      targetFeedRate: '',
      floatAfterDelivery: '',
      comments: '',
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: dataValidator,
  });

  // useEffect(() => {
  //   console.log(formik.touched.noOfCows);
  //   console.log(formik.touched.quantity);
  //   console.log(formik.touched.meterReading);
  //   console.log(formik.touched.waterUsage);
  //   console.log(formik.touched.pumpDial);
  //   console.log(formik.touched.floatBeforeDelivery);
  //   console.log(formik.touched.targetFeedRate);
  //   console.log(formik.touched.floatAfterDelivery);
  // }, [formik]);

  return (
    <ScrollView>
      <Div px={25}>
        <InputField
          label="Number of cows"
          keyboardType="number-pad"
          value={formik.values.noOfCows}
          field="noOfCows"
          errors={formik.errors.noOfCows}
          touched={formik.touched.noOfCows}
          formik={formik}
        />
        <InputField
          label="Quantity"
          keyboardType="number-pad"
          value={formik.values.quantity}
          field="quantity"
          errors={formik.errors.quantity}
          touched={formik.touched.quantity}
          formik={formik}
        />
        <InputField
          label="Meter reading"
          keyboardType="number-pad"
          value={formik.values.meterReading}
          field="meterReading"
          errors={formik.errors.meterReading}
          touched={formik.touched.meterReading}
          formik={formik}
        />
        <InputField
          label="Water usage"
          keyboardType="number-pad"
          value={formik.values.waterUsage}
          field="waterUsage"
          errors={formik.errors.waterUsage}
          touched={formik.touched.waterUsage}
          formik={formik}
        />
        <InputField
          label="Pump dial"
          keyboardType="number-pad"
          value={formik.values.pumpDial}
          field="pumpDial"
          errors={formik.errors.pumpDial}
          touched={formik.touched.pumpDial}
          formik={formik}
        />
        <InputField
          label="Float before delivery"
          keyboardType="number-pad"
          value={formik.values.floatBeforeDelivery}
          field="floatBeforeDelivery"
          errors={formik.errors.floatBeforeDelivery}
          touched={formik.touched.floatBeforeDelivery}
          formik={formik}
        />
        <InputField
          label="Target feed rate"
          keyboardType="number-pad"
          value={formik.values.targetFeedRate}
          field="targetFeedRate"
          errors={formik.errors.targetFeedRate}
          touched={formik.touched.targetFeedRate}
          formik={formik}
        />
        <InputField
          label="Float after delivery"
          keyboardType="number-pad"
          value={formik.values.floatAfterDelivery}
          field="floatAfterDelivery"
          errors={formik.errors.floatAfterDelivery}
          touched={formik.touched.floatAfterDelivery}
          formik={formik}
        />
        <Button
          block
          py="lg"
          mt="xl"
          bg="green700"
          onPress={formik.handleSubmit}
        >
          Add data
        </Button>
      </Div>
    </ScrollView>
  );
};

export default DataForm;
