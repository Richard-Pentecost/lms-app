import dayjs from 'dayjs';

export const formatData = (data, uuid) => {
  const {
    date,
    noOfCows,
    product,
    quantity,
    meterReading,
    waterUsage,
    pumpDial,
    floatBeforeDelivery,
    targetFeedRate,
    floatAfterDelivery,
    comments,
  } = data;

  console.log(dayjs().endOf('day'));
  console.log(dayjs(date).endOf('day'));
  return {
    date,
    farmFk: uuid,
    noOfCows: +noOfCows,
    product,
    quantity: +quantity,
    meterReading: +meterReading,
    waterUsage: +waterUsage,
    pumpDial: +pumpDial,
    floatBeforeDelivery: +floatBeforeDelivery,
    targetFeedRate: +targetFeedRate,
    floatAfterDelivery: +floatAfterDelivery,
    comments,
  };
};
