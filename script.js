document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('text-editor');
    const sizeSlider = document.getElementById('font-size-slider');
    const sizeInput = document.getElementById('font-size-input');
    const offsetXSlider = document.getElementById('offset-x-slider');
    const offsetXInput = document.getElementById('offset-x-input');
    const offsetYSlider = document.getElementById('offset-y-slider');
    const offsetYInput = document.getElementById('offset-y-input');
    const textShadow = document.getElementById('text-shadow');
    const textPlain = document.getElementById('text-plain');
    const useAlphabetPreview = document.getElementById('use-alphabet-preview');
    const alphabetPreview = document.getElementById('alphabet-preview');
    const alphabetText = document.getElementById('alphabet-text');
    
    // Function to create alphabet characters
    function createAlphabetText(text) {
        const displayText = text.trim() === '' ? 'Your text will appear here with the Noita Blackletter font' : text;
        alphabetText.innerHTML = '';
        
        for (let i = 0; i < displayText.length; i++) {
            const char = displayText[i].toUpperCase();
            const span = document.createElement('span');
            span.className = 'alphabet-char';
            span.setAttribute('data-char', char);
            span.textContent = char; // Fallback text
            
            // Add debug info on hover (remove this in production)
            span.title = `Character: ${char} | Position: ${span.style.backgroundPosition || 'CSS default'}`;
            
            alphabetText.appendChild(span);
        }
    }
    
    // Debug function to help adjust character positions
    function debugAlphabetPositions() {
        console.log('=== ALPHABET DEBUG INFO ===');
        console.log('To adjust character positions, modify the CSS background-position values:');
        console.log('Current mapping assumes:');
        console.log('- 26 characters in a single row');
        console.log('- Each character takes 3.846% width (100% / 26)');
        console.log('- Characters are in alphabetical order A-Z');
        console.log('');
        console.log('If your image is different, adjust:');
        console.log('1. background-size: change the percentage based on number of characters');
        console.log('2. background-position: adjust X% values for each character');
        console.log('3. Add more rows by changing Y% values (0%, 100%, 200%, etc.)');
        console.log('================================');
    }
    
    // Update text content
    editor.addEventListener('input', function() {
        const text = this.value.trim() === '' ? 'Your text will appear here with the Noita Blackletter font' : this.value;
        textShadow.textContent = text;
        textPlain.textContent = text;
        createAlphabetText(text);
    });
    
    // Function to update font size
    function updateFontSize(value) {
        const fontSize = Math.max(0, Math.min(200, parseInt(value)));
        sizeSlider.value = fontSize;
        sizeInput.value = fontSize;
        textShadow.style.fontSize = fontSize + 'px';
        textPlain.style.fontSize = fontSize + 'px';
        alphabetText.style.fontSize = fontSize + 'px';
    }
    
    // Update font size from slider
    sizeSlider.addEventListener('input', function() {
        updateFontSize(this.value);
    });
    
    // Update font size from number input
    sizeInput.addEventListener('input', function() {
        updateFontSize(this.value);
    });
    
    // Handle number input blur (when user finishes typing)
    sizeInput.addEventListener('blur', function() {
        updateFontSize(this.value);
    });
    
    // Function to update gradient offset
    function updateGradientOffset() {
        const offsetX = offsetXSlider.value;
        const offsetY = offsetYSlider.value;
        textPlain.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
    }
    
    // Update gradient offset from X slider
    offsetXSlider.addEventListener('input', function() {
        offsetXInput.value = this.value;
        updateGradientOffset();
    });
    
    // Update gradient offset from X number input
    offsetXInput.addEventListener('input', function() {
        const value = Math.max(-200, Math.min(200, parseInt(this.value) || 0));
        offsetXSlider.value = value;
        this.value = value;
        updateGradientOffset();
    });
    
    // Update gradient offset from Y slider
    offsetYSlider.addEventListener('input', function() {
        offsetYInput.value = this.value;
        updateGradientOffset();
    });
    
    // Update gradient offset from Y number input
    offsetYInput.addEventListener('input', function() {
        const value = Math.max(-200, Math.min(200, parseInt(this.value) || 0));
        offsetYSlider.value = value;
        this.value = value;
        updateGradientOffset();
    });
    
    // Handle number input blur for offset controls
    offsetXInput.addEventListener('blur', function() {
        const value = Math.max(-200, Math.min(200, parseInt(this.value) || 0));
        offsetXSlider.value = value;
        this.value = value;
        updateGradientOffset();
    });
    
    offsetYInput.addEventListener('blur', function() {
        const value = Math.max(-200, Math.min(200, parseInt(this.value) || 0));
        offsetYSlider.value = value;
        this.value = value;
        updateGradientOffset();
    });
    
    // Toggle alphabet preview
    useAlphabetPreview.addEventListener('change', function() {
        if (this.checked) {
            alphabetPreview.style.display = 'block';
            document.getElementById('text-preview').style.display = 'none';
        } else {
            alphabetPreview.style.display = 'none';
            document.getElementById('text-preview').style.display = 'block';
        }
    });
    
    // Initialize alphabet text
    createAlphabetText('Your text will appear here with the Noita Blackletter font');
    
    // Run debug function to help with positioning
    debugAlphabetPositions();
});
