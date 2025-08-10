export default function Conversation({
  convo,
  sender,
  displayConvo
}) {
  return (
    <div>
      {" "}
      {convo.map((msg, idx) => {
        const isSelf = msg.sender === "self";
        return (
          <div key={idx}>
            <span className="sender">{isSelf ? "Me" : sender}:</span> {msg.text}
          </div>
        );
      })}
      <button onClick={() => displayConvo(null)} >Back</button>
    </div>
  );
}
