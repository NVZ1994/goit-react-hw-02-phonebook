export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p>{contact.name}:</p>
                    <p>{contact.phone}</p>
                    <button onClick={() => onDelete(contact.id)}>Delete contact</button>
                </li>
            )
            )}
        </ul>
    )
}

