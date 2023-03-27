import { useEffect } from 'react';
import { Div } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import DataForm from '../components/FarmData/DataForm';
import Header from '../components/ui/Header';
import { addData, fetchData } from '../store/actions/dataActions';
import { clearErrors, clearSuccessFlag } from '../store/slices/dataSlice';
import { formatData } from '../utils/formatData';

const AddDataScreen = ({ route, navigation }) => {
  const { farm } = route.params;
  const dispatch = useDispatch();
  const {
    data,
    loading: dataLoading,
    addDataSuccess,
  } = useSelector((state) => state.dataState);

  useEffect(() => {
    !data && dispatch(fetchData(farm.uuid));
  }, [data]);

  const addDataHandler = (newData) => {
    const { uuid } = route.params.farm;
    const dataObj = formatData(newData, uuid);

    const previousData = data
      .filter((d) => d.product === newData.product)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    dispatch(addData({ data: dataObj, previousData }));
  };

  useEffect(() => {
    addDataSuccess && navigation.navigate('Data');

    return () => {
      dispatch(clearSuccessFlag());
      dispatch(clearErrors());
    };
  }, [dispatch, navigation, addDataSuccess]);

  return (
    <Div py={25}>
      {!dataLoading && (
        <>
          <Header>Add Data</Header>
          <DataForm products={farm.products} handleSubmit={addDataHandler} />
        </>
      )}
    </Div>
  );
};

export default AddDataScreen;
