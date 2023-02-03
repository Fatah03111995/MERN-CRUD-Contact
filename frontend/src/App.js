import ContactList from "./components/ContactList.js";
import AddContacts from "./components/AddContacts.js";
import EditContacts from "./components/EditContacts.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/contacts' element={<ContactList />} />
        <Route path='/addContact' element={<AddContacts />} />
        <Route path='/edit/:id' element={<EditContacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
