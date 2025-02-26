# UniVersePortal

## 📌 Overview
**UniVersePortal** is a **full-stack** web application built with **Next.js**, **Node.js**, and **MongoDB**. It provides a comprehensive platform for students, educators, and researchers to access detailed information about universities, colleges, and courses. With UniVersePortal, users can compare universities, analyze course offerings, and make informed decisions about higher education.

## 🚀 Features
- **University Information**: Get detailed insights into IITs, NITs, and other universities.
- **Course Details**: Explore various courses offered by institutions, including syllabus, eligibility, and faculty.
- **University Comparison**: Compare different universities based on rankings, placements, faculty, infrastructure, etc.
- **Course Comparison**: Evaluate multiple courses to find the best fit based on syllabus, duration, job prospects, and fees.
- **Search Functionality**: Search for universities and courses with an intuitive and fast search engine.
- **User Authentication**: Secure login and registration using **JWT authentication**.
- **Admin Dashboard**: Manage university and course data efficiently.
- **Reviews & Ratings**: Users can submit and read reviews of universities and courses.
- **Fully Responsive**: Designed with **Tailwind CSS** to ensure a seamless experience on all devices.

## 🛠️ Tech Stack
### Frontend
- **Next.js** – Fast, server-side rendering for improved performance.
- **React.js** – Component-based UI design.
- **Tailwind CSS** – Modern and responsive UI styling.

### Backend
- **Node.js** – Scalable backend framework.
- **Express.js** – Lightweight and fast API development.
- **MongoDB & Mongoose** – NoSQL database for storing universities, courses, and user data.
- **JWT Authentication** – Secure login and authentication.

## ⚡ Getting Started
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or later)
- **MongoDB** (local or cloud instance)
- **Git**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/UniVersePortal.git
   cd UniVersePortal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a **.env.local** file in the root directory and configure the required environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🏗️ Folder Structure
```
UniVersePortal/
│── public/          # Static assets
│── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Next.js pages
│   ├── utils/       # Helper functions
│   ├── models/      # Database models (Mongoose)
│   ├── services/    # API services
│   ├── middleware/  # Authentication middleware
│── .env.local       # Environment variables
│── next.config.js   # Next.js configuration
│── package.json     # Dependencies & scripts
│── README.md        # Documentation
```

## 🔑 Authentication & Authorization
- **User Roles**: Admins and general users.
- **JWT Authentication**: Secure token-based authentication.
- **Role-Based Access Control (RBAC)**: Restricts access to admin-only actions.

## 🔗 API Endpoints
| Endpoint             | Method | Description |
|----------------------|--------|-------------|
| `/api/universities`  | GET    | Fetch all universities |
| `/api/universities/:id` | GET | Fetch university by ID |
| `/api/courses`       | GET    | Fetch all courses |
| `/api/courses/:id`   | GET    | Fetch course by ID |
| `/api/compare/universities` | POST | Compare universities |
| `/api/compare/courses` | POST | Compare courses |
| `/api/auth/register` | POST   | User registration |
| `/api/auth/login`    | POST   | User login |

## 🎨 UI/UX
UniVersePortal is designed with a **modern and intuitive UI**, ensuring:
- **Smooth Navigation** with Next.js dynamic routing.
- **Fast Load Times** with SSR & ISR.
- **Responsive Design** optimized for mobile, tablet, and desktop.

## 🌟 Future Enhancements
- AI-based university recommendations.
- Chatbot for instant student guidance.
- User dashboards with saved searches.
- Integration with government databases for real-time updates.

## 🤝 Contribution
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Added new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Submit a Pull Request.

## 📝 License
This project is **open-source** and available under the **MIT License**.

## 📬 Contact
For questions or suggestions, feel free to reach out:
- **Email**: support@universeportal.com
- **GitHub**: [UniVersePortal](https://github.com/your-username/UniVersePortal)
- **Twitter**: [@universeportal](https://twitter.com/universeportal)

---
**⭐ If you find this project useful, please star the repository!**

