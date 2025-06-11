import './ContactItem.scss'
import { Link } from "react-router"
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export default function ContactItem({ stor, deleteContact }) {

  const filteredContacts = stor.search ? stor.contacts.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone}`.toLowerCase().includes(stor.search.toLowerCase()) ) : stor.contacts

  return(
    <div className="contactItem-container">
      <table className="table">
        <thead>
          <tr className="">
            <th className="" scope="col">icon</th>
            <th className="" scope="col">Name</th>
            <th className="" scope="col">Phone/Email</th>
            <th className="" scope="col">Status</th>
            <th className="" scope="col">Gender</th>
            <th className="" scope="col">Edit/Del</th>
          </tr>
        </thead>
        <tbody>
        {filteredContacts.map(contact => (
            <tr key={contact.id} className="">
            <td scope="row">
              <img className="rounded-circle" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="" />
            </td>
            <td className="">{contact.firstName}<br/>{contact.lastName}</td>
            <td className="">{contact.phone}<br/>{contact.email}</td>
            <td className="">{contact.status}</td>
            <td className="">{contact.gender}</td>
            <td>
              <Link to={`/edit-contact/${contact.id}`}>
                <FaRegEdit size="30px" className="edit-icon" />
              </Link>
              <MdDeleteForever
                className="delete-icon"
                size="30px"
                onClick={() => deleteContact(contact.id)}
                style={{ cursor: 'pointer' }}
              />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}