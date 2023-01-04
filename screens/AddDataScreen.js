import { Div } from 'react-native-magnus';
import DataForm from '../components/FarmData/DataForm';
import Header from '../components/ui/Header';

const AddDataScreen = () => {
  return (
    <Div py={25}>
      <Header>Add Data</Header>
      <DataForm />
    </Div>
  );
};

export default AddDataScreen;
