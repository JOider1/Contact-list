import './ContactItem.scss';
import { Link } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, toggleFavorite } from '../../redux/actions';
import { useState } from 'react';
import ConfirmModal from '../DelItem/DelItem';
import ContactInfoModal from '../ContactInfo/ContactInfo';


export default function ContactItem() {
  const contacts = useSelector(state => state.contacts);
  const searchTerm = useSelector(state => state.searchTerm);
  const filter = useSelector(state => state.filter);
  const sortOrder = useSelector(state => state.sortOrder || 'asc');
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContactName, setSelectedContactName] = useState('');

  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSortByName = () => {
    dispatch({
      type: 'SET_SORT_ORDER',
      payload: sortOrder === 'asc' ? 'desc' : 'asc'
    });
  };

  const handleDeleteClick = (contact) => {
    setSelectedContactId(contact.id);
    setSelectedContactName(`${contact.firstName} ${contact.lastName}`);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(selectedContactId));
    setModalOpen(false);
  };

  const cancelDelete = () => {
    setModalOpen(false);
    setSelectedContactId(null);
  };

  const openContactInfo = (contact) => {
    setSelectedContact(contact);
    setInfoModalOpen(true);
  };

  const closeContactInfo = () => {
    setSelectedContact(null);
    setInfoModalOpen(false);
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const status = contact.status?.toLowerCase?.() || "";
    const activeFilter = filter?.toLowerCase?.() || "all";
    const matchesFilter = activeFilter === "all" || status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const sortedContacts = [...filteredContacts].sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
    return sortOrder === 'asc'
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  return (
    <div className="contactItem-container">
      <table className="table">
        <thead>
          <tr>
            <th>icon</th>
            <th style={{ cursor: 'pointer' }} onClick={handleSortByName}>
              Name {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th>Phone/Email</th>
            <th>Status</th>
            <th>Gender</th>
            <th>Edit/Del</th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.length > 0 ? (
            sortedContacts.map(contact => (
              <tr key={contact.id}>
                <td className='position-relative'>
                  <img
                    onClick={() => openContactInfo(contact)}
                    style={{ cursor: 'pointer' }}
                    className={`rounded-circle border border-3 ${contact.gender === 'women' ? 'border-danger' : 'border-primary'}`}
                    src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
                    alt=""
                  />
                  <button
                    className="favoriteBtn"
                    onClick={() => dispatch(toggleFavorite(contact.id))}
                  >
                    {contact.favorite ? '♥' : '♡'}
                  </button>
                </td>
                <td>{contact.firstName}<br />{contact.lastName}</td>
                <td>{contact.phone}<br />{contact.email}</td>
                <td>{contact.status}</td>
                <td>{contact.gender}</td>
                <td>
                  <Link to={`/edit-contact/${contact.id}`}>
                    <FaRegEdit className='edit-icon' />
                  </Link>
                  <MdDeleteForever
                    className='delete-icon'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDeleteClick(contact)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No contacts found</td>
            </tr>
          )}
        </tbody>
      </table>

      <ConfirmModal
        isOpen={modalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message={`Ви дійсно хочете видалити ${selectedContactName}?`}
      />

      <ContactInfoModal
        isOpen={infoModalOpen}
        onClose={closeContactInfo}
        contact={selectedContact}
      />
    </div>
  );
}
