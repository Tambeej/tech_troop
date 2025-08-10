import Contact from "./Contact";

export default function List({ contacts }) {
  return (
    <div>
      {contacts.map((name, index) => (
        <Contact key={index} name={name} />
      ))}
    </div>
  );
}
