import { ContactsList } from "./Contacts.styled";

export const Contacts = ({ contacts, onDelete }) => {
    return (
        <ContactsList>
            {contacts.map((item) => {
                return <li key={item.id}>
                    <p>{item.name}: {item.number}</p>
                    <button type="button" onClick={()=>onDelete(item.id)}>x</button>
                </li>
            })}
            </ContactsList>)
}