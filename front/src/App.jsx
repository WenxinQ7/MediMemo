export default function App() {
  async function testBack() {
    console.log("Testing back...");
    const response = await fetch("/api/appointments", {
      method: "get",
    });

    if (!response.ok) {
      throw new Error("Network reponse was not ok");
    }
    const data = await response.json();
    console.log("got data!", data);
  }

  testBack();
  return <div>¡Hola Holaaaaaa!</div>;
}
