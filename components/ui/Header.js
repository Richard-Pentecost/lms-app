import { Div, Text } from 'react-native-magnus';

const Header = ({ children }) => {
  return (
    <Div px={25}>
      <Text color="gray900" fontWeight="bold" fontSize="4xl">
        {children}
      </Text>
    </Div>
  );
};

export default Header;
