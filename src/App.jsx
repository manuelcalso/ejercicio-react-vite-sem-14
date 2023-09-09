import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  const metadata = {
    title: "Mi primer app en React",
    subtitle: "Este es un parrafo",
  };

  return (
    <>
      <Header title={metadata.title} subtitle={metadata.subtitle} />
      <p>Hola Mundo</p>
      <Content />
      <Footer />
    </>
  );
}

export default App;
