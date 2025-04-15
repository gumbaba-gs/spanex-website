The background color of the FoodWasteCounter section has been updated to use var(--color-sea-salt), creating a visually distinct alternating section effect that matches the website's design palette. AboutSection remains with var(--color-alabaster), ensuring clear separation between the two sections.

Create a new ContactSection; 

Uses global CSS variables consistently for colors, spacing, and typography
Implements alternating section styling that matches AboutSection and TechnologySection
Maintains a consistent container width that matches other sections
Uses the same heading styles and text sizes as other sections
Follows the established responsive patterns
Includes animations that match the scroll-triggered animations in other sections
implemtthe StandardizedTabs component for tabbed content.
Structure the code to ensure the container width and nested content follows the same pattern as the updated AboutSection and TechnologySection.
Add product card styles that match the site's design language, especially maintaining consistent use of colors, shadows, and interactions.
Update the HomePage to place the ContactSection in the correct order within the page flow after ProductSection.
Ensure all features like product modals, badges, and interactive elements follow the established patterns and accessibility practices from the rest of the site.




Primary Colors:

Dark Green: #2d5500 - For primary content, headers, and important UI elements
Brown: #87643e - For secondary elements, footer, and accents
Coral/Orange: #ff6e4e - For call-to-action buttons, highlights, and important links
Bright Orange: #fea201 - For secondary highlights and special features
Bright Yellow: #ffe02a - For accents, decorative elements, and hover states

Additional Recommendations:

Use dark green (#2d5500) as your primary brand color for cohesion
Use the coral (#ff6e4e) for call-to-action buttons and important interactive elements
Brown (#87643e) works well for footer backgrounds or secondary sections
The bright colors (orange and yellow) should be used sparingly as accents
Add complementary neutral colors (whites, off-whites, and grays) to balance the vibrant palette

This tropical-inspired palette gives your website a warm, energetic feel while ensuring good contrast for readability. The colors evoke natural, organic themes that would work well for a food, agriculture, or eco-friendly business website.


  // Fruit data for background animation
  const fruits = [
    { emoji: "🍎", size: 40, rotation: 15 },    // Apple
    { emoji: "🍇", size: 35, rotation: -10 },   // Grapes
    { emoji: "🍓", size: 30, rotation: 5 },     // Strawberry
    { emoji: "🥑", size: 45, rotation: -5 },    // Avocado
    { emoji: "🫐", size: 25, rotation: 20 },    // Blueberries
    { emoji: "🍊", size: 35, rotation: -15 },   // Orange
    { emoji: "🍋", size: 32, rotation: 8 },     // Lemon
    { emoji: "🥭", size: 40, rotation: -8 },    // Mango
    { emoji: "🍍", size: 48, rotation: 12 },    // Pineapple
    { emoji: "🍑", size: 35, rotation: -12 },   // Peach
    { emoji: "🍉", size: 50, rotation: 5 },     // Watermelon
    { emoji: "🥝", size: 28, rotation: -5 },    // Kiwi
    { emoji: "🍈", size: 40, rotation: 10 },    // Melon
    { emoji: "🍐", size: 38, rotation: -10 },   // Pear
    { emoji: "🥕", size: 35, rotation: 25 },    // Carrot
    { emoji: "🥬", size: 40, rotation: -20 },   // Leafy Green
  ];