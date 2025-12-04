# Setup Guide - Habit Haunt

## 🚀 Quick Start

### No Installation Required!

This is a pure HTML/CSS/JavaScript project with **zero dependencies**. No npm, no build process, no configuration files.

### Method 1: Direct Browser Open (Easiest)

1. Download or clone the repository
2. Navigate to the project folder
3. Double-click `index.html`
4. Start battling your demons! 👹

### Method 2: Local Server (Recommended)

Using a local server prevents CORS issues and provides a better development experience.

#### Python 3
```bash
cd habit-haunt
python -m http.server 8000
```
Then open: `http://localhost:8000`

#### Node.js (npx)
```bash
cd habit-haunt
npx serve
```
Then open: `http://localhost:3000`

#### PHP
```bash
cd habit-haunt
php -S localhost:8000
```
Then open: `http://localhost:8000`

#### VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

---

## 📁 File Structure

```
habit-haunt/
├── .kiro/                    # Documentation directory
│   ├── DESIGN.md            # Design system
│   ├── DEVELOPMENT.md       # Development process
│   ├── FEATURES.md          # Feature documentation
│   ├── project-info.md      # Project details
│   ├── SETUP.md             # This file
│   └── README.md            # Directory overview
├── index.html               # Main HTML (all 6 pages)
├── styles.css               # Complete styling (~1000 lines)
├── script.js                # Navigation & interactivity
├── README.md                # Project README
└── HACKATHON_SUBMISSION.md  # Hackathon details
```

---

## 🌐 Browser Compatibility

### Recommended Browsers
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

### Required Features
- CSS Grid support
- CSS Flexbox support
- CSS backdrop-filter (for glassmorphism)
- ES6 JavaScript (arrow functions, const/let)
- CSS animations and transforms

### Fallbacks
- Glassmorphism degrades gracefully on unsupported browsers
- Animations can be disabled for performance
- Core functionality works without advanced CSS

---

## 🧪 Testing the Application

### 1. Landing Page
- ✅ Check fog animation movement
- ✅ Verify bat flying patterns
- ✅ Test "Start Your Escape" button
- ✅ Confirm particle effects

### 2. Habit Input Page
- ✅ Test all form inputs
- ✅ Verify candle flicker animation
- ✅ Try submitting without habit name (should alert)
- ✅ Submit valid form and check navigation

### 3. Monster Profile Page
- ✅ Verify monster name displays
- ✅ Check stat bar animations
- ✅ Test "Enter Battle" button
- ✅ Confirm blood drip effects

### 4. Battle Dashboard
- ✅ Check HP bars display correctly
- ✅ Complete tasks and verify HP reduction
- ✅ Test spell button hover effects
- ✅ Navigate to Progress Map and Analytics

### 5. Progress Map
- ✅ Verify lantern glow animations
- ✅ Check moonlight beam effects
- ✅ Test different node states (completed, failed, current, locked)
- ✅ Confirm back button works

### 6. Analytics Page
- ✅ Check flame meter animation
- ✅ Verify ghost chart bars
- ✅ Test blood progress bar shimmer
- ✅ Confirm power stats display

---

## 🎨 Customization Guide

### Change Color Scheme

Edit `styles.css` and replace these colors:

```css
/* Primary Purple */
#8a2be2 → Your color

/* Dark Purple */
#4b0082 → Your color

/* Light Purple */
#b19cd9 → Your color

/* Blood Red */
#ff0000 → Your color
```

### Modify Monster Stats

Edit `index.html` in the Monster Profile section:

```html
<!-- Change the width percentage -->
<div class="stat-fill fear-fill" style="width: 85%"></div>
```

### Add More Tasks

In `index.html`, Battle Dashboard section:

```html
<div class="task-item">
    <input type="checkbox" id="task5" class="task-checkbox">
    <label for="task5">Your new task</label>
    <span class="damage-badge">-XX HP</span>
</div>
```

### Adjust Animation Speed

In `styles.css`, modify animation durations:

```css
/* Slower fog */
animation: fogMove 40s infinite linear;

/* Faster candles */
animation: candleFlicker 1s infinite;
```

---

## 🐛 Troubleshooting

### Issue: Animations not working
**Cause**: Browser doesn't support CSS animations  
**Solution**: Update to latest browser version

### Issue: Glassmorphism not visible
**Cause**: Browser doesn't support backdrop-filter  
**Solution**: Use Chrome/Edge/Safari (Firefox has limited support)

### Issue: JavaScript not working
**Cause**: Script not loaded or browser console errors  
**Solution**: 
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Verify `script.js` is in same directory as `index.html`

### Issue: Page navigation not working
**Cause**: JavaScript error or missing script  
**Solution**: Check that `script.js` is loaded in `index.html`

### Issue: Styles not applying
**Cause**: CSS file not loaded  
**Solution**: Verify `styles.css` is in same directory and linked correctly

### Issue: Slow performance
**Cause**: Too many animations on low-end device  
**Solution**: Reduce animation complexity or disable some effects

---

## 📱 Mobile Testing

### iOS Safari
1. Open in Safari browser
2. Test touch interactions
3. Verify responsive layout
4. Check animation performance

### Android Chrome
1. Open in Chrome browser
2. Test all interactive elements
3. Verify glassmorphism effects
4. Check scroll behavior

### Responsive Testing
Use browser DevTools:
1. Press F12
2. Click device toolbar icon
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px+

---

## ⚡ Performance Tips

### For Development
- Use local server instead of file://
- Keep DevTools open to monitor performance
- Test on actual mobile devices when possible

### For Production
- Minify CSS and JavaScript
- Optimize images (if added)
- Enable gzip compression
- Use CDN for hosting
- Implement service worker for PWA

---

## 🔧 Development Tools

### Recommended VS Code Extensions
- Live Server
- HTML CSS Support
- JavaScript (ES6) code snippets
- Prettier (code formatter)
- ESLint (code linting)

### Browser DevTools
- **Elements**: Inspect and modify HTML/CSS
- **Console**: Debug JavaScript
- **Network**: Check file loading
- **Performance**: Analyze animations
- **Device Mode**: Test responsive design

---

## 📚 Additional Resources

### Learning Resources
- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [CSS Tricks](https://css-tricks.com/) - CSS techniques
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Inspiration
- [Dribbble](https://dribbble.com/) - Design inspiration
- [CodePen](https://codepen.io/) - Code examples
- [Awwwards](https://www.awwwards.com/) - Web design awards

---

## 🤝 Contributing

Want to improve Habit Haunt? Here's how:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style Guidelines
- Use 4 spaces for indentation
- Comment complex logic
- Follow existing naming conventions
- Keep functions small and focused
- Test on multiple browsers

---

## 📝 Version History

**v1.0.0** (December 2025)
- Initial MVP release
- 6 complete pages
- 20+ animations
- Full responsive design
- Zero dependencies

---

## 🎃 Ready to Battle!

You're all set! Open `index.html` and start conquering your habit demons.

**Need help?** Check the other documentation files in the `.kiro` directory.

---

**Happy Haunting!** 👻🦇🎃
