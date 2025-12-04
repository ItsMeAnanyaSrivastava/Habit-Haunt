# Features Documentation - Habit Haunt

## 🎮 Complete Feature List

### 1. Landing Page 🏰

**Purpose**: Welcome users and set the horror atmosphere

**Visual Elements**:
- Haunted castle silhouette background
- Multi-layer animated fog (2 layers at different speeds)
- Flying bats with bezier curve paths
- Floating particle effects
- Glowing neon purple title with glitch effect
- Atmospheric tagline
- Large "Start Your Escape" button with glow

**Interactions**:
- Button hover: Scale up + increased glow
- Continuous fog movement
- Bat flight patterns
- Particle floating animation

**Technical Implementation**:
```css
- CSS animations: fogMove, batFly, glitch, pulse, particleFloat
- Backdrop effects with multiple layers
- Transform-based animations for performance
```

---

### 2. Habit Input Page 🕯️

**Purpose**: Collect user's bad habit information

**Visual Elements**:
- Ritual chamber background
- Floating candles on left and right (with flame flicker)
- Glassmorphism input panel
- Runic-styled labels with lightning bolt icons
- Three input fields (habit name, frequency, reason)
- Blood-red "Summon Your Monster" button

**Form Fields**:
1. **Habit Name** (text input)
   - Placeholder: "e.g., Procrastination, Smoking, Junk Food"
   - Required field
   
2. **Frequency** (dropdown)
   - Options: Daily, Multiple times per day, Weekly
   
3. **Reason** (textarea)
   - Placeholder: "What pain does this habit cause you?"
   - 3 rows

**Interactions**:
- Input focus: Border glow effect
- Candle flame flicker animation
- Button hover: Scale + shadow increase
- Form validation on submit

**Technical Implementation**:
```javascript
- Form data collection
- Validation before monster generation
- Dynamic monster name creation
- Page navigation on submit
```

---

### 3. Monster Profile Page 👹

**Purpose**: Display the user's personalized habit monster

**Visual Elements**:
- Stone frame with cracked texture
- Monster emoji art (👹) with pulsing glow
- Monster name (generated from habit)
- Blood drip divider
- Four animated stat bars
- Weakness description box
- "Enter Battle" button

**Stats Display**:
1. **Fear Level** (red gradient bar)
   - Represents how intimidating the habit feels
   - Default: 85/100
   
2. **Strength** (dark red gradient bar)
   - Shows how ingrained the habit is
   - Default: 70/100
   
3. **Resistance** (purple gradient bar)
   - User's current willpower level
   - Default: 30/100
   
4. **Health** (green gradient bar)
   - Monster's remaining power
   - Default: 100/100

**Weakness Section**:
- Red-tinted box
- Lists habit-breaking strategies
- Example: "Daily discipline and consistent action"

**Interactions**:
- Stat bars animate on page load (0% → target%)
- Monster art pulses continuously
- Button hover effects
- Blood drip animation

**Technical Implementation**:
```css
- Gradient stat bars with box-shadow glow
- Keyframe animations for pulse effect
- Glassmorphism panel styling
- Responsive stat bar widths
```

---

### 4. Battle Dashboard ⚔️

**Purpose**: Main interaction hub for daily habit-breaking

**Layout Sections**:

#### A. HP Display (Top)
- **Player HP Bar** (purple gradient)
  - Label: "Your Willpower"
  - Current: 80/100
  - Decreases when user fails tasks
  
- **Monster HP Bar** (red gradient)
  - Label: "Monster Health"
  - Current: 65/100
  - Decreases when user completes tasks

#### B. Daily Tasks Panel (Left)
**Task List** (4 default tasks):
1. ☐ Morning meditation (10 min) - **-10 HP**
2. ☐ Avoid trigger for 4 hours - **-15 HP**
3. ☐ Journal your progress - **-8 HP**
4. ☐ Complete one productive task - **-12 HP**

**Task Features**:
- Checkbox for completion
- Damage badge showing HP reduction
- Hover effect (background glow)
- Opacity change when completed

#### C. Spell Actions Panel (Right)
**Available Spells**:
1. 🔮 **Focus Blast**
   - Description: "Deal 20 damage"
   - Cost: 15 MP
   
2. 🛡️ **Discipline Shield**
   - Description: "Block temptation"
   - Cost: 20 MP
   
3. ⚡ **Willpower Surge**
   - Description: "Restore 15 HP"
   - Cost: 25 MP

**Spell Features**:
- Ripple effect on hover
- Click animation (scale down/up)
- Gradient background
- Icon + name + description layout

#### D. Navigation (Bottom)
- 🗺️ Map button → Progress Map
- 📊 Stats button → Analytics

**Interactions**:
- Task checkbox: Reduces monster HP by damage amount
- Spell button: Visual feedback + console log
- HP bars: Smooth width transition
- Real-time stat updates

