import React from 'react';
import { Button } from 'reactstrap';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Moment from 'moment';

export interface IExportCSVProps {
    csvData;
    fileName;
}

export const ExportCSV = (props: IExportCSVProps) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const { csvData, fileName } = props;

    const exportToCSV = event => {
        // console.log(event);
        const ISODate = Moment().format('YYYYMMDDhhmmss');

        // 1.workbook 생성
        const workbook = XLSX.utils.book_new();
        // 2.worksheet 생성
        const newWorksheet = XLSX.utils.json_to_sheet(csvData);
        // 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.
        XLSX.utils.book_append_sheet(workbook, newWorksheet, fileName);
        // 4. 파일 저장
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, ISODate + '_' + fileName + fileExtension);
    };

    return (
        <Button variant="warning" onClick={ exportToCSV }>Excel Export</Button>
    );
};
