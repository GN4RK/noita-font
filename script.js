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
    
    // Update text content
    editor.addEventListener('input', function() {
        const text = this.value.trim() === '' ? 'Your text will appear here with the Noita Blackletter font' : this.value;
        textShadow.textContent = text;
        textPlain.textContent = text;
    });
    
    // Function to update font size
    function updateFontSize(value) {
        const fontSize = Math.max(0, Math.min(200, parseInt(value)));
        sizeSlider.value = fontSize;
        sizeInput.value = fontSize;
        textShadow.style.fontSize = fontSize + 'px';
        textPlain.style.fontSize = fontSize + 'px';
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
});
