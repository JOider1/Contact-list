import ContactItem from "../../components/ContactItem/ContactItem.jsx"
import Sidebar from "../../Components/Sidebar/Sidebar.jsx"

export default function ContactList({ stor, deleteContact }) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar stor={stor}/>
                </div>
                <div className="col-9">
                    <ContactItem stor={stor} deleteContact={deleteContact}/>
                </div>
            </div>
        </div>
    )
}
