#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/{gallery,timeline,icons}

# Function to download image with retries
download_image() {
    local url=$1
    local output=$2
    local max_retries=3
    local retry_count=0

    while [ $retry_count -lt $max_retries ]; do
        if [ $retry_count -gt 0 ]; then
            echo "Retry $retry_count for $output"
        fi
        
        curl -L "$url" -o "$output" && return 0
        
        retry_count=$((retry_count + 1))
    done
    
    echo "Failed to download $output after $max_retries attempts"
    return 1
}

# Download gallery images
download_image "https://source.unsplash.com/800x600/?wedding" "public/images/gallery/photo1.jpeg"
download_image "https://source.unsplash.com/800x600/?bride" "public/images/gallery/photo2.jpeg"
download_image "https://source.unsplash.com/800x600/?groom" "public/images/gallery/photo3.jpeg"
download_image "https://source.unsplash.com/800x600/?wedding-ceremony" "public/images/gallery/photo4.jpeg"
download_image "https://source.unsplash.com/800x600/?wedding-reception" "public/images/gallery/photo5.jpeg"

# Download timeline images
download_image "https://source.unsplash.com/800x600/?couple" "public/images/timeline/photo1.jpeg"
download_image "https://source.unsplash.com/800x600/?proposal" "public/images/timeline/photo2.jpeg"
download_image "https://source.unsplash.com/800x600/?engagement" "public/images/timeline/photo3.jpeg"

# Download hero background
download_image "https://source.unsplash.com/1920x1080/?wedding-venue" "public/images/hero-bg.jpeg"

# Create SVG icons
cat > public/images/icons/camera.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
  <circle cx="12" cy="13" r="4"/>
</svg>
EOF

cat > public/images/icons/rings.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="8" cy="12" r="6"/>
  <circle cx="16" cy="12" r="6"/>
</svg>
EOF

cat > public/images/icons/dinner.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M3 19h18M3 5h18M9 12h6"/>
</svg>
EOF

# Create floral decorations
cat > public/images/floral-top-right.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50,10 Q60,20 70,10 T90,10" fill="none" stroke="#BE123C" stroke-width="2"/>
  <path d="M30,30 Q40,40 50,30 T70,30" fill="none" stroke="#BE123C" stroke-width="2"/>
  <circle cx="70" cy="10" r="3" fill="#BE123C"/>
  <circle cx="50" cy="30" r="3" fill="#BE123C"/>
</svg>
EOF

cp public/images/floral-top-right.svg public/images/floral-bottom-left.svg
cp public/images/floral-top-right.svg public/images/floral-left.svg
cp public/images/floral-top-right.svg public/images/floral-right.svg

echo "All images and icons have been downloaded and created!" 