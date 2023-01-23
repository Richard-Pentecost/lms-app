import { useEffect } from 'react';
import { Div, Text } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';

import DataTable from '../components/FarmData/DataTable';
import DataTable1 from '../components/FarmData/DataTable1';
import { fetchData } from '../store/actions/dataActions';

const DataScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.dataState);

  useEffect(() => {
    dispatch(fetchData(route.params.farm.uuid));
  }, []);

  return (
    <Div p={10}>
      <DataTable1 data={data} />
      {/* {data.length > 0 ? (
        <DataTable1 data={data} />
      ) : (
        <Text>No data found</Text>
      )} */}
    </Div>
  );
};

export default DataScreen;
