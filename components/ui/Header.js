import { StyleSheet, Text, View } from 'react-native';

const Header = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
