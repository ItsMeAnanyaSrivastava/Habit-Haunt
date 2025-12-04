// Navigation function
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Summon monster function
function summonMonster() {
    const habitName = document.getElementById('habit-name').value;
    const habitFrequency = document.getElementById('habit-frequency').value;
    const habitReason = document.getElementById('habit-reason').value;
    
    if (!habitName) {
        alert('Please name your demon!');
        return;
    }
    
    // Update monster name
    const monsterNameElement = document.getElementById('monster-name');
    if (monsterNameElement) {
        monsterNameElement.textContent = `The ${habitName} Demon`;
    }
    
    // Navigate to monster profile
    navigateTo('monster-profile');
}

// Task completion handler
document.addEventListener('DOMContentLoaded', () => {
    // Handle task checkboxes
    const taskCheckboxes = document.querySelectorAll('.task-checkbox');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Add visual feedback
                e.target.parentElement.style.opacity = '0.6';
                
                // Simulate damage to monster
                const monsterHpFill = document.querySelector('.monster-hp-fill');
                if (monsterHpFill) {
                    const currentWidth = parseInt(monsterHpFill.style.width);
                    const newWidth = Math.max(0, currentWidth - 5);
                    monsterHpFill.style.width = newWidth + '%';
                    monsterHpFill.textContent = newWidth + '/100';
                }
            } else {
                e.target.parentElement.style.opacity = '1';
            }
        });
    });
    
    // Spell button effects
    const spellButtons = document.querySelectorAll('.spell-button');
    spellButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
            
            // Show spell effect (you can enhance this)
            const spellName = button.querySelector('.spell-name').textContent;
            console.log(`Cast spell: ${spellName}`);
        });
    });
});
