import { useEffect } from 'react';
import { Button, Div, Icon, Modal } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import DataForm from './DataForm';
import Header from '../ui/Header';
import { fetchData, updateData } from '../../store/actions/dataActions';
import { clearErrors, clearSuccessFlag } from '../../store/slices/dataSlice';
import { formatData } from '../../utils/formatData';

const EditDataModal = ({ farm, data, previousData, isVisible, closeModal }) => {
  const dispatch = useDispatch();
  const { addDataSuccess } = useSelector((state) => state.dataState);

  const updateDataHandler = (newData) => {
    const dataObj = formatData(newData, farm.uuid);
    const dataId = data.uuid;

    dispatch(updateData({ data: dataObj, dataId, previousData }));
  };

  useEffect(() => {
    dispatch(fetchData(farm.uuid));
    closeModal();

    return () => {
      dispatch(clearErrors());
      dispatch(clearSuccessFlag());
    };
  }, [addDataSuccess]);

  return (
    <Modal isVisible={isVisible}>
      <Div py={25}>
        <Button
          bg="gray400"
          h={35}
          w={35}
          position="absolute"
          top={10}
          right={20}
          onPress={closeModal}
          rounded="circle"
          zIndex={1}
        >
          <Icon color="black900" name="close" h={17} w={15} />
        </Button>
        <Header>Edit Data</Header>
        <DataForm
          products={farm.products}
          handleSubmit={updateDataHandler}
          data={data}
        />
      </Div>
    </Modal>
  );
};

export default EditDataModal;
