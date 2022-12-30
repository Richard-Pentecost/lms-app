import FarmInformation from '../components/Farm/FarmInformation';

const FarmScreen = ({ route, navigation }) => {
  const { farm } = route.params;

  return <FarmInformation farm={farm} />;
};

export default FarmScreen;
