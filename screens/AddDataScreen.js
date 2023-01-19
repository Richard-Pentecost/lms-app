import { useEffect } from 'react';
import { Div } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import DataForm from '../components/FarmData/DataForm';
import Header from '../components/ui/Header';
import { addData } from '../store/actions/dataActions';
import { fetchProducts } from '../store/actions/productActions';
import { formatData } from '../utils/formatData';

const AddDataScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productState);

  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  const addDataHandler = (data) => {
    const { uuid } = route.params.farm;
    const dataObj = formatData(data, uuid);
    dispatch(addData(dataObj));
    // dispatch(addData({ farmFk: uuid, ...data}))
  };

  return (
    <Div py={25}>
      <Header>Add Data</Header>
      {products && (
        <DataForm products={products} handleSubmit={addDataHandler} />
      )}
    </Div>
  );
};

export default AddDataScreen;
