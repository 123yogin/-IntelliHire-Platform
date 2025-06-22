
# 🧠 IntelliHire - AI-Powered Proctored Testing Platform

<div align="center">

![IntelliHire Logo](https://img.shields.io/badge/IntelliHire-AI%20Powered%20Testing-blue?style=for-the-badge&logo=brain)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-2.50.0-3ECF8E?style=for-the-badge&logo=supabase)

*A modern, intelligent testing platform that revolutionizes the way organizations conduct assessments with AI-powered proctoring and comprehensive analytics.*

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## ✨ Features

### 🎯 **Multi-Role Dashboard**
- **Admin Dashboard**: System overview, user management, analytics
- **Recruiter Dashboard**: Test creation, candidate management, results tracking
- **Student Dashboard**: Available tests, exam interface, result history

### 🤖 **AI-Powered Proctoring**
- Real-time face detection and monitoring
- Tab switching detection
- Voice activity monitoring
- Suspicious movement detection
- Automated violation flagging

### 📊 **Advanced Analytics**
- Comprehensive test performance metrics
- Student progress tracking
- Cheating probability analysis
- Detailed violation reports
- Export capabilities (PDF, Excel)

### 🎨 **Modern UI/UX**
- Responsive design with Tailwind CSS
- Beautiful data visualizations with Recharts
- Intuitive navigation and user experience
- Dark/Light mode support (coming soon)

### 🔒 **Security & Authentication**
- Role-based access control
- Secure authentication system
- Real-time session monitoring
- Data encryption and privacy compliance

---

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript 5.5.3** - Type-safe development
- **Vite 6.3.5** - Fast build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router 6.26.0** - Client-side routing

### Backend & Database
- **Supabase 2.50.0** - Backend-as-a-Service
- **PostgreSQL** - Reliable database
- **Real-time subscriptions** - Live updates

### UI Components & Libraries
- **Lucide React 0.344.0** - Beautiful icons
- **Recharts 2.15.4** - Data visualization
- **jsPDF 3.0.1** - PDF generation
- **XLSX 0.18.5** - Excel file handling

### Development Tools
- **ESLint 9.9.1** - Code linting
- **TypeScript ESLint 8.3.0** - TypeScript linting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixes

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/intellihire-platform.git
   cd intellihire-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 📁 Project Structure

```
intellihire-platform/
├── src/
│   ├── components/
│   │   ├── Auth/           # Authentication components
│   │   ├── Dashboard/      # Role-specific dashboards
│   │   ├── Exam/          # Exam interface and results
│   │   ├── Layout/        # Navigation and layout
│   │   ├── Students/      # Student management
│   │   └── Test/          # Test creation and management
│   ├── context/           # React context providers
│   ├── types/             # TypeScript type definitions
│   ├── supabaseClient.ts  # Supabase configuration
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🎮 Usage

### For Administrators
1. **System Overview**: Monitor platform health and performance
2. **User Management**: Manage students, recruiters, and system settings
3. **Analytics**: View comprehensive reports and insights
4. **Test Management**: Oversee all tests and results

### For Recruiters
1. **Create Tests**: Design assessments with various question types
2. **Manage Candidates**: Track student progress and performance
3. **View Results**: Analyze test outcomes and cheating probability
4. **Export Data**: Generate PDF reports and Excel exports

### For Students
1. **Take Tests**: Access available assessments
2. **Real-time Proctoring**: Complete exams under AI supervision
3. **View Results**: Check performance and detailed feedback
4. **Track Progress**: Monitor improvement over time

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

---

## 🎨 Screenshots

<div align="center">

### 📝 Exam Interface

<img src="https://github.com/user-attachments/assets/42f98761-24c4-4874-8391-114d1ac9d464" alt="Exam Interface" width="800"/>

### 🛡️ Admin Dashboard

<img src="https://github.com/user-attachments/assets/7d76cce6-af86-4178-9808-b3debb17e158" alt="Admin Dashboard" width="800"/>

### 👩‍🎓 Student Dashboard

<img src="https://github.com/user-attachments/assets/edadde81-4157-4076-902a-5c4a8a679c7e" alt="Student Dashboard" width="800"/>

### 🧑‍💼 Recruiter Dashboard

<img src="https://github.com/user-attachments/assets/17e6c3a9-7710-4184-91b1-51d0496983e5" alt="Recruiter Dashboard" width="800"/>

### 📁 My Results

<img src="https://github.com/user-attachments/assets/da516e16-c4f7-48af-8271-9de0555337e6" alt="My Results" width="800"/>

### 📊 Exam Results

<img src="https://github.com/user-attachments/assets/ac161959-2671-4b3e-ade1-5f365e1272db" alt="Exam Results" width="800"/>

</div>

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Supabase](https://supabase.com/) for the amazing backend-as-a-service
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Recharts](https://recharts.org/) for the data visualization components

---

## 📞 Support

- 📧 Email: parmaryogin04@gmail.com

---

<div align="center">

**Made with ❤️ by the IntelliHire Team**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/intellihire-platform?style=social)](https://github.com/yourusername/intellihire-platform)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/intellihire-platform?style=social)](https://github.com/yourusername/intellihire-platform)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/intellihire-platform)](https://github.com/yourusername/intellihire-platform/issues)

</div> 
