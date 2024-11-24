// Create button element
const button = document.createElement('div');
button.innerHTML = `
    <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background: #a435f0;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 8px;
        font-family: sans-serif;
    ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 10L4 15L9 20"/>
            <path d="M20 4v7a4 4 0 0 1-4 4H4"/>
        </svg>
        Go to FPT Udemy
    </div>
`;

// Add click event handler
button.addEventListener('click', function() {
    const currentUrl = window.location.href;
    const fptUrl = currentUrl.replace('www.udemy.com', 'fpt-software.udemy.com');
    window.location.href = fptUrl;
});

// Add button to page
document.body.appendChild(button);