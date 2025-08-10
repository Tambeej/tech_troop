import Contact from "./Contact";

export default function List({ contacts, displayConvo }) {
  return (
    <div>
      {contacts.map((name, index) => (
        <Contact key={index} name={name} displayConvo={displayConvo} />
      ))}
    </div>
  );
}
