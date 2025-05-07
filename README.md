# ZyraStore - Modern Fashion E-commerce Platform

ZyraStore is a full-featured e-commerce platform built with Next.js, TypeScript, and MongoDB, designed for fashion retailers.

## Features

- 🛍️ Product catalog with categories
- 🔍 Advanced search and filtering
- 🛒 Shopping cart functionality
- 👤 User authentication
- ❤️ Wishlist
- 📦 Order management
- 💳 Secure checkout
- 📱 Responsive design
- 🔐 Admin dashboard

## Prerequisites

- Node.js 18.x or later
- MongoDB 6.x or later
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zyrastore.git
   cd zyrastore
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/zyrastore
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
zyrastore/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable components
│   ├── lib/             # Utility functions
│   ├── models/          # MongoDB models
│   └── styles/          # Global styles
├── public/              # Static files
└── package.json         # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 