import { DataGrid } from "./views/datagrid/index";
import "./styles/main.css";
import { GridColDef } from "./views/datagrid/types";
import { GridInput } from "./components/inputs/GridInput";
import { AutoComplete } from "./components/inputs/AutoComplete";
import { Input } from "./components/ui/input";
import { Routes, Route, Outlet } from "react-router";
import { AppForm } from "./views/form";
import { AppHeader } from "./layout/header";
import { AppSideBar } from "./layout/sidebar";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function SideBarLayout() {
  return (
    <div className="sidebar-layout">
      <AppSideBar />
      <main className="sidebar-layout-main">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  return (
    <>
      {/* <AppHeader /> */}
      <div className="">

        <Routes >
          <Route element={<SideBarLayout />}>

            <Route path="app/form" element={<AppForm />} index />
            <Route path="/" element={<></>} />
          </Route>
        </Routes>

        {/* <AutoComplete /> */}
        {/* <GridInput /> */}
        {/* <DataGrid columns={columns} data={data} selectableRows={true} enableSerial={true} /> */}
      </div>
    </>
  )
}

export default App