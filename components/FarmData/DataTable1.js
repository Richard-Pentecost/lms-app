import dayjs from 'dayjs';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { dataTableHeadings } from '../../constants/dataTableConstants';

const DataTable1 = ({ data }) => {
  const tableBody = data.map((rowData, index) => {
    const objectKeys = Object.keys(rowData).filter(
      (key) => key !== 'uuid' && key !== 'farmFk'
    );

    return (
      <DataTable.Row key={index}>
        {objectKeys.map((key, i) => {
          if (key.toLowerCase().includes('date')) {
            return (
              <DataTable.Cell key={`${index}-${i}`} style={styles.cell}>
                {dayjs(rowData[key]).format('DD-MMM-YY')}
              </DataTable.Cell>
            );
          }

          const cellStyling =
            key.toLowerCase() === 'comments' ? styles.commentCell : styles.cell;
          return (
            <DataTable.Cell key={`${index}-${i}`} style={cellStyling}>
              {rowData[key]}
            </DataTable.Cell>
          );
        })}
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
    <ScrollView horizontal={true} style={styles.container}>
      <View>
        <DataTable style={styles.table}>
          <DataTable.Header>{tableHeadings}</DataTable.Header>
          {tableBody}
        </DataTable>
      </View>
    </ScrollView>
  );
};
export default DataTable1;

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
