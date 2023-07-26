import { useRef } from 'react';
import { Pressable, Button, StyleSheet } from 'react-native';
import { Div, Dropdown, Text } from 'react-native-magnus';

const FilterSortPanel = ({ regions, region, setRegion }) => {
  const dropdownRef = useRef();

  return (
    <Div row py={10} justifyContent="space-between" alignItems="center">
      <Pressable
        style={(({ pressed }) => pressed && styles.pressed, styles.filter)}
        onPress={() => !region && dropdownRef.current?.open()}
      >
        <Text fontWeight="bold" fontSize="xl" my={4}>
          {region ? `Filtering by ${region} region` : 'Filter'}
        </Text>
      </Pressable>
      {region && (
        <Div justifyContent="center">
          <Button title="Clear filter" onPress={() => setRegion('')}></Button>
        </Div>
      )}
      <Dropdown
        ref={dropdownRef}
        title={
          <Text
            mx="xl"
            color="gray900"
            fontWeight="bold"
            fontSize="2xl"
            pb="lg"
          >
            Select region
          </Text>
        }
        mt="md"
        pb="xl"
        showSwipeIndicator={true}
        roundedTop="xl"
      >
        {regions.map((region) => (
          <Dropdown.Option
            key={region.regionName}
            py="lg"
            px="xl"
            block
            onPress={() => setRegion(region.regionName)}
          >
            {region.regionName}
          </Dropdown.Option>
        ))}
      </Dropdown>
    </Div>
  );
};

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
