import { StyleSheet } from 'react-native';
import Header from '../ui/Header';
import FarmInfoItem from './FarmInfoItem';
import { Div, Text } from 'react-native-magnus';
import FarmCardDetail from './FarmCardDetail';
import ListItem from './ListItem';

const FarmInformation = ({ farm }) => {
  const {
    contactName,
    contactNumber,
    farmName,
    postcode,
    products,
    region,
    comments,
    accessCodes,
  } = farm;

  // console.log('********');
  // products.map((product) => {
  //   console.log(product.productName);
  // });
  // return (
  //   <View style={styles.container}>
  //     <Header>Farm Information</Header>
  //     <FarmInfoItem label="Farm" icon="address-card-o">
  //       {farmName}
  //     </FarmInfoItem>
  //     <FarmInfoItem label="Postcode" icon="address-card-o">
  //       {postcode}
  //     </FarmInfoItem>
  //     <FarmInfoItem label="Contact" icon="user">
  //       {contactName}
  //     </FarmInfoItem>
  //     <FarmInfoItem label="Contact number" icon="phone-square">
  //       {contactNumber}
  //     </FarmInfoItem>
  //     {products &&
  //       products.map((product) => (
  //         <Text key={product.productName}>{product.productName}</Text>
  //       ))}
  //   </View>
  // );
  console.log(farmName);
  // return (
  //   <Div borderColor="gray500" bg={'white'} rounded="lg" m={10} borderWidth={1}>
  //     <Div p={10}>
  //       <Div pb={10} borderBottomColor="gray500" borderBottomWidth={1}>
  //         <Text color="gray900" fontWeight="bold" fontSize="4xl">
  //           Farm Information
  //         </Text>
  //       </Div>
  //       <Div pt={10}>
  //         <FarmCardDetail icon={'address-card-o'}>{postcode}</FarmCardDetail>
  //         <FarmCardDetail icon={'user'}>{contactName}</FarmCardDetail>
  //         <FarmCardDetail icon={'phone-square'}>{contactNumber}</FarmCardDetail>
  //       </Div>
  //       {products &&
  //         products.map((product) => (
  //           <Text key={product.productName}>{product.productName}</Text>
  //         ))}
  //     </Div>
  //   </Div>
  // );

  return (
    <Div>
      <Div m="lg" p={10} bg="white" shadow="sm" rounded="lg">
        <Text fontWeight="bold" fontSize="4xl" mt="md" mb="lg" color="gray900">
          Farm Information
        </Text>
        <ListItem
          icon="tractor-variant"
          label="Farm Name"
          iconLibrary="MaterialCommunityIcons"
        >
          {farmName}
        </ListItem>
        <ListItem
          icon="address-card-o"
          label="Postcode"
          iconLibrary="FontAwesome"
        >
          {postcode}
        </ListItem>
        <ListItem icon="user" label="Contact Name" iconLibrary="Feather">
          {contactName}
        </ListItem>
        <ListItem icon="phone" label="Contact Number" iconLibrary="Feather">
          {contactNumber}
        </ListItem>
        {region && (
          <ListItem
            icon="location-outline"
            label="Region"
            iconLibrary="Ionicons"
          >
            {region.regionName}
          </ListItem>
        )}
      </Div>
      {(accessCodes || comments) && (
        <Div m="lg" p={10} bg="white" shadow="sm" rounded="lg">
          <Text
            fontWeight="bold"
            fontSize="4xl"
            mt="md"
            mb="lg"
            color="gray900"
          >
            Comments
          </Text>
          {accessCodes && (
            <ListItem icon="unlock" label="Access Codes" iconLibrary="Feather">
              {accessCodes}
            </ListItem>
          )}

          {comments && (
            <ListItem
              icon="comment-text-outline"
              label="Comments"
              iconLibrary="MaterialCommunityIcons"
              bottomBorder={false}
            >
              {comments}
            </ListItem>
          )}
        </Div>
      )}
      <Div m="lg" p={10} bg="white" shadow="sm" rounded="lg">
        <Text fontWeight="bold" fontSize="4xl" mt="md" mb="lg" color="gray900">
          Products
        </Text>
        <>
          {products.map((product, index) => (
            <ListItem
              icon="flask-outline"
              label={`Product ${index + 1}`}
              iconLibrary="Ionicons"
              key={product.productName}
            >
              {product.productName}
            </ListItem>
          ))}
        </>
      </Div>
    </Div>
  );
};

export default FarmInformation;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});
