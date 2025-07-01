import ContactItem from "../../Components/ContactItem/ContactItem.jsx"
import Sidebar from "../../Components/Sidebar/Sidebar.jsx"

export default function ContactList() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Sidebar/>
                </div>
                <div className="col-9">
                    <ContactItem/>
                </div>
            </div>
        </div>
    )
}