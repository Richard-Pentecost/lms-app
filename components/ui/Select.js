import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

const data = [
  { label: 'Java', value: 'java' },
  { label: 'JavaScript', value: 'js' },
];
const Select = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [valueSS, setValueSS] = useState('');

  const onChangeSS = (value) => {
    setValueSS(value);
  };

  return <Text>Hello</Text>;
};

export default Select;

const styles = StyleSheet.create({});
