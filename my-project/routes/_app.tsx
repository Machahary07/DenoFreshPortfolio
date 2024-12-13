import { Navbar } from "../components/Navbar.tsx";
import { Hero } from "../components/Hero.tsx";
import Work from '../components/Work.tsx';
import Skills from '../components/Skills.tsx';
import Contacts from "../components/Contacts.tsx";

export default function App() {  // Add parentheses here
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>my-project</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <section>
          <Navbar />
          <Hero />
          <Work />
          <Skills />
          <Contacts />
        </section>
      </body>
    </html>
  );
}
