import { useEffect } from 'react';
import { Div, Text } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/actions/dataActions';

const DataScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dataState);

  useEffect(() => {
    if (!data) {
      dispatch(fetchData(route.params.farm.uuid));
    }
  }, [dispatch, data]);

  return (
    <Div>
      <Text>This is the data screen</Text>
    </Div>
  );
};

export default DataScreen;
