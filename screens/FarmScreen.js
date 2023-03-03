import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FarmInformation from '../components/Farm/FarmInformation';
import { fetchData } from '../store/actions/dataActions';
import { fetchProducts } from '../store/actions/productActions';

const FarmScreen = ({ route, navigation }) => {
  const { farm } = route.params;
  const dispatch = useDispatch();

  // useEffect(() => {

  //   dispatch(fetchProducts());
  //   dispatch(fetchData(farm.uuid));
  // }, [dispatch, farm]);

  return <FarmInformation farm={farm} />;
};

export default FarmScreen;
