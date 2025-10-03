# Shopping Assistant Design Guidelines

## Design Approach
**Selected System:** Apple Human Interface Guidelines (HIG)
**Justification:** iOS-focused shopping assistant requiring clean, familiar patterns for quick task completion. Users need to focus on finding items efficiently, not learning new interfaces.

**Core Principles:**
- Clarity through hierarchy and purposeful use of whitespace
- Deference: UI recedes when displaying content (maps, lists)
- Depth through subtle layers and transitions
- Native iOS feel optimized for touch and gesture interactions

## Color Palette

**Light Mode:**
- Primary: 0 0% 7% (near-black text)
- Secondary: 0 0% 45% (secondary text, icons)
- Accent: 211 100% 50% (iOS blue for CTAs, links)
- Background: 0 0% 100% (white)
- Surface: 0 0% 96% (light gray cards)
- Success: 142 76% 36% (in-stock indicators)
- Border: 0 0% 88%

**Dark Mode:**
- Primary: 0 0% 100% (white text)
- Secondary: 0 0% 65%
- Accent: 209 100% 60% (lighter iOS blue)
- Background: 0 0% 8% (dark gray)
- Surface: 0 0% 14% (elevated cards)
- Success: 142 70% 45%
- Border: 0 0% 22%

## Typography
**Font Family:** SF Pro Display via system font stack (-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)

**Scale:**
- Hero/Large Title: 34px, bold (page headers)
- Title 1: 28px, semibold (section headers)
- Title 2: 22px, semibold (card headers)
- Title 3: 20px, semibold (list section headers)
- Body: 17px, regular (primary content)
- Callout: 16px, regular (secondary info)
- Caption: 12px, regular (metadata, distances)

## Layout System
**Spacing Units:** Tailwind units of 2, 4, 6, and 8 (p-2, m-4, gap-6, h-8)
**Container:** max-w-md (mobile-first, 448px max width)
**Padding:** px-4 for screen edges, py-6 for sections
**Border Radius:** rounded-xl (12px) for cards, rounded-lg (8px) for inputs

## Component Library

### Navigation
**Top Bar:** Sticky header with back button, page title (centered), action icon (right)
- Height: h-14
- Background: Translucent blur effect (backdrop-blur-xl)
- Border: Bottom 1px border in light mode only

**Tab Bar (Bottom Navigation):** Fixed bottom bar with 4 icons
- Icons: Search, Lists, Stores, Profile
- Active state: Accent color with label
- Height: h-16 with safe-area-inset-bottom

### Search Interface
**Search Bar:** Prominent rounded input with search icon
- Background: Surface color
- Height: h-12
- Icon: Leading search icon (gray)
- Clear button: Trailing X when active

**Recent Searches:** Chips below search bar
- Rounded-full pills with light gray background
- Dismissible with × icon

### Cards & Lists
**Store Card:** Elevated card showing store info
- Store name (Title 2)
- Distance badge (Caption, secondary color)
- Address (Callout, secondary)
- Stock status chip (Success color for in-stock)
- Right chevron for navigation
- Padding: p-4, gap-3

**Item Card:** Horizontal layout
- Item image thumbnail (w-16 h-16, rounded-lg)
- Item details (name, location in store)
- Action buttons (Edit, Delete as icons)

**List Items:** Clean separators between items
- Swipe actions: Delete (red), Edit (blue)
- Checkboxes: iOS-style rounded squares

### Map Integration
**Map View:** Full-width embedded map
- Height: h-96 for store locator
- Store markers: Custom pins with store logo
- Current location: Blue pulsing dot
- Controls: Zoom buttons (bottom-right)

**In-Store Map:** Interactive floor plan
- Path visualization: Dashed blue line showing optimal route
- Item markers: Numbered circles (1, 2, 3...)
- You-are-here indicator: Blue dot with accuracy ring
- Pan and zoom enabled

### Forms & Inputs
**Text Inputs:** Borderless with bottom border
- Background: Surface color
- Focus state: Accent color bottom border (2px)
- Labels: Caption size above input

**Buttons:**
- Primary: Filled accent color, rounded-lg, h-12
- Secondary: Outline with accent border
- Text buttons: Accent color text only

**Toggle Switches:** iOS-style with smooth animation
- Off: Gray background
- On: Accent color

### Grocery List Features
**Add Items Interface:** Modal bottom sheet
- Search-as-you-type
- Category filters (chips)
- Quick add button per item

**List View:**
- Grouped by store or category
- Drag handles for reordering
- Batch actions toolbar when items selected

**Route Optimization Display:**
- Visual path preview
- Estimated time badge
- Step-by-step numbered list
- "Start Navigation" prominent CTA

### Data Display
**Distance Indicators:** Badge with location pin icon
- Format: "2.3 mi" or "0.5 mi"
- Color: Secondary text

**Stock Status:** Pill-shaped badge
- In Stock: Success color background
- Out of Stock: Red background
- Unknown: Gray background

**Store Hours:** Compact format with "Open" indicator
- Green "Open now" or red "Closed"
- Next opening/closing time

### Empty States
**No Results:** Centered illustration with message
- Icon (search, list, or location)
- Title (Title 2)
- Description (Body, secondary color)
- Action button if applicable

## Animations
**Purpose-Driven Only:**
- Page transitions: Slide from right (iOS standard)
- List updates: Fade in/out
- Map markers: Drop-in animation
- Pull-to-refresh: Standard iOS spinner
- Bottom sheets: Slide up with backdrop fade

**No Distracting Effects:** Focus on utility and speed

## Images
**Not Applicable:** This is a utility app. Product images only where user-provided or from database. No decorative hero images. Focus is on functionality over visuals.