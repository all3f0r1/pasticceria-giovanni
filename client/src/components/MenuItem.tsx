interface MenuItemProps {
  name: string;
  price: string;
  description?: string;
  highlight?: boolean;
}

export function MenuItem({ name, price, description, highlight = false }: MenuItemProps) {
  return (
    <div className={`flex justify-between items-baseline gap-4 py-2 px-3 rounded-lg transition-colors ${
      highlight ? 'bg-accent/20' : 'hover:bg-muted/30'
    }`}>
      <div className="flex-1">
        <span 
          className={`text-lg ${highlight ? 'font-semibold text-accent-foreground' : 'text-foreground'}`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {name}
        </span>
        {description && (
          <p className="text-sm text-muted-foreground mt-1 italic">
            {description}
          </p>
        )}
      </div>
      <span 
        className={`text-lg font-medium whitespace-nowrap ${highlight ? 'text-accent-foreground' : 'text-foreground'}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {price}
      </span>
    </div>
  );
}
