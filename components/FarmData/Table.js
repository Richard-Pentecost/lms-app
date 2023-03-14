import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-magnus';
import { DataTable } from 'react-native-paper';
import { dataTableHeadings } from '../../constants/dataTableConstants';

const Table = ({ data, farm }) => {
  const navigation = useNavigation();

  const tableBody = data.map((rowData, index) => {
    const objectKeys = Object.keys(rowData).filter(
      (key) => key !== 'uuid' && key !== 'farmFk'
    );

    onPressHandler = () => {
      navigation.navigate('Edit Data', { farm, data: rowData });
    };

    return (
      <DataTable.Row key={index}>
        <Button block bg="white" p="none" onPress={onPressHandler}>
          {objectKeys.map((key, i) => {
            if (key.toLowerCase().includes('date')) {
              return (
                <DataTable.Cell key={`${index}-${i}`} style={styles.cell}>
                  {dayjs(rowData[key]).format('DD-MMM-YY')}
                </DataTable.Cell>
              );
            }

            const cellStyling =
              key.toLowerCase() === 'comments'
                ? styles.commentCell
                : styles.cell;
            return (
              <DataTable.Cell key={`${index}-${i}`} style={cellStyling}>
                {rowData[key]}
              </DataTable.Cell>
            );
          })}
        </Button>
      </DataTable.Row>
    );
  });

  const tableHeadings = dataTableHeadings.map((heading) => {
    const cellStyling =
      heading.toLowerCase() === 'comments' ? styles.commentCell : styles.cell;

    return (
      <DataTable.Title style={cellStyling} key={heading}>
        {heading}
      </DataTable.Title>
    );
  });

  return (
    <ScrollView horizontal style={styles.container}>
      <View>
        <DataTable style={styles.table}>
          <DataTable.Header>{tableHeadings}</DataTable.Header>
          {tableBody}
        </DataTable>
      </View>
    </ScrollView>
  );
};
export default Table;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  table: {
    backgroundColor: 'white',
  },
  cell: {
    width: 80,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  commentCell: {
    width: 200,
    // borderWidth: 1,
    justifyContent: 'center',
  },
});
