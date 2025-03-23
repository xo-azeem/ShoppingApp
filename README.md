# ShoppingApp
# React Native Shopping App

A React Native mobile application that fetches and displays products from the FakeStore API with category filtering capabilities.

## 📱 App Preview

<div align="center">
  <img src="![1742750490800](https://github.com/user-attachments/assets/17eafd14-2935-4948-a202-136e6b791e3f)
" alt="Home Screen" width="300" />
  <img src="![1742750490794](https://github.com/user-attachments/assets/77bab244-24f0-4cce-b5ec-35c926758dab)
" alt="Filtered Products" width="300" />
</div>

## ✨ Features

- Displays product catalog from FakeStore API
- Filter products by categories
- Responsive and modern UI with Proxima Nova font
- Clean and reusable component architecture

## 🛠️ Technologies Used

- React Native / Expo
- React Hooks (useState, useEffect)
- Axios for API requests
- FlatList for efficient rendering
- Custom fonts integration

## 📋 API Integration

This app demonstrates React Native's capability to integrate with external APIs:

- Uses the FakeStore API (https://fakestoreapi.com/)
- Fetches product data when the app loads with useEffect
- Stores fetched data using useState
- Displays data in a FlatList for optimal performance

## 🔍 Component Structure

```
ShoppingApp/
├── src/
│   ├── components/
│   │   ├── ProductItem.js  - Individual product rendering
│   │   └── ProductList.js  - FlatList implementation
│   ├── screens/
│   │   └── HomeScreen.js   - Main screen with filter functionality
│   └── utils/
│       └── FontUtils.js    - Font loading utilities
├── assets/
│   └── fonts/              - Custom font files
├── App.js                  - Entry point
└── README.md               - You are here!
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI (optional)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ShoppingApp.git
cd ShoppingApp
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npx expo start
# or
npm start
```
## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Made with ❤️ by Muhammad Azeem</p>
</div>
