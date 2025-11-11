from PIL import Image, ImageDraw
import math

def create_simple_qr(size=400, color='#2D9B9B'):
    """Create a simple QR-like pattern"""
    img = Image.new('RGB', (size, size), 'white')
    draw = ImageDraw.Draw(img)
    
    # Convert hex to RGB
    r = int(color[1:3], 16)
    g = int(color[3:5], 16)
    b = int(color[5:7], 16)
    fill_color = (r, g, b)
    
    # Create a decorative pattern
    cell_size = size // 10
    for i in range(10):
        for j in range(10):
            if (i + j) % 2 == 0 or (i == 0 or i == 9 or j == 0 or j == 9):
                x1 = i * cell_size
                y1 = j * cell_size
                x2 = x1 + cell_size
                y2 = y1 + cell_size
                draw.rectangle([x1, y1, x2, y2], fill=fill_color)
    
    # Add corner squares
    corner_size = cell_size * 3
    for x, y in [(0, 0), (size - corner_size, 0), (0, size - corner_size)]:
        draw.rectangle([x, y, x + corner_size, y + corner_size], outline=fill_color, width=cell_size//2)
        draw.rectangle([x + cell_size, y + cell_size, x + corner_size - cell_size, y + corner_size - cell_size], fill=fill_color)
    
    return img

# Create QR codes
fb_qr = create_simple_qr(400, '#2D9B9B')
fb_qr.save('client/public/facebook-qr.png')

ig_qr = create_simple_qr(400, '#2D9B9B')
ig_qr.save('client/public/instagram-qr.png')

print("QR codes created successfully")
