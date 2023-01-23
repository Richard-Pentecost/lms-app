import dayjs from 'dayjs';
import { ScrollView, StyleSheet } from 'react-native';
import { Div } from 'react-native-magnus';
import { Row, Table } from 'react-native-table-component';
import {
  columnWidths,
  dataTableHeadings,
} from '../../constants/dataTableConstants';

const DataTable = ({ data }) => {
  const headings = dataTableHeadings;

  const tableBody = data.map((rowData) => {
    const objectKeys = Object.keys(rowData).filter(
      (key) => key !== 'uuid' && key !== 'farmFk'
    );
    const dataArr = objectKeys.map((value) => {
      if (value.toLowerCase().includes('date')) {
        return dayjs(rowData[value]).format('DD MMM YY');
      }
      return rowData[value];
    });

    return (
      <Row
        data={dataArr}
        widthArr={columnWidths}
        textStyle={styles.cellText}
        style={styles.rows}
      ></Row>
    );
  });

  return (
    <Div h="100%">
      <ScrollView horizontal={true} style={styles.container}>
        <Table borderStyle={styles.tableBorder}>
          <Row
            data={headings}
            style={styles.heading}
            textStyle={styles.headingText}
            widthArr={columnWidths}
          />
          {tableBody}
        </Table>
      </ScrollView>
    </Div>
  );
};

export default DataTable;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  tableBorder: {
    // borderWidth: 1,
    // borderColor: 'black',
  },
  heading: {
    height: 30,
  },
  headingText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rows: {
    height: 30,
  },
  cellText: {
    textAlign: 'center',
  },
});
