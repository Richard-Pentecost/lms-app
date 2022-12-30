import { StyleSheet, Text, View } from 'react-native';
import Header from '../ui/Header';
import FarmInfoItem from './FarmInfoItem';

const FarmInformation = ({ farm }) => {
  const {
    contactName,
    contactNumber,
    farmName,
    postcode,
    products,
    region,
    notes,
    comments,
    accessCodes,
  } = farm;

  // console.log('********');
  // products.map((product) => {
  //   console.log(product.productName);
  // });
  return (
    <View style={styles.container}>
      <Header>Farm Information</Header>
      <FarmInfoItem label="Farm" icon="address-card-o">
        {farmName}
      </FarmInfoItem>
      <FarmInfoItem label="Postcode" icon="address-card-o">
        {postcode}
      </FarmInfoItem>
      <FarmInfoItem label="Contact" icon="user">
        {contactName}
      </FarmInfoItem>
      <FarmInfoItem label="Contact number" icon="phone-square">
        {contactNumber}
      </FarmInfoItem>
      {products &&
        products.map((product) => (
          <Text key={product.productName}>{product.productName}</Text>
        ))}
    </View>
  );
};

export default FarmInformation;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
