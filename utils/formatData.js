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
    noOfCows: +noOfCows,
    product,
    quantity: +quantity,
    meterReading: +meterReading,
    waterUsage: +waterUsage,
    pumpDial: +pumpDial,
    floatBeforeDelivery: +floatAfterDelivery,
    targetFeedRate: +targetFeedRate,
    floatAfterDelivery: +floatAfterDelivery,
    comments,
  };
};
