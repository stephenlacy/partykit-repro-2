import usePartySocket from "partysocket/react";

const PARTYKIT_HOST = "http://localhost:1999";

export function Page() {
  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: "test-room",
  });

  return (
    <div>
      <h1>PartySocket</h1>
      ID is: {socket?.id}
    </div>
  );
}
