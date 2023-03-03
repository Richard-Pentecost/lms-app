import { Colours } from '../../constants/colours';
import { Div, Icon, Text } from 'react-native-magnus';

const FarmCardDetail = ({ children, icon, iconLibrary }) => {
  return (
    <Div row pb={5}>
      <Div w="15%">
        <Icon
          name={icon}
          size={16}
          fontFamily={iconLibrary}
          color={Colours.grey100}
        />
      </Div>
      <Div>
        <Text>{children}</Text>
      </Div>
    </Div>
  );
};

export default FarmCardDetail;
