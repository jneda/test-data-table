import DataTable from "react-data-table-component";
import "./App.css";

// dummy data for testing
const matchings = [
  {
    id: 1,
    customer: "Anthony Houlala",
    stocks: [
      { id: 2, seller: "Pascaline Démonte-Pneu" },
      { id: 42, seller: "Serge-Henri Camus" },
    ],
  },
  {
    id: 2,
    customer: "Pascaline Démonte-Pneu",
    stocks: [
      { id: 1, seller: "Anthony Houlala" },
      { id: 42, seller: "Serge-Henri Camus" },
    ],
  },
];

// sub table component for displaying matching stocks under each request
function SubTable(props) {
  // logging
  console.log("SubTable props");
  console.log(props);

  const matchings = props.data.stocks;
  const columns = [
    { name: "id", selector: (row) => row.id },
    { name: "seller", selector: (row) => row.seller },
  ];
  return <DataTable columns={columns} data={matchings} />;
}

// main table
function App() {
  return (
    <div className="App">
      <DataTable
        columns={[
          { name: "id", selector: (row) => row.id },
          { name: "customer", selector: (row) => row.customer },
        ]}
        data={matchings}
        expandableRows
        expandableRowsComponent={SubTable}
      />
    </div>
  );
}

export default App;
