# Tech-Nest 🚀

A modern event management platform built with Next.js 14, featuring real-time analytics with PostHog and image management with Cloudinary. This project was created as a learning journey to explore Next.js App Router, Server Actions, and modern full-stack development practices.

## 🌟 Features

- **Event Management**: Create, view, and manage tech events
- **Real-time Analytics**: Track user interactions using PostHog
- **Image Handling**: Cloud-based image storage with Cloudinary
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Type Safety**: End-to-end TypeScript implementation
- **MongoDB Integration**: Robust data persistence with Mongoose

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, MongoDB with Mongoose
- **Analytics**: PostHog
- **Image Storage**: Cloudinary
- **Type Safety**: TypeScript
- **State Management**: React Hooks
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/tech-nest.git
   cd tech-nest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```env
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

Visit [TechNest](https://tech-nest-eta.vercel.app) to see the application.

## 📝 Learning Journey & Challenges

### Next.js App Router
Coming from pages router, adapting to the App Router was initially challenging. The new mental model of Server Components, Client Components, and how they interact took some time to grasp. Key learnings:

- Understanding when to use Server vs Client Components
- Managing state effectively with Server Components
- Implementing parallel routes and intercepting routes
- Leveraging server actions for form submissions

### PostHog Integration
Implementing PostHog for analytics was interesting, especially:
- Setting up proper event tracking
- Handling analytics in Server Components
- Managing PostHog's initialization in Next.js 14
- Creating custom events for better insights

### Image Management with Cloudinary
Working with Cloudinary brought its own set of challenges:
- Implementing secure upload mechanisms
- Handling image optimization
- Managing different image transformations
- Setting up proper error handling for uploads

### MongoDB/Mongoose Integration
Some interesting challenges included:
- Setting up proper TypeScript interfaces with Mongoose
- Implementing efficient indexing strategies
- Handling validation and error messages
- Managing relationships between collections

### Type Safety
Maintaining type safety throughout the application was crucial:
- Setting up proper interfaces for API responses
- Managing types for form data
- Ensuring type safety in server actions
- Handling unknown types from external services

## 🌟 Key Learnings

1. **Server Components**: Understanding the power and limitations of React Server Components
2. **Performance Optimization**: Leveraging Next.js built-in optimizations
3. **TypeScript Best Practices**: Writing maintainable, type-safe code
4. **Error Handling**: Implementing robust error handling across the stack
5. **API Design**: Creating clean, RESTful APIs with Next.js

## 📈 Future Improvements

- [ ] Add authentication system
- [ ] Implement real-time updates using WebSockets
- [ ] Add more analytics features
- [ ] Improve image optimization
- [ ] Add event categories and search functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- PostHog for the powerful analytics platform
- Cloudinary for the robust image management system
- MongoDB for the flexible database solution

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!
