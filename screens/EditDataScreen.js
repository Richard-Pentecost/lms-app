import { Div, Text } from 'react-native-magnus';
import DataForm from '../components/FarmData/DataForm';
import Header from '../components/ui/Header';

const EditDataScreen = ({ route }) => {
  const { farm, data } = route.params;

  const updateDataHandler = () => {
    console.log('update data');
  };

  return (
    <Div py={25}>
      <Header>Edit Data</Header>
      <DataForm
        products={farm.products}
        handleSubmit={updateDataHandler}
        data={data}
      />
    </Div>
  );
};

export default EditDataScreen;
