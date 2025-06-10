import { Link } from "react-router"
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function ContactItem({ stor, deleteContact }) {

  const filteredContacts = stor.search ? stor.contacts.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone}`.toLowerCase().includes(stor.search.toLowerCase()) ) : stor.contacts

  return(
    <div>
      <table className="table">
        <thead>
          <tr className="align-middle text-center fs-5 position-sticky top-0">
            <th className="text-primary" scope="col">icon</th>
            <th className="text-primary" scope="col">Name</th>
            <th className="text-primary" scope="col">Phone/Email</th>
            <th className="text-primary" scope="col">Status</th>
            <th className="text-primary" scope="col">Gender</th>
            <th className="text-primary" scope="col">Edit/Del</th>
          </tr>
        </thead>
        <tbody>
        {filteredContacts.map(contact => (
            <tr key={contact.id} className="align-middle text-center">
            <td scope="row">
              <img className="rounded-circle" src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="" />
            </td>
            <td className="fs-4">{contact.firstName}<br/>{contact.lastName}</td>
            <td className="fs-5">{contact.phone}<br/>{contact.email}</td>
            <td className="fs-5 text-uppercase fw-bold">{contact.status}</td>
            <td className="fs-5 text-uppercase fw-bold">{contact.gender}</td>
            <td>
              <Link to={`/edit-contact/${contact.id}`}><FaRegEdit size={'50px'} color="yellow"/></Link>
              <MdDeleteForever style={{cursor: 'pointer'}} size={'50px'} color="red" onClick={() => deleteContact(contact.id)}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}