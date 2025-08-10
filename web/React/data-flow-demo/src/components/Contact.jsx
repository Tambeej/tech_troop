export default function Contact({ name, displayConvo }) {
  return (
    <div onClick={() => displayConvo(name)} style={{ cursor: "pointer" }}>
      {name}
    </div>
  );
}
