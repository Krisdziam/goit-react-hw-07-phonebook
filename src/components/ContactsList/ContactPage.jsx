

export const  ContactPage=({contacts})=> {
  return (
    <ul>{contacts.map(contact => (
        <li key={contact.id}>{contact.name}</li>
    ))}</ul>
  )
}
