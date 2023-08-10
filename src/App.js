


// import "./index.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <Skills />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}


// header - padding issues top anchors
// header - move intro para/buttons up the page, ensure page is 100vh max
// fix footer padding
// enable contact form
// test email
// contact form - drop left/right margin
// contact form - drop font size (placeholder and labels)