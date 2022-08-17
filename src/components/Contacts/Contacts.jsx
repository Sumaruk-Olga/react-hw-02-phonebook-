import { ContactsList, ContactItem, DeleteButton } from "./Contacts.styled";

export const Contacts = ({ contacts, onDelete }) => {
    return (
        <ContactsList>
            {contacts.map((item) => {
                return <ContactItem key={item.id}>
                    <p>{item.name}: {item.number}</p>
                    <DeleteButton type="button" onClick={()=>onDelete(item.id)}>x</DeleteButton>
                </ContactItem>
            })}
            </ContactsList>)
}