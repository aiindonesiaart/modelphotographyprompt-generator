document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const promptDisplay = document.getElementById('prompt-display');
    
    generateBtn.addEventListener('click', generatePrompt);
    copyBtn.addEventListener('click', copyPrompt);
    
    function generatePrompt() {
        // Get all selected values
        const gender = document.getElementById('gender').value;
        const angle = document.getElementById('angle').value;
        const ethnicity = document.getElementById('ethnicity').value;
        const hairstyle = document.getElementById('hairstyle').value;
        const hairColor = document.getElementById('hair-color').value;
        const bodyType = document.getElementById('body-type').value;
        const upper = document.getElementById('upper').value;
        const upperColor = document.getElementById('upper-color').value;
        const lower = document.getElementById('lower').value;
        const lowerColor = document.getElementById('lower-color').value;
        const background = document.getElementById('background').value;
        const lighting = document.getElementById('lighting').value;
        const style = document.getElementById('style').value;
        
        // Get custom inputs
        const customFigure = document.getElementById('custom-figure').value;
        const customClothing = document.getElementById('custom-clothing').value;
        const customColors = document.getElementById('custom-colors').value;
        const customOther = document.getElementById('custom-other').value;
        
        // Build the prompt
        let prompt = `A ${angle} photography of a ${ethnicity} ${gender} with ${hairColor} ${hairstyle} hair and a ${bodyType} body type. `;
        
        // Clothing description
        if (upper !== 'none' || lower !== 'none') {
            prompt += `Wearing `;
            if (upper !== 'none') {
                prompt += `a ${upperColor} ${upper}`;
                if (lower !== 'none') {
                    prompt += ` and `;
                }
            }
            if (lower !== 'none') {
                prompt += `${lowerColor} ${lower}`;
            }
            prompt += `. `;
        }
        
        // Background and style
        prompt += `The setting is a ${background} with ${lighting} lighting. `;
        prompt += `Photography style: ${style}. `;
        
        // Add custom inputs if they exist
        if (customFigure) prompt += `${customFigure}. `;
        if (customClothing) prompt += `${customClothing}. `;
        if (customColors) prompt += `${customColors}. `;
        if (customOther) prompt += `${customOther}. `;
        
        // Display the prompt
        promptDisplay.textContent = prompt;
    }
    
    function copyPrompt() {
        if (!promptDisplay.textContent.trim()) {
            alert('Please generate a prompt first!');
            return;
        }
        
        navigator.clipboard.writeText(promptDisplay.textContent)
            .then(() => {
                // Change button text temporarily
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy prompt. Please try again.');
            });
    }
    
    // Generate a prompt on page load with default values
    generatePrompt();
});
