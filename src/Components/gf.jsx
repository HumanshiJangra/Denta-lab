import React, { useState } from 'react';

const TableData = ({ tableBodyData }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(17).fill('O1'));

  const handleSelectChange = (index, event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <table className='table-wrap w-full'>
      <thead>
        <tr>
          {[...Array(17).keys()].map((colIndex) => (
            <th className='border border-slate-300' key={colIndex}>
              <select value={selectedOptions[colIndex]} onChange={(event) => handleSelectChange(colIndex, event)}>
                <option value="Option 1">O1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                {/* Add more options if needed */}
              </select>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBodyData.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {rowData.map((cellData, colIndex) => (
              <td className='border border-slate-300' key={colIndex}>{cellData}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
