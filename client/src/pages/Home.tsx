import { MenuSection } from "@/components/MenuSection";
import { MenuItem } from "@/components/MenuItem";
import { Gallery } from "@/components/Gallery";
import { LemonBorder } from "@/components/LemonBorder";
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
      
      {/* Bordures de citrons encadrant la page */}
      <LemonBorder />

      <div className="container max-w-5xl py-8 md:py-12 px-4 md:px-8">
        {/* Header */}
        <header className="text-center mb-12 mt-12 md:mt-16">
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
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </header>

        {/* Galerie de photos */}
        <Gallery />

        {/* QR Code Section */}
        <div className="text-center mb-12 p-6 bg-card/50 rounded-xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src="/menu-qr-code.png" 
                alt="QR Code Menu" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <QrCode className="w-6 h-6 text-primary" />
                <h3 
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  Scannez notre menu
                </h3>
              </div>
              <p className="text-muted-foreground">
                Accédez facilement à notre menu depuis votre smartphone
              </p>
            </div>
          </div>
        </div>

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

        {/* Footer avec motif céramique et réseaux sociaux */}
        <footer className="mt-16 pt-8 border-t-2 border-primary/20 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
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
            
            <div className="text-center md:text-right">
              <p className="font-medium mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                Suivez-nous
              </p>
              <div className="flex gap-4 justify-center md:justify-end">
                <a 
                  href="https://www.facebook.com/p/Pâtisserie-Giovanni-100064813566008/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="text-sm">Patisserie Giovanni</span>
                </a>
              </div>
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <a 
                  href="https://www.instagram.com/pasticceria.giovanni/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-sm">@pasticceria.giovanni</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
