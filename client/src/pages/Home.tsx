import { MenuSection } from "@/components/MenuSection";
import { MenuItem } from "@/components/MenuItem";
import { Coffee, Wine, Cake, UtensilsCrossed, Facebook, Instagram, QrCode } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background avec texture */}
      <div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: "url('/background-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="container max-w-5xl py-8 md:py-12 px-4 md:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 
            className="text-5xl md:text-7xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Pasticceria Giovanni
          </h1>
          <p 
            className="text-xl md:text-2xl text-foreground/80 italic mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Al vostro servizio dal 1978
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          
          {/* Texte de présentation */}
          <div className="max-w-3xl mx-auto mb-8 px-4">
            <p 
              className="text-lg md:text-xl text-foreground/90 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Depuis plus de 45 ans, la <strong>Pasticceria Giovanni</strong> perpétue l'authenticité de la tradition sicilienne au cœur de Bruxelles. 
              Réputée pour ses <em>cannoli</em> croustillants, ses <em>arancini</em> dorés et sa <em>cassata</em> légendaire, 
              notre pâtisserie artisanale ravit les palais des connaisseurs et des amateurs de vraie cuisine italienne. 
              Chaque création est préparée avec passion selon les recettes ancestrales de la Sicile.
            </p>
          </div>
        </header>

        {/* Grille de menu en 2 colonnes sur desktop */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Colonne gauche */}
          <div>
            {/* Boissons Chaudes */}
            <MenuSection 
              title="Boissons chaudes" 
              icon={<Coffee className="w-8 h-8" />}
            >
              <MenuItem name="Espresso" price="2,50 €" />
              <MenuItem name="Lait russe" price="3,50 €" />
              <MenuItem name="Grand café" price="3 €" />
              <MenuItem name="Cappuccino" price="3,50 €" />
              <MenuItem name="Thé" price="3,50 €" />
              <MenuItem name="Chocolat chaud" price="3 €" />
              <MenuItem name="Lait chaud" price="3 €" />
              <MenuItem name="Espresso marocchino" price="3,50 €" />
              <MenuItem name="Espresso corretto" price="3,50 €" />
              <MenuItem name="Café ginseng" price="3,50 €" />
            </MenuSection>

            {/* Boissons Fraîches */}
            <MenuSection title="Boissons fraîches">
              <MenuItem name="Coca Cola 25cl" price="3 €" />
              <MenuItem name="Coca Cola zéro 25cl" price="3 €" />
              <MenuItem name="Lipton ice tea 25cl" price="3 €" />
              <MenuItem name="Fanta orange 25cl" price="3 €" />
              <MenuItem name="Vittel 25cl" price="3 €" />
              <MenuItem name="Tonic 25cl" price="3 €" />
              <MenuItem name="Acqua Panna 50cl" price="5 €" />
              <MenuItem name="San Pellegrino 50cl" price="5 €" />
              <MenuItem name="Caffé freddo" price="4,50 €" description="saison estivale" />
              <MenuItem name="Lait d'amande" price="5 €" description="saison estivale" />
              <MenuItem name="Crème de café" price="4,50 €" description="saison estivale" />
              <MenuItem name="Granita citron/fraise" price="5 €" description="saison estivale" />
              <MenuItem name="Bière" price="3,50 €" />
              <MenuItem name="Jus de fruit" price="3,50 €" />
              <MenuItem name="Jus d'orange" price="4,50 €" />
            </MenuSection>

            {/* Vins */}
            <MenuSection 
              title="Vins" 
              icon={<Wine className="w-8 h-8" />}
            >
              <MenuItem name="Toule" price="4,50 €" />
              <MenuItem name="Verre de vin rouge/blanc" price="4,50 €" />
              <MenuItem name="¼ de vin rouge/blanc" price="9 €" />
              <MenuItem name="½ de vin rouge/blanc" price="13 €" />
            </MenuSection>
          </div>

          {/* Colonne droite */}
          <div>
            {/* Apéritifs */}
            <MenuSection title="Apéritifs">
              <MenuItem name="Apérol Spritz" price="8 €" highlight />
              <MenuItem name="Martini" price="6 €" />
              <MenuItem name="Crodino" price="4,50 €" />
              <MenuItem name="Campari liscio" price="5 €" />
              <MenuItem name="Campari Orange" price="7 €" />
              <MenuItem name="Prosecco" price="7 €" />
            </MenuSection>

            {/* Digestifs */}
            <MenuSection title="Digestifs">
              <MenuItem name="Grappa" price="7 €" />
              <MenuItem name="Limoncello" price="6 €" />
              <MenuItem name="Digestif" price="6 €" />
              <MenuItem name="Sambuca" price="6 €" />
            </MenuSection>

            {/* Pâtisseries */}
            <MenuSection 
              title="Pâtisseries" 
              icon={<Cake className="w-8 h-8" />}
            >
              <MenuItem name="Baba au rhum" price="5 €" highlight />
              <MenuItem name="Cannolo" price="4,50 €" highlight />
              <MenuItem name="Cannolo chocolat ou pistache" price="4,80 €" />
              <MenuItem name="Cassatella" price="5,50 €" />
              <MenuItem name="Éclair" price="4 €" />
              <MenuItem name="Gâteau pistache" price="4,80 €" />
              <MenuItem name="Autre pâtisserie" price="4,50 €" />
            </MenuSection>

            {/* Rosticceria */}
            <MenuSection 
              title="Rosticceria" 
              icon={<UtensilsCrossed className="w-8 h-8" />}
            >
              <MenuItem name="Arancino" price="4,50 €" highlight />
              <MenuItem name="Pizza" price="4,50 €" />
              <MenuItem name="Cipollina" price="4,50 €" />
              <MenuItem name="Panini" price="9 €" />
              <MenuItem name="Assiette de légumes" price="16 €" />
              <MenuItem name="Assiette de légumes et viande" price="20 €" />
            </MenuSection>

            {/* Viennoiseries */}
            <MenuSection title="Viennoiseries">
              <MenuItem name="Coque beurre" price="2,20 €" />
              <MenuItem name="Coque raisin" price="2,20 €" />
              <MenuItem name="Croissant" price="2,20 €" />
              <MenuItem name="Croissant pistache" price="3,50 €" />
              <MenuItem name="Croissant crème ou nutella" price="3 €" />
              <MenuItem name="Bombolone" price="3,50 €" />
              <MenuItem name="Brioche" price="3 €" />
            </MenuSection>
          </div>
        </div>

        {/* Section QR Codes à la fin */}
        <div className="mt-16 pt-8 border-t-2 border-primary/20">
          <h2 
            className="text-3xl md:text-4xl font-bold text-primary text-center mb-8"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Scannez & Suivez-nous
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* QR Code Menu */}
            <div className="text-center p-6 bg-card/50 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="flex justify-center mb-4">
                <QrCode className="w-8 h-8 text-primary" />
              </div>
              <img 
                src="/menu-qr-code.png" 
                alt="QR Code Menu" 
                className="w-40 h-40 mx-auto rounded-lg shadow-md mb-4"
              />
              <h3 
                className="text-xl font-bold text-primary mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Notre Menu
              </h3>
              <p className="text-sm text-muted-foreground">
                Accédez au menu depuis votre smartphone
              </p>
            </div>

            {/* QR Code Facebook */}
            <div className="text-center p-6 bg-card/50 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="flex justify-center mb-4">
                <Facebook className="w-8 h-8 text-primary" />
              </div>
              <a 
                href="https://www.facebook.com/p/Pâtisserie-Giovanni-100064813566008/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/facebook-qr.png" 
                  alt="QR Code Facebook" 
                  className="w-40 h-40 mx-auto rounded-lg shadow-md mb-4 hover:scale-105 transition-transform"
                />
              </a>
              <h3 
                className="text-xl font-bold text-primary mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Facebook
              </h3>
              <p className="text-sm text-muted-foreground">
                Patisserie Giovanni
              </p>
            </div>

            {/* QR Code Instagram */}
            <div className="text-center p-6 bg-card/50 rounded-xl backdrop-blur-sm shadow-lg">
              <div className="flex justify-center mb-4">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <a 
                href="https://www.instagram.com/pasticceria.giovanni/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="/instagram-qr.png" 
                  alt="QR Code Instagram" 
                  className="w-40 h-40 mx-auto rounded-lg shadow-md mb-4 hover:scale-105 transition-transform"
                />
              </a>
              <h3 
                className="text-xl font-bold text-primary mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Instagram
              </h3>
              <p className="text-sm text-muted-foreground">
                @pasticceria.giovanni
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t-2 border-primary/20 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div>
              <p className="text-lg font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Chaussée de Louvain 303
              </p>
              <p className="text-muted-foreground">1030 Schaerbeek, Bruxelles</p>
              <p className="text-muted-foreground mt-2">+32 2 733 73 64</p>
            </div>
            
            <div 
              className="w-32 h-32 bg-contain bg-center bg-no-repeat opacity-60"
              style={{ backgroundImage: "url('/sicilian-ceramic-pattern.png')" }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
