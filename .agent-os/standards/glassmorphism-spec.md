# Glassmorphism Design Specification

## Overview

This specification defines the glassmorphism design system for the Smart Care application, ensuring consistent visual aesthetics and user experience across all components.

## Design Principles

### Core Glassmorphism Elements

- **Semi-transparent backgrounds** with varying opacity levels
- **Backdrop blur effects** for depth and layering
- **Subtle borders** with transparency
- **Layered depth** through multiple glass surfaces
- **Smooth animations** and transitions

### Color Palette

#### Primary Colors

- **Glass White**: `rgba(255, 255, 255, 0.1)` - Base glass background
- **Glass White 20**: `rgba(255, 255, 255, 0.2)` - Elevated surfaces
- **Glass White 30**: `rgba(255, 255, 255, 0.3)` - High emphasis
- **Glass White 50**: `rgba(255, 255, 255, 0.5)` - Text on glass
- **Glass White 70**: `rgba(255, 255, 255, 0.7)` - High contrast text

#### Accent Colors

- **Primary Purple**: `#a855f7` - Main brand color
- **Success Green**: `#10b981` - Success states
- **Warning Amber**: `#f59e0b` - Warning states
- **Error Red**: `#ef4444` - Error states
- **Info Blue**: `#3b82f6` - Information states

#### Background Gradients

- **Primary Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Secondary Gradient**: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- **Success Gradient**: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- **Warning Gradient**: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`

## Component Variants

### GlassCard Variants

#### Default

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 24px;
```

#### Elevated

```css
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

#### Subtle

```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

#### Feature

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
transition: all 0.3s ease;
```

### GlassButton Variants

#### Primary

```css
background: rgba(168, 85, 247, 0.2);
backdrop-filter: blur(10px);
border: 1px solid rgba(168, 85, 247, 0.3);
color: rgba(255, 255, 255, 0.9);
```

#### Secondary

```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
color: rgba(255, 255, 255, 0.8);
```

#### Ghost

```css
background: transparent;
backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.1);
color: rgba(255, 255, 255, 0.7);
```

## Animation Specifications

### Transition Timing

- **Fast**: 150ms - Micro-interactions
- **Normal**: 300ms - Standard transitions
- **Slow**: 500ms - Complex animations
- **Very Slow**: 1000ms - Background animations

### Easing Functions

- **Ease Out**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` - Standard easing
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth transitions
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Playful animations

### Hover Effects

```css
.glass-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-hover:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Focus Effects

```css
.glass-focus:focus {
  outline: none;
  border-color: rgba(168, 85, 247, 0.5);
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}
```

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", sans-serif;
```

### Text Colors

- **Primary Text**: `rgba(255, 255, 255, 0.9)` - High contrast
- **Secondary Text**: `rgba(255, 255, 255, 0.7)` - Medium contrast
- **Muted Text**: `rgba(255, 255, 255, 0.5)` - Low contrast
- **Accent Text**: `#a855f7` - Brand color

### Text Sizes

- **xs**: 12px - Small labels
- **sm**: 14px - Body text
- **base**: 16px - Default text
- **lg**: 18px - Large text
- **xl**: 20px - Headings
- **2xl**: 24px - Large headings
- **3xl**: 30px - Page titles

## Spacing System

### Padding Scale

- **xs**: 4px - Tight spacing
- **sm**: 8px - Small spacing
- **md**: 16px - Medium spacing
- **lg**: 24px - Large spacing
- **xl**: 32px - Extra large spacing
- **2xl**: 48px - Section spacing

### Margin Scale

- **xs**: 4px - Tight margins
- **sm**: 8px - Small margins
- **md**: 16px - Medium margins
- **lg**: 24px - Large margins
- **xl**: 32px - Extra large margins
- **2xl**: 48px - Section margins

## Responsive Design

### Breakpoints

- **sm**: 640px - Small screens
- **md**: 768px - Medium screens
- **lg**: 1024px - Large screens
- **xl**: 1280px - Extra large screens
- **2xl**: 1536px - Ultra wide screens

### Mobile Adaptations

- Reduced blur effects for performance
- Larger touch targets (44px minimum)
- Simplified animations
- Stacked layouts

## Accessibility

### Contrast Requirements

- **AA Level**: 4.5:1 for normal text
- **AAA Level**: 7:1 for large text
- **Enhanced**: 3:1 for UI elements

### Focus Indicators

- Visible focus rings
- High contrast colors
- Sufficient size (2px minimum)
- Smooth transitions

### Screen Reader Support

- Semantic HTML elements
- ARIA labels and roles
- Descriptive alt text
- Logical tab order

## Implementation Guidelines

### CSS Custom Properties

```css
:root {
  --glass-white: rgba(255, 255, 255, 0.1);
  --glass-white-20: rgba(255, 255, 255, 0.2);
  --glass-white-30: rgba(255, 255, 255, 0.3);
  --glass-blur: blur(10px);
  --glass-border: 1px solid rgba(255, 255, 255, 0.2);
  --glass-radius: 24px;
  --glass-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        glass: {
          white: "rgba(255, 255, 255, 0.1)",
          "white-20": "rgba(255, 255, 255, 0.2)",
          "white-30": "rgba(255, 255, 255, 0.3)",
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },
    },
  },
};
```

This glassmorphism specification ensures consistent, beautiful, and accessible design across the entire Smart Care application.
