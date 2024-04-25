import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
  
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1"); // Sheet name
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
    FileSaver.saveAs(blob, fileName + '.xlsx'); // File name with extension
  };

 export default exportToExcel