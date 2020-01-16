import React from 'react';
import { ExportCSV } from './export-csv';

export class XlsxExportSample extends React.Component<> {
  sampleData=[....];
  render() {
    const customExcelHeaderUI = ['No', '필드1', '필드2', '필드3'];
    const customExcel = [];
    const customExcelRowsUI = (data, index) => {
      return [index + 1, data.field1, data.field2, data.field3];
    };
    
    customExcel.push(customExcelHeaderUI);
    sampleData.map((data, index) => customExcel.push(customExcelRowsUI(data, index)));
    return (
      <ExportCSV csvData={customExcel} fileName={'샘플'}/>
    );
  }
}
