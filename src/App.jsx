import DataTable from "react-data-table-component";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Anthony Houlala",
    friends: [
      { id: 2, name: "Pascaline Démonte-Pneu" },
      { id: 42, name: "Serge-Henri Camus" },
    ],
  },
  {
    id: 2,
    name: "Pascaline Démonte-Pneu",
    friends: [
      { id: 1, name: "Anthony Houlala" },
      { id: 42, name: "Serge-Henri Camus" },
    ],
  },
];

function SubTable(props) {
  console.log("SubTable props");
  console.log(props);
  const friends = props.data.friends;
  const columns = [
    { name: "id", selector: (row) => row.id },
    { name: "name", selector: (row) => row.name },
  ];
  return <DataTable columns={columns} data={friends} />;
}

function App() {
  return (
    <div className="App">
      <DataTable
        columns={[
          { name: "id", selector: (row) => row.id },
          { name: "name", selector: (row) => row.name },
        ]}
        data={data}
        expandableRows
        expandableRowsComponent={SubTable}
      />
    </div>
  );
}

export default App;
