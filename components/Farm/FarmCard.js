import { Button, Div, Text } from 'react-native-magnus';
import FarmCardDetail from './FarmCardDetail';

const FarmCard = ({
  farmName,
  postcode,
  contactName,
  contactNumber,
  onPress,
}) => (
  <Div
    shadow="sm"
    w="48%"
    borderColor="green500"
    borderWidth={1}
    mb={10}
    rounded="lg"
  >
    <Button block h={120} p="none" bg="white" rounded="lg" onPress={onPress}>
      <Div flex={1} p={10}>
        <Div pb={5} borderBottomColor="gray500" borderBottomWidth={1}>
          <Text fontWeight="bold" fontSize="xl">
            {farmName}
          </Text>
        </Div>
        <Div pt={10}>
          <FarmCardDetail icon={'address-card-o'}>{postcode}</FarmCardDetail>
          <FarmCardDetail icon={'user'}>{contactName}</FarmCardDetail>
          <FarmCardDetail icon={'phone-square'}>{contactNumber}</FarmCardDetail>
        </Div>
      </Div>
    </Button>
  </Div>
);

export default FarmCard;
