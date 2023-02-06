import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList.js";
import AddContacts from "./components/AddContacts.js";
import EditContacts from "./components/EditContacts.js";
import Login from "./components/Login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path='/contacts' element={<ContactList />} />
        <Route path='/addContact' element={<AddContacts />} />
        <Route path='/edit/:id' element={<EditContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
