import { MenuSection } from "@/components/MenuSection";
import { MenuItem } from "@/components/MenuItem";
import { Coffee, Wine, Cake, UtensilsCrossed } from "lucide-react";

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
      
      {/* Motif citrons en haut */}
      <div 
        className="w-full h-24 md:h-40 bg-contain bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/lemon-pattern.png')" }}
      />

      <div className="container max-w-5xl pb-16">
        {/* Header */}
        <header className="text-center mb-16 -mt-6">
          <h1 
            className="text-5xl md:text-7xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Pasticceria Giovanni
          </h1>
          <p 
            className="text-xl md:text-2xl text-foreground/80 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Al vostro servizio dal 1978
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full" />
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

        {/* Footer avec motif céramique */}
        <footer className="mt-16 pt-8 border-t-2 border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
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
              <p className="font-medium mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Suivez-nous
              </p>
              <p className="text-sm text-muted-foreground">Facebook: Patisserie Giovanni</p>
              <p className="text-sm text-muted-foreground">Instagram: @pasticceria.giovanni</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Motif citrons en bas */}
      <div 
        className="w-full h-24 md:h-40 bg-contain bg-center bg-no-repeat opacity-50 mt-12"
        style={{ backgroundImage: "url('/lemon-pattern.png')" }}
      />
    </div>
  );
}
