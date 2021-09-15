const Table = () => {
  const headers: Array<string> = ["a", "b", "c"];
  const data: Array<string> = ["1", "2", "3"];
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => {
            return <th>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data.map((cell) => {
            return <td>{cell}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
