import { useEffect } from 'react';
import { Div } from 'react-native-magnus';
import { useDispatch, useSelector } from 'react-redux';
import DataForm from '../components/FarmData/DataForm';
import Header from '../components/ui/Header';
import { fetchProducts } from '../store/actions/productActions';
// import { fetchProducts } from '../store/slices/productSlice';

const AddDataScreen = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productState);

  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  return (
    <Div py={25}>
      <Header>Add Data</Header>
      {products && <DataForm products={products} />}
    </Div>
  );
};

export default AddDataScreen;
