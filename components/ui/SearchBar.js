import { Div, Icon, Input } from 'react-native-magnus';

const SearchBar = () => {
  return (
    <Div my={20}>
      <Input
        py={15}
        px={25}
        bg="white"
        rounded={30}
        placeholder="Search for farms"
        borderColor="transparent"
        prefix={<Icon name="search" color="gray900" fontFamily="Feather" />}
      />
    </Div>
  );
};

export default SearchBar;
