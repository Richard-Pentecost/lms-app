import { useEffect } from 'react';
import { Div, Text } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';

import Table from '../components/FarmData/Table';
import Header from '../components/ui/Header';
import { fetchData } from '../store/actions/dataActions';

const DataScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.dataState);
  const { farm } = route.params;

  useEffect(() => {
    dispatch(fetchData(farm.uuid));
  }, []);

  return (
    <Div py={25}>
      <Header>Data</Header>
      {!loading && (
        <Div px={10} mt={25}>
          {data?.length > 0 && !loading ? (
            <Table data={data} farm={farm} />
          ) : (
            <Div alignItems="center" pt={50}>
              <Text fontWeight="bold" fontSize="xl">
                No data found
              </Text>
            </Div>
          )}
        </Div>
      )}
    </Div>
  );
};

export default DataScreen;
