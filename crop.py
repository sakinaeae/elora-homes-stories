from PIL import Image

# Open the image
img = Image.open('public/elora-homes-logo.png')
# Crop box (left, upper, right, lower)
# The image is 517x227. The house icon is roughly the right half.
box = (250, 0, 517, 227)
cropped = img.crop(box)
# Make it square for a favicon (padding it)
max_dim = max(cropped.size)
square = Image.new('RGBA', (max_dim, max_dim), (0,0,0,0))
square.paste(cropped, ((max_dim - cropped.size[0]) // 2, (max_dim - cropped.size[1]) // 2))
# Resize to 256x256 for standard favicon
favicon = square.resize((256, 256), Image.Resampling.LANCZOS)
favicon.save('public/favicon.png')
favicon.save('public/favicon.ico', format='ICO', sizes=[(32, 32), (64, 64), (128, 128)])
print("Cropped and saved favicon")
