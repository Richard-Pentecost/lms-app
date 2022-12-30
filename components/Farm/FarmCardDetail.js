import { FontAwesome } from '@expo/vector-icons';
import { Colours } from '../../constants/colours';
import { Div, Text } from 'react-native-magnus';

const FarmCardDetail = ({ children, icon }) => {
  return (
    <Div row pb={5}>
      <Div w="15%">
        <FontAwesome name={icon} size={16} color={Colours.grey100} />
      </Div>
      <Div>
        <Text>{children}</Text>
      </Div>
    </Div>
  );
};

export default FarmCardDetail;
