# Planning

1# - BUSINESS REQUIREMENTS

- very simple app, where users can order 1 or more shoes from the app
- requires no user accounts and no login: since its just a showcase challenge
- Users can add multiple shoes to a cart before ordering
- Users can see the cart and delete items from the cart
- Users can see and navigate photos of the shoe with a lightbox

#2 - Features and Pages

- Feature Categories

  1. Menu / Shoe(Since only one)
  2. Cart
  3. Lightbox

- Necessary Pages
  1. Homepage (in the design it is a 1 pager app)

#3 - State Management

- Feature Categories

  1. Menu / Shoe(Since only one)
  2. Cart
  3. Lightbox

- Types of state

  1. Menu / Shoe -> Global UI state
  2. Cart -> Global UI State
  3. LightBox -> Global UI State

- Technology Decisions
  - Routing - react-router-dom - so i can use useSearchParams hook
  - Styling - Styled Components - wanted to showcase my skill on this tech tool.
  - UI State management
    - Redux Toolkit (RTK) - Wanna show case my RTK skills
    - URL Params - using react-router-dom's useSearchParams i can share the app's current state to another user.

#
