import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import ContactList from "./pages/ContactList/ContactList";
import AddContact from "./pages/AddContact/AddContact";
import EditContact from "./pages/EditContact/EditContact";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import ContactStatuss from "./pages/ContactStatuss/ContactStatuss";
import AddContactStatus from "./pages/AddContactStatus/AddContactStatus";
import EditContactStatus from "./pages/EditContactStatus/EditContactStatus";

function App() {
  
return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contact-statuss" element={<ContactStatuss />} />
          <Route path="/contact-statuss/add-contact-status" element={<AddContactStatus />} />
          <Route path="/contact-statuss/edit-contact-status/:status" element={<EditContactStatus />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App
