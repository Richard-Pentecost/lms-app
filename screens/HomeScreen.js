import { useEffect } from 'react';
import { Div } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import FarmList from '../components/FarmList';
import SearchBar from '../components/ui/SearchBar';
import { fetchActiveFarms } from '../store/actions/farmActions';
import FilterSortPanel from '../components/Farm/FilterSortPanel';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { farms } = useSelector((state) => state.farmState);

  useEffect(() => {
    if (!farms) {
      dispatch(fetchActiveFarms());
    }
  }, [dispatch, farms]);

  return (
    <Div px={25}>
      <SearchBar />
      <FilterSortPanel />
      {farms && <FarmList farms={farms} />}
    </Div>
  );
};

export default HomeScreen;
