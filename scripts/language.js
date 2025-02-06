const elements = {
    'bought-items-title': {
        en: 'Bought Items',
        he: 'פריטים שנקנו'
    },
    'pending-items-title': {
        en: 'Pending Items',
        he: 'פריטים ממתינים'
    }
};

for (const id in elements) {
    const element = document.getElementById(id);
    if (element) {
        if (element.tagName === 'INPUT') {
            element.placeholder = elements[id][language] || element.placeholder;
        } else {
            element.textContent = elements[id][language] || element.textContent;
        }
    }
}

// Set initial language based on the selected option
document.addEventListener('DOMContentLoaded', function() {
    const language = document.getElementById('language-select').value;
    switchLanguage(language);
});
