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

  return {
    date,
    farmFk: uuid,
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
  };
};
