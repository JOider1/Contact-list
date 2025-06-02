export default function ContactItem({ stor, deleteContact }) {
    return(
        <div>
            {stor.map(contact => (
                <div style={{border: '1px solid', padding: '20px'}} key={contact.id}>
                    <img src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`} alt="" />
                    <div>
                        <h3>{contact.firstName} {contact.lastName}</h3>
                        <p>{contact.email}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.status}</p>
                    </div>
                    <button onClick={() => deleteContact(contact.id)}>del</button>
                </div>
            ))}
        </div>
    )
}