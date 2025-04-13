# 🍽️ Restaurant Management Website

**Restaurant Management Website** is a full-stack MERN application built to streamline restaurant operations and enhance the customer experience. This platform allows users to browse foods, place orders, manage their items, and more — all through a modern, responsive, and feature-rich web interface.

---

## 🚀 Live Site

🌐 [Visit Live Website](https://restaurant-management-ac40f.web.app/)

---

## 🔑 Key Features

- **User Authentication**: Login/Register via email & password or social login (Google).
- **JWT Security**: Token-based authentication and protected routes.
- **Responsive UI**: Optimized for mobile, tablet, and desktop screens.
- **Food Management**:
  - Add, edit, and delete user's own foods.
  - View top-selling foods.
  - Real-time search and pagination.
- **Order System**:
  - Order food with live stock validation.
  - Prevent self-ordering and over-purchasing.
  - Auto-timestamped orders.
- **Gallery Page**:
  - Lightbox-enabled image gallery.
- **Dark/Light Theme**: User toggleable theme switcher.
- **Toast & Alerts**: Toastify notifications throughout.
- **Secure .env Setup**: Firebase and MongoDB credentials stored safely using environment variables.

---

## 🧩 Pages & Structure

- `/` — Home (Banner, Top Foods, Opening Hour,Review)
- `/allFoods` — All Foods (Searchable, Paginated)
- `/allFood/:id` — Single Food Details
- `/orderFood/:id` — Food Order Page (Private)
- `/gallery` — Static Gallery with Lightbox
- `/addFood` — Add Food Page (Private)
- `/myFood` — View & Edit Added Foods (Private)
- `/myOrder` — View Orders (Private)
- `/login` & `/register` — Authentication Pages

---

## 🧭 Layout Structure

### Navbar

- Logo / Site Name
- Routes: Home, All Foods, Gallery
- Conditional login/logout
- Profile image (if logged in) with dropdown:
  - My Foods
  - Add Food
  - My Orders

### Home Page

- **Banner**: Animated title, description & image, CTA to All Foods
- **Top Foods**: Top 6 based on order count
- **Opening Hour**: Invited customers, mentioning opening hours
- **What Our Customer Say**: Customers Review Section

### All Foods Page

- Page title
- All food items in grid layout
- Search by name
- Pagination (default: 9 per page)
- Quantity info + Details button

### Single Food Page

- Complete food details
- Purchase count
- **Buy Now button**

### Order Page (Private)

- Form with pre-filled buyer info
- Purchase quantity validation
- Save to DB on submit
- Showing Toast on success

### Gallery Page

- 10+ static images
- Click to enlarge via lightbox

### My Foods Page (Private)

- View foods added by user
- Update/Delete actions
- Modal for update food

### Add Food Page (Private)

- Form with:
  - Name, Image, Category, Quantity, Price, Origin, Description
  - Auto-filled user name & email
- Toast on success

### My Orders Page (Private)

- Orders placed by the user
- Date formatted with `moment`
- Delete functionality

---

## 📦 npm Packages Used

### Frontend

- `react`
- `react-router-dom`
- `firebase`
- `axios`
- `react-icons`
- `react-toastify`
- `moment`
- `tailwindcss`
- `framer-motion`
- `tanstack/react-query`
- `yet-another-react-lightbox`

### Backend

- `express`
- `cors`
- `dotenv`
- `mongoose`
- `jsonwebtoken`
- `cookie-parser`

---

## 🛠 Technologies Used

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="JavaScript" />
  <img src="https://cdn.simpleicons.org/react/61DAFB" height="40" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="Express" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="MongoDB" />
  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" height="40" alt="Firebase" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="HTML5" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="Tailwind CSS" />
</div>

---

## 🔐 Security Measures

- Firebase credentials secured via `.env.local` file.
- Use Http-Cookie to secure token get from server side.
- Role-based route protection for sensitive pages.

---

## 📁 Related Repository Links

- **Server Repo**: [GitHub - Server](https://github.com/coder-binary1/11-restaurant-management-server)
