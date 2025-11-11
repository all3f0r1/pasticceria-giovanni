export function LemonBorder() {
  return (
    <>
      {/* Bordure supérieure */}
      <div 
        className="fixed top-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/lemon-pattern.png')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
          opacity: 0.7
        }}
      />
      
      {/* Bordure inférieure */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/lemon-pattern.png')",
          backgroundSize: "auto 100%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
          opacity: 0.7,
          transform: "scaleY(-1)"
        }}
      />
      
      {/* Coins décoratifs gauche */}
      <div 
        className="fixed top-0 left-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/lemon-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "top left",
          opacity: 0.6
        }}
      />
      
      {/* Coins décoratifs droite */}
      <div 
        className="fixed top-0 right-0 w-32 h-32 md:w-40 md:h-40 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/lemon-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          opacity: 0.6,
          transform: "scaleX(-1)"
        }}
      />
    </>
  );
}
