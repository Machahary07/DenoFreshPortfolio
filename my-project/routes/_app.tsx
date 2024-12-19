import Navbar from "../components/Navbar.tsx";
import { About } from "../components/About.tsx"
import Work from '../components/Work.tsx';
import Skills from '../components/Skills.tsx';
import Contacts from "../components/Contacts.tsx";
import Work2 from "../components/Work2.tsx";

export default function App() {  // Add parentheses here
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jeu Machahary - UI/UX Designer</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <section>
          <Navbar />
          <About/>
          <Work2/>
          <Work />
          <Skills />
          <Contacts />
        </section>
      </body>
    </html>
  );
}
