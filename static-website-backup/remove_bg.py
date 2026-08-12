from rembg import remove
from PIL import Image
import sys
import glob

def process(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        input = Image.open(input_path)
        output = remove(input)
        output.save(output_path)
    except Exception as e:
        print(f"Error on {input_path}: {e}")

if __name__ == '__main__':
    files = glob.glob('/Users/favasev/.gemini/antigravity/brain/37d0634f-bed7-4b8a-a046-1617047a3877/*.png')
    for f in files:
        if 'icon_' in f or 'hero_' in f:
            out = f.replace('.png', '_nobg.png')
            process(f, out)

