# Spanex Website Component Template Requirements

## Component Structure

All section components in the Spanex website should follow this consistent two-part structure:

### 1. Section Header
```jsx
<div className="[section-name]__header">
  <h2 className="[section-name]__title">Section Title</h2>
  <p className="[section-name]__subtitle">
    Section subtitle text goes here
  </p>
</div>
```
Styling: properties should be from style or theme iif the style or them changes the properties should change
=

### 2. Main Content Container
```jsx
<div className="container">
  <div 
    ref={sectionRef}
    className={`[section-name]__container ${isVisible ? 'visible' : ''}`}
  >
    <div className="[section-name]__content-card">
      {/* Text content section */}
      <div className="[section-name]__text-container">
        <p className="[section-name]__text">
          Regular text with <span className="[section-name]__highlight">highlighted text</span> and
          <span className="[section-name]__highlight--secondary">secondary highlights</span>.
        </p>
        {/* More paragraphs as needed */}
      </div>
      
      {/* Tab navigation */}
      <div className="[section-name]__tabs">
        <button
          type="button"
          onClick={() => setActiveTab('tab1')}
          className={`[section-name]__tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
          aria-selected={activeTab === 'tab1'}
          role="tab"
        >
          Tab 1 Name
        </button>
        {/* Additional tabs as needed */}
      </div>
      
      {/* Tab content */}
      <div className="[section-name]__tab-content" role="tabpanel">
        {activeTab === 'tab1' && (
          <div className="[section-name]__tab1-content">
            {/* Tab 1 specific content */}
          </div>
        )}
        {/* Additional tab contents as needed */}
      </div>
      
      {/* For expandable items, use this pattern */}
      <div className="[section-name]__list-items">
        <h3 className="[section-name]__list_item-title">Title for List</h3>
        
        <div className="[section-name]__list_item-list">
          <div className={`[section-name]__list-item ${expandedItem === 'item1' ? '[section-name]__list-item--expanded' : ''}`}>
            <button 
              className="[section-name]__list-item-header"
              onClick={() => toggleItem('item1')}
              aria-expanded={expandedItem === 'item1'}
            >
              <div className="[section-name]__list-item-icon">
                <span aria-hidden="true">Icon</span>
              </div>
              <div className="[section-name]__list-item-info">
                <h4 className="[section-name]__list-item-title">Item Title</h4>
                <p className="[section-name]__list-item-description">Item description</p>
              </div>
              <div className="[section-name]__list-item-toggle">
                <i className={`fas fa-chevron-down ${expandedItem === 'item1' ? '[section-name]__toggle-icon--expanded' : ''}`}></i>
              </div>
            </button>
            
            {/* Details shown when expanded */}
            {expandedItem === 'item1' && (
              <div className="[section-name]__list-item-details">
                <ul className="[section-name]__details-list">
                  <li className="[section-name]__details-item">Detail item 1</li>
                  {/* More list items as needed */}
                </ul>
              </div>
            )}
          </div>
          {/* More list-item items as needed */}
        </div>
      </div>
    </div>
    
</div>
```

## CSS Requirements



.[section-name] {
  padding: var(--space-12) 0;
  position: relative;
  overflow: hidden;
  
  /* Background with gradient overlay */
  background: linear-gradient(
    rgba(11, 61, 145, 0.9), 
    rgba(0, 128, 128, 0.9)
  ), url('./images/background-image.jpg') center/cover no-repeat;
  position: relative;
}

/* Glowing effect overlay */
.[section-name]::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.15), transparent 70%);
  pointer-events: none;
  z-index: 1;
}

/* Section header */
.[section-name]__header {
  text-align: center;
  margin-bottom: var(--space-8);
  position: relative;
  z-index: 2;
  padding: 0 var(--space-4);
}

.[section-name]__title {
  color: white;
  margin-bottom: var(--space-3);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.[section-name]__subtitle {
  color: white;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  font-size: var(--font-size-base);
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Container styles */
.[section-name]__container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.[section-name]__container.visible {
  opacity: 1;
  transform: translateY(0);
}

.[section-name]__content-card {
  background: linear-gradient(45deg, rgba(11, 61, 145, 0.8), rgba(0, 128, 128, 0.9));
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 255, 255, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: var(--space-6);
}

/* Text styling */
.[section-name]__text-container {
  margin-bottom: 1.5rem;
}

.[section-name]__text {
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: white;
}

.[section-name]__highlight {
  color: #00FFFF;
  font-weight: 600;
}

.[section-name]__highlight--secondary {
  color: #92F9F9;
  font-weight: 600;
}



## Responsive Design Requirements

Each component should use these responsive breakpoints consistently:

```css
/* Mobile First - Base styles are for mobile */

/* Small tablet and large phones */
@media (min-width: 480px) {
  /* Small tablet adjustments */
}

/* Medium tablets and small laptops */
@media (min-width: 768px) {
  /* Tablet adjustments */
}

/* Large desktop */
@media (min-width: 1024px) {
  /* Desktop adjustments */
}
```

## Color and Typography Standards

Use the CSS variables defined in your root variables:

- Primary Color: `var(--primary-color)`
- Secondary Color: `var(--secondary-color)` 
- Accent Color: `var(--accent-color)`
- Text on dark backgrounds: `white` with opacity variations
- Font sizes: Use the defined variables like `var(--font-size-base)`, `var(--font-size-lg)`, etc.
- Spacing: Use the defined spacing variables like `var(--space-4)`, `var(--space-6)`, etc.

## Gradient Standards

Maintain consistent gradient patterns across components:

1. **Section Background**: Vertical linear gradient (top to bottom)
   ```css
   background: linear-gradient(
     rgba(11, 61, 145, 0.9), 
     rgba(0, 128, 128, 0.9)
   ), url('./images/background-image.jpg') center/cover no-repeat;
   ```

2. **Content Card Background**: Diagonal linear gradient (45 degrees)
   ```css
   background: linear-gradient(45deg, rgba(11, 61, 145, 0.8), rgba(0, 128, 128, 0.9));
   ```

3. **CTA Button Background**: Diagonal linear gradient (45 degrees) matching content card
   ```css
   background: linear-gradient(45deg, rgba(11, 61, 145, 0.8), rgba(0, 128, 128, 0.9));
   ```

4. **Indicator Bar Active State**: Horizontal linear gradient (left to right)
   ```css
   background: linear-gradient(to right, var(--secondary-color), var(--accent-color));
   ```

## Animation Standards

Animations should be consistent across components:

- **Fade In**: For content appearing on scroll
- **Slide Up**: For content moving into view from below
- **Expansion**: For expandable sections

## Accessibility Requirements

- All interactive elements must have appropriate ARIA attributes
- Tab navigation should use `role="tab"` and `aria-selected`
- Expandable sections should use `aria-expanded`
- Decorative elements should use `aria-hidden="true"`
- Proper color contrast for text readability
- Keyboard navigable interactions

Following these requirements will ensure all sections of the Spanex website maintain consistent structure, styling, and behavior.