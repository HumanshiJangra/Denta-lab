import PropTypes from "prop-types";

const TableNew = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <table className="table-auto w-full mt-8">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Property</th>
          <th className="px-4 py-2 border">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{row.property}</td>
            <td className="border px-4 py-2">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableNew.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableNew;
