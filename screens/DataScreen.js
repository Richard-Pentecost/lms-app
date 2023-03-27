import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { Div, Text } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import EditDataModal from '../components/FarmData/EditDataModal';

import Table from '../components/FarmData/Table';
import Header from '../components/ui/Header';
import { fetchData } from '../store/actions/dataActions';

const DataScreen = ({ route }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dataForEditing, setDataForEditing] = useState();
  const [previousData, setPreviousData] = useState();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.dataState);
  const { farm } = route.params;

  const openModal = (data, previousData) => {
    setDataForEditing(data);
    setPreviousData(previousData);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    dispatch(fetchData(farm.uuid));
  }, []);

  return (
    <Div py={25}>
      <EditDataModal
        farm={farm}
        data={dataForEditing}
        previousData={previousData}
        isVisible={isVisible}
        closeModal={closeModal}
      />
      <Header>Data</Header>
      {!loading && (
        <Div px={10} mt={25}>
          {data?.length > 0 && !loading ? (
            <Table data={data} openModal={openModal} />
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
