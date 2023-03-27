import { createRef, useEffect, useLayoutEffect, useState } from 'react';
import { Div } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import FarmList from '../components/FarmList';
import { fetchActiveFarms } from '../store/actions/farmActions';
import FilterSortPanel from '../components/Farm/FilterSortPanel';
import SearchBar from '../components/ui/SearchBar';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const { farms } = useSelector((state) => state.farmState);
  const [filteredFarms, setFilteredFarms] = useState();

  const selectRef = createRef();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLargeTitle: true,
  //     headerTransparent: false,
  //     // headerSearchBarOptions: {
  //     //   headerTransparent: false,
  //     //   placeholder: 'Search by farm name...',
  //     //   onChangeText: () => console.log('text change'),
  //     // },
  //   });
  // }, [navigation]);
  useEffect(() => {
    if (!farms) {
      dispatch(fetchActiveFarms());
    }
    setFilteredFarms(farms);
  }, [dispatch, farms]);

  const searchFilterFunction = (searchTerm) => {
    if (searchTerm) {
      const filterFarms = farms.filter((farm) =>
        farm.farmName.toUpperCase().includes(searchTerm.toUpperCase())
      );
      setFilteredFarms(filterFarms);
    } else {
      setFilteredFarms(farms);
    }
  };

  return (
    <Div px={25}>
      <SearchBar searchFilterFunction={searchFilterFunction} />
      <FilterSortPanel />
      {farms && <FarmList farms={filteredFarms} />}
    </Div>
  );
};

export default HomeScreen;
