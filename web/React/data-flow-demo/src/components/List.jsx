export default function List(contacts) {
  return (
    <div>
      {contacts.map((contact, i) => (
        <div key={i}>{contact}</div>
      ))}
    </div>
  );
}