**Technical Implementation**:
```javascript
// Task completion handler
checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        // Reduce monster HP
        const currentWidth = parseInt(monsterHpFill.style.width);
        const newWidth = Math.max(0, currentWidth - 5);
        monsterHpFill.style.width = newWidth + '%';
        
        // Visual feedback
        e.target.parentElement.style.opacity = '0.6';
    }
});
```

---

### 5. Progress Map 🌲

**Purpose**: Visualize user's journey and streak

**Visual Elements**:
- Haunted forest background
- Moonlight beams (2 animated beams)
- Path nodes in a row
- Floating particles
- Glass panel header

**Node Types**:

1. **Completed Days** (🏮 Lit Lantern)
   - Glowing yellow/orange
   - Pulsing animation
   - Label: "Day X"
   
2. **Failed Days** (🪦 Tombstone)
   - Grayscale filter
   - Shake animation on load
   - Label: "Day X"
   
3. **Current Day** (🏮 Purple Lantern)
   - Glowing purple
   - Larger pulse animation
   - Label: "Today"
   
4. **Future Days** (🏮 Dark Lantern)
   - Low opacity (30%)
   - No glow
   - Label: "Day X"

**Example Path**:
```
Day 1: ✅ Lit Lantern
Day 2: ✅ Lit Lantern
Day 3: ✅ Lit Lantern
Day 4: ❌ Tombstone
Day 5: ✅ Lit Lantern
Day 6: 📍 Current (glowing purple)
Day 7: 🔒 Locked (dark)
Day 8: 🔒 Locked (dark)
```

**Interactions**:
- Moonbeams shift up/down slowly
- Particles float upward
- Lanterns pulse continuously
- Current day has enhanced glow
- Back button returns to battle

**Technical Implementation**:
```css
.lantern.lit::before {
    background: radial-gradient(circle, #ffff00, #ffaa00);
    box-shadow: 0 0 30px #ffaa00, 0 0 50px rgba(255, 170, 0, 0.5);
    animation: lanternGlow 2s infinite;
}

@keyframes lanternGlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
}
```

---

### 6. Analytics Page 📊

**Purpose**: Display progress statistics and metrics

**Dashboard Cards**:

#### Card 1: Consistency Meter 🔥
- Vertical flame meter
- Fill height: 73%
- Animated flame icon
- Text: "73% Streak"
- Red/orange gradient fill

#### Card 2: Ghost Chart 👻
- 7 vertical bars (one per day)
- Heights vary (60%, 75%, 45%, 85%, 90%, 70%, 95%)
- Purple gradient bars
- Hover effect: Lighter color + increased glow
- Text: "Weekly Progress"

#### Card 3: Damage Dealt 🩸
- Horizontal blood progress bar
- Fill width: 65%
- Red gradient with shimmer effect
- Text: "65/100 HP Destroyed"

#### Card 4: Power Stats ⚡
- Table format with 4 rows:
  - Total Days: 21
  - Victories: 15
  - Current Streak: 5
  - Best Streak: 8
- Purple accent numbers
- Border between rows

**Visual Effects**:
- Cards hover: Lift up + shadow increase
- Flame flickers continuously
- Blood bar has shimmer animation
- Chart bars pulse on hover

**Interactions**:
- All cards have hover lift effect
- Back button returns to battle
- Stats update based on user progress

**Technical Implementation**:
```css
.blood-bar > div::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}
```

---

## 🎨 Cross-Page Features

### Glassmorphism Panels
- Used on all pages for content containers
- Consistent styling: `rgba(20, 10, 30, 0.7)` background
- Backdrop blur: 10px
- Purple border glow

### Navigation System
- JavaScript-based page switching
- Fade-in animation on page load
- No page refresh (SPA-like experience)
- Smooth transitions

### Responsive Design
- Mobile breakpoint: 768px
- Tablet-optimized layouts
- Touch-friendly button sizes
- Stacked layouts on small screens

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- High contrast ratios
- Focus indicators on interactive elements

### Performance
- CSS transforms for animations (GPU-accelerated)
- Minimal DOM manipulation
- Optimized animation frame rates
- Lazy loading considerations

---

## 🔮 Future Features (Roadmap)

### v1.1
- [ ] Local storage persistence
- [ ] Multiple habit tracking
- [ ] Achievement badges
- [ ] Sound effects

### v2.0
- [ ] User authentication
- [ ] Cloud data sync
- [ ] Social features
- [ ] AI-generated monsters
- [ ] Custom task creation

### v3.0
- [ ] Mobile app
- [ ] VR battle mode
- [ ] AI habit coach
- [ ] Community challenges

---

**Total Features**: 30+ interactive elements across 6 pages  
**Animations**: 20+ custom CSS animations  
**User Actions**: 15+ interactive touchpoints
