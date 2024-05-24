import React from "react";

const TableNew = ({ tableData, onTableChange, isPrintMode }) => {
  const options = [
    { value: "", label: "" },
    { value: "k", label: "K" },
    { value: "b", label: "B" },
    { value: "kv", label: "KV" },
    { value: "bv", label: "BV" },
    { value: "km", label: "KM" },
    { value: "bm", label: "BM" },
    { value: "v", label: "V" },
    { value: "ik", label: "IK" },
    { value: "ig", label: "IG" },
    { value: "t", label: "T" },
    { value: "tv", label: "TV" },
    { value: "tm", label: "TM" },
    { value: "mg", label: "MG" },
    { value: "CD", label: "CD" },
    { value: "IS", label: "IS" },
    { value: "TK", label: "TK" },
    { value: "H", label: "H" },
    { value: "E", label: "E" },
    { value: "o", label: "O" },
    { value: "ST", label: "ST" },
    { value: "sch", label: "Sch" },
  ];

  const renderSelect = (type, index) => (
    <select
      value={tableData[type][index]}
      onChange={(e) => onTableChange(type, index, e.target.value)}
      disabled={isPrintMode}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return (
    <div>
      <table className="my-[50px] custom-table w-full ">
        <tbody>
        <tr>
            <td></td>
            {Array.from({ length: 16 }).map((_, index) => (
              <td key={`start-${index}`}></td>
            ))}
          </tr>
          <tr className="ctm_ok_wrp">
            <td>OK</td>
            {Array.from({ length: 16 }).map((_, index) => (
              <td key={index}>{renderSelect("ok", index)}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            {[18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28].map((number) => (
              <td key={number}>{number}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            {[48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38].map((number) => (
              <td key={number}>{number}</td>
            ))}
          </tr>
          <tr className="ctm_uk_wrp">
            <td>UK</td>
            {Array.from({ length: 16 }).map((_, index) => (
              <td key={index}>{renderSelect("uk", index)}</td>
            ))}
          </tr>
          <tr>
            <td></td>
            {Array.from({ length: 16 }).map((_, index) => (
              <td key={`end-${index}`}></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableNew;
