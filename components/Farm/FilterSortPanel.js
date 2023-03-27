import { Pressable, StyleSheet } from 'react-native';
import { Div, Text } from 'react-native-magnus';

const FilterSortPanel = () => (
  <Div row py={10} justifyContent="space-between" alignItems="center">
    <Pressable
      style={(({ pressed }) => pressed && styles.pressed, styles.filter)}
      onPress={() => console.log('******')}
    >
      <Text fontWeight="bold" fontSize="xl">
        Filter
      </Text>
    </Pressable>
    {/* <Text fontWeight="bold" fonSize="lg">
      Sort by
    </Text> */}
  </Div>
);

export default FilterSortPanel;

const styles = StyleSheet.create({
  filter: {
    paddingVertical: 5,
    paddingRight: 10,
  },
  pressed: {
    opacity: 0.25,
  },
});
