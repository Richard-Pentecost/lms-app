import { Div, Text } from 'react-native-magnus';

const FilterSortPanel = () => (
  <Div row pb={10} justifyContent="space-between" alignItems="center">
    <Text fontWeight="bold" fontSize="xl">
      Filter
    </Text>
    <Text fontWeight="bold" fonSize="lg">
      Sort by
    </Text>
  </Div>
);

export default FilterSortPanel;
