import NavBar from "../components/NavBar";
import Picture from "../components/Picture";
import Cards from "../components/Cards";
import About from "../components/About";

export default function Myself() {
  return (
    <>
      <NavBar />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-6 max-w-7xl mx-auto">
      
        <div className="lg:col-span-1 space-y-6 pt-6">
          <Picture />
          <About />
        </div>
        
     
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-stretch">
            <Cards
              title="PARCOURS"
              content={[
                "Baccalauréat Sciences Économiques et Sociales",
                "Licence Lettres, Langues et Civilisations Étrangères, spécialité anglais",
                "Master Traduction d'Édition",
                "Visuelle - Maisons du Monde",
                "Master MEEF",
                "Conseillère de vente - Petit Bateau",
                "Formation développement full stack - ADA Tech School"
              ]}
            />
            <Cards
              title="COMPÉTENCES FRONT-END"
              content={[
                "HTML5",
                "CSS3 & FLEXBOX/GRID",
                "JavaScript",
                "Typescript",
                "Responsive Design",
                "Accessibilité"
              ]}
            />
             <Cards
              title="COMPÉTENCES BACK-END"
              content={[
                "Node.js",
                "Java",
                "APIs REST & sécurité web",
                "SQL & bases de données",
              ]}
            />
            <Cards
              title="QUALITÉS"
              content={[
                "Travail d'équipe",
                "Polyvalence",
                "Esprit créatif",
                "Résolution de problèmes",
                "Facilité d'apprentissage"
              ]}
            />
            
          </div>
        </div>
      </div>
      
    </>
  );
}