import { DataGrid } from "./views/datagrid/index";
import "./styles/main.css";
import { GridColDef } from "./views/datagrid/types";
import { GridInput } from "./components/inputs/GridInput";
import { AutoComplete } from "./components/inputs/AutoComplete";



function App() {
  const columns: Array<GridColDef> = [
    {
      accessor: "user",
      label: "User",
      width: 100,
    },

    {
      accessor: "creation",
      label: "Creation",
      type: "dateTime",
      width: 150,
      renderHeader: () => (
        <strong>Creation 📅</strong>
      )
    },
    {
      accessor: "balance",
      label: "Balance",
      type: "currency",
      width: 100,
    },
    {
      accessor: "email",
      label: "Email",
      width: 100,
    },
    {
      accessor: "first_name",
      label: "First Name",
      width: 100,
    },

    {
      accessor: "last_name",
      label: "Last Name",
      width: 100,
    },
    {
      accessor: "full_name",
      label: "Full Name",
      width: 100,

    },
    {
      accessor: "username",
      label: "Username",
      width: 100,
    }
    , {
      accessor: "phone_number",
      label: "Phone Number",
      width: 100,
    }
    , {
      accessor: "is_active",
      label: "Is Active",
      type: "boolean",
      width: 100,
    }
    , {
      accessor: "auth_type",
      label: "Auth Type",
      width: 100,
    }
  ]
  const data = [
    {
      user: 1,
      email: "johndoe1@example.com",
      first_name: "John",
      last_name: "Doe",
      full_name: "John Doe",
      username: "johndoe1",
      phone_number: "+1234567890",
      is_active: true,
      auth_type: "email",
    },
    {
      user: 1,
      email: "johndoe1@example.com",
      first_name: "John",
      last_name: "Doe",
      creation: Date(),
      full_name: "John Doe",
      username: "johndoe1",
      phone_number: "+1234567890",
      is_active: true,
      auth_type: "email",
    },
    {
      user: 2,
      email: "janedoe2@example.com",
      first_name: "Jane",
      last_name: "Doe",
      full_name: "Jane Doe",
      username: "janedoe2",
      phone_number: "+1234567891",
      is_active: false,
      auth_type: "google",
    },
    {
      user: 3,
      email: "alice3@example.com",
      first_name: "Alice",
      last_name: "Smith",
      full_name: "Alice Smith",
      username: "alice3",
      phone_number: "+1234567892",
      is_active: true,
      auth_type: "facebook",
    },
    {
      user: 4,
      email: "bob4@example.com",
      first_name: "Bob",
      last_name: "Brown",
      full_name: "Bob Brown",
      username: "bob4",
      phone_number: "+1234567893",
      is_active: false,
      auth_type: "email",
    },
    {
      user: 5,
      email: "carol5@example.com",
      first_name: "Carol",
      last_name: "Taylor",
      full_name: "Carol Taylor",
      username: "carol5",
      phone_number: "+1234567894",
      is_active: true,
      auth_type: "google",
    },
    {
      user: 6,
      email: "dave6@example.com",
      first_name: "Dave",
      last_name: "Wilson",
      full_name: "Dave Wilson",
      username: "dave6",
      phone_number: "+1234567895",
      is_active: false,
      auth_type: "facebook",
    },
  ];


  return (
    <div className="app-container">
      <br />
      <br />
      <br />
      <br />

      <AutoComplete />
      {/* <GridInput /> */}
      {/* <DataGrid columns={columns} data={data} selectableRows={true} enableSerial={true} /> */}
    </div>
  )
}

export default App
