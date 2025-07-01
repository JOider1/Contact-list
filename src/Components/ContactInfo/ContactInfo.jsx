// src/components/ContactInfoModal.jsx
import './ContactInfo.scss';

export default function ContactInfoModal({ isOpen, onClose, contact }) {
  if (!isOpen || !contact) return null;

  return (
    <div className="info-modal-overlay">
      <div className="info-modal-content">
        <button className="info-close-btn" onClick={onClose}>×</button>
        <img
          src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
          alt="avatar"
          className="info-avatar"
        />
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p><strong>📞 Phone:</strong> {contact.phone}</p>
        <p><strong>📧 Email:</strong> {contact.email}</p>
        <p><strong>🧬 Status:</strong> {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}</p>
        <p><strong>👤 Gender:</strong> {contact.gender.charAt(0).toUpperCase() + contact.gender.slice(1)}</p>
        <p><strong>⭐ favorite:</strong> {contact.favorite ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
