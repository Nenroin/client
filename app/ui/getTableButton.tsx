'use client';

import * as XLSX from "xlsx";

interface DownloadTableButtonProps {
    data: { [key: string]: string | number }[];
    columns: string[];
    button_text: string;
    fileName: string;
}

export default function DownloadTableButton({ data, columns, button_text, fileName = "Table.xlsx" }: DownloadTableButtonProps) {
    const handleDownload = () => {
        const sheetData = data.map(row => {
            const formattedRow: { [key: string]: string | number } = {};
            columns.forEach((col) => {
                formattedRow[col] = row[col] ?? "";
            });
            return formattedRow;
        });

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(sheetData);

        XLSX.utils.book_append_sheet(workbook, worksheet, "Данные");
        XLSX.writeFile(workbook, fileName);
    };

    return (
        <button
            onClick={handleDownload}
            className="border rounded px-6 py-2 bg-blue-50 hover:bg-blue-100 text-gray-600"
        >
            {button_text}
        </button>
    );
}
