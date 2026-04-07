<div align="center">

# 🏛️ Astoria Official Government Website

[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](https://github.com/astoria-gouv/website-gouv/blob/main/LICENSE) [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/) [![Prisma](https://img.shields.io/badge/Prisma-7-blue?style=for-the-badge&logo=prisma)](https://prisma.io/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/) [![React Native](https://img.shields.io/badge/React_Native-0.76-blue?style=for-the-badge&logo=react)](https://reactnative.dev/) [![Capacitor](https://img.shields.io/badge/Capacitor-8-3c9?style=for-the-badge&logo=capacitor)](https://capacitorjs.com/)

**Official Government Website - Modern Digital Services Platform**

The official digital platform for Astoria government services, providing citizens with accessible information and modern e-government solutions.

[🚀 Quick Start](#-quick-start) • [📋 Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [📁 Architecture](#-architecture) • [🤝 Contributing](#-contributing)

[![GitHub stars](https://img.shields.io/github/stars/astoria-gouv/website-gouv?style=social)](https://github.com/astoria-gouv/website-gouv/stargazers) [![GitHub forks](https://img.shields.io/github/forks/astoria-gouv/website-gouv?style=social)](https://github.com/astoria-gouv/website-gouv/network) [![GitHub issues](https://img.shields.io/github/issues/astoria-gouv/website-gouv)](https://github.com/astoria-gouv/website-gouv/issues)

</div>

---

## 🌟 What is Astoria Government Website?

**Astoria Official Government Website** is a comprehensive digital platform designed to provide citizens with accessible government services, information, and resources. Built with modern web technologies, it offers a seamless experience across web and mobile platforms.

### 🎯 Our Mission

- **🏛️ Accessible Government Services** - Digital-first approach to public services
- **📱 Cross-Platform Experience** - Web, mobile, and desktop accessibility
- **🔒 Secure & Reliable** - Enterprise-grade security for citizen data
- **🌍 Multilingual Support** - Serving all citizens in their preferred language
- **⚡ High Performance** - Fast-loading, responsive design
- **♿ Inclusive Design** - WCAG compliant accessibility standards

---

## 📋 Features

### 🎯 **Core Features**

#### 🏛️ **Government Services Portal**

- ✅ **Service Catalog** - Comprehensive listing of available government services
- ✅ **Online Forms** - Digital forms for various administrative procedures
- ✅ **Document Requests** - Request official documents online
- ✅ **Appointment Booking** - Schedule appointments at government offices
- ✅ **Status Tracking** - Track the progress of applications and requests

#### 📰 **Information Hub**

- ✅ **News & Announcements** - Latest government news and public notices
- ✅ **Press Releases** - Official press communications
- ✅ **Event Calendar** - Government events and public meetings
- ✅ **Resource Library** - Forms, publications, and official documents
- ✅ **FAQ Section** - Answers to common citizen questions

#### 👤 **Citizen Portal**

- ✅ **Personal Dashboard** - Overview of citizen interactions
- ✅ **Service History** - Record of past applications and requests
- ✅ **Notifications** - Alerts for updates and deadlines
- ✅ **Profile Management** - Manage personal information and preferences
- ✅ **Document Storage** - Secure storage for official documents

#### 📱 **Mobile & Cross-Platform**

- ✅ **Mobile Web** - Fully responsive mobile experience
- ✅ **React Native App** - Native mobile application for iOS and Android
- ✅ **Capacitor Integration** - Cross-platform mobile deployment
- ✅ **Offline Support** - Access to essential information offline

### 🔄 **In Development**

- **User Authentication System** - Secure login with multiple authentication methods
- **Payment Integration** - Online payment for government fees
- **Digital Signatures** - Electronic document signing
- **AI Assistant** - Virtual assistant for citizen inquiries
- **Data Analytics Dashboard** - Insights into service usage and trends

### 📋 **Planned Features**

- **Blockchain Verification** - Tamper-proof document verification
- **Open Data Portal** - Access to anonymized government datasets
- **Integration APIs** - APIs for third-party service integration
- **Accessibility Enhancements** - Advanced accessibility features
- **Multi-Channel Notifications** - SMS, email, and push notifications

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **pnpm** 8.0.0 or higher (recommended package manager)
- **Prisma** CLI (included as dev dependency)
- **Docker** (optional, for containerized development)
- **Make** (for command shortcuts - included with most systems)

### 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/astoria-gouv/website-gouv.git
   cd website-gouv
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**

   ```bash
   pnpm db:generate
   pnpm db:migrate
   pnpm db:seed
   ```

5. **Start development servers**

   ```bash
   pnpm dev
   ```

### 🌐 Access Points

Once running, you can access:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Database Studio**: [http://localhost:5555](http://localhost:5555) (via `pnpm db:studio`)
- **API Documentation**: Available in `/docs` folder

### 🎯 **Make Commands**

```bash
# 🚀 Quick Start & Development
pnpm dev                 # Start all services (frontend + backend)
pnpm dev:frontend        # Frontend only (port 3000)
pnpm dev:backend         # Backend development

# 🏗️ Building & Production
pnpm build               # Build all packages
pnpm build:frontend      # Frontend production build
pnpm start               # Start production servers

# 🗄️ Database
pnpm db:generate         # Generate Prisma client
pnpm db:migrate          # Run database migrations
pnpm db:studio           # Open Prisma Studio
pnpm db:seed             # Seed development data

# 🔧 Code Quality & Testing
pnpm lint                # Lint all packages
pnpm typecheck           # TypeScript type checking
pnpm test                # Run all tests
pnpm format              # Format code with Prettier

# 🐳 Docker
pnpm docker:build        # Build Docker image
pnpm docker:run          # Run with Docker Compose
pnpm docker:stop         # Stop Docker services

# 🛠️ Utilities
pnpm clean               # Clean build artifacts
pnpm reset               # Reset project to clean state
```

---

## 🛠️ Tech Stack

### 🎨 **Frontend Layer**

```
Next.js 15 + React 19 + TypeScript 6
├── 🎨 Tailwind CSS v4 (Styling)
├── 🔐 Authentication (JWT, OAuth)
├── 🛣️ Next.js App Router (Routing)
├── 📝 TypeScript Strict Mode (Type Safety)
├── 🔄 React Context (State Management)
├── 🌐 Next-Intl (Internationalization)
├── 📊 Framer Motion (Animations)
├── 🔧 ESLint + Prettier (Code Quality)
└── 📱 Radix UI (Accessible Components)
```

### 📦 **Package Ecosystem**

```
Monorepo with pnpm Workspaces
├── app/ (Next.js Frontend)
├── tools/ (Development Utilities)
├── options/ (Configuration Options)
├── messages/ (Internationalization)
├── tests/ (Testing Suite)
├── package/node/ (Node.js SDK)
├── package/vscode/ (VS Code Extension)
├── package/extension/ (Browser Extension)
└── package/snap/ (Desktop Application)
```

### 🗄️ **Data Layer**

```
Prisma ORM + PostgreSQL
├── 🏗️ Schema Management (Auto-migration)
├── 🔍 Type-Safe Queries
├── 🔄 Connection Pooling (Performance)
├── 👤 User & Service Models
└── 📈 Seed Scripts (Development Data)
```

### 📱 **Mobile Layer**

```
React Native + Capacitor
├── 📱 iOS & Android Support
├── 🔄 Native Bridge (Capacitor)
├── 📦 App Store Ready
└── 🔧 Cross-Platform Build
```

### 🏗️ **Infrastructure**

```
Docker + Kubernetes + Terraform
├── 🐳 Docker Containerization
├── ☸️ Kubernetes Orchestration
├── 🌥️ Cloud Deployment (AWS/GCP/Azure)
├── 🚦 Traefik (Reverse Proxy)
├── 📊 Monitoring (Prometheus/Grafana)
└── 🔄 CI/CD (GitHub Actions)
```

---

## 📁 Architecture

### 🏗️ **Monorepo Structure**

```
website-gouv/
├── app/                     # Next.js 15 Frontend Application
│   ├── app/                # App Router pages
│   ├── components/         # React components
│   │   ├── ui/            # UI component library
│   │   └── ...           # Feature components
│   ├── context/           # React contexts
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── i18n/              # Internationalization
│   ├── messages/          # Translation files
│   ├── styles/            # Tailwind CSS styles
│   └── public/            # Static assets
├── package/                # Package Ecosystem
│   ├── node/              # Node.js SDK
│   ├── vscode/            # VS Code Extension
│   ├── extension/         # Browser Extension
│   └── snap/              # Desktop Application
├── tools/                  # Development Utilities
├── options/                # Configuration Options
├── services/               # Core Services
├── models/                 # Data Models
├── messages/               # Internationalization Resources
├── infrastructure/         # Infrastructure as Code
│   ├── docker/            # Docker Configuration
│   ├── k8s/               # Kubernetes Manifests
│   ├── terraform/         # Terraform Scripts
│   ├── traefik/           # Traefik Configuration
│   └── monitoring/        # Monitoring Setup
├── tests/                  # Test Suite
├── prisma.config.ts        # Prisma Configuration
└── docker-compose.*.yml   # Docker Compose Files
```

### 🔄 **Data Flow Architecture**

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App   │    │   API Layer      │    │   PostgreSQL    │
│   (Frontend)    │◄──►│   (Prisma)       │◄──►│   (Database)    │
│  Port 3000      │    │  Port 3000       │    │  Port 5432      │
│  TypeScript     │    │  TypeScript      │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
           │                     │                      │
           ▼                     ▼                      ▼
    React Components      API Endpoints          Data Models
    Tailwind CSS         Prisma Client          Migrations
    Next-Intl            Authentication          Seed Data
           │                     │
           ▼                     ▼
     ┌─────────────────┐   ┌──────────────────┐
     │  Mobile Apps    │   │  Service Layer   │
     │  (React Native  │   │  Business Logic  │
     │   + Capacitor)  │   │  Validation      │
     └─────────────────┘   └──────────────────┘
```

---

## 🗺️ Development Roadmap

### 🎯 **Phase 1: Foundation (✅ Complete)**

- ✅ **Monorepo Setup** - pnpm workspaces with multiple packages
- ✅ **Frontend Framework** - Next.js 15 + React 19 + Tailwind CSS v4
- ✅ **Component Library** - Reusable UI components
- ✅ **Internationalization** - Multi-language support with next-intl
- ✅ **Design System** - Consistent styling and theming
- ✅ **Development Environment** - Hot reload, TypeScript strict mode

### 🚀 **Phase 2: Core Features (🔄 In Progress)**

- 🔄 **Service Catalog** - Comprehensive government services listing
- 🔄 **News System** - News and announcements publishing
- 🔄 **Document Management** - Document upload and retrieval
- 🔄 **User Dashboard** - Citizen personal dashboard
- 🔄 **Mobile Application** - React Native companion app
- 🔄 **API Development** - RESTful API endpoints

### ⚙️ **Phase 3: Advanced Features (📋 Planned)**

- 📋 **Authentication System** - Multi-factor authentication
- 📋 **Payment Integration** - Online fee payments
- 📋 **Digital Signatures** - Electronic document signing
- 📋 **AI Assistant** - Virtual government assistant
- 📋 **Analytics Dashboard** - Usage insights and reporting

### 🌟 **Phase 4: Enterprise Features**

- 📋 **Blockchain Integration** - Document verification
- 📋 **Open Data Portal** - Public data access
- 📋 **API Marketplace** - Third-party integrations
- 📋 **Advanced Analytics** - Big data insights
- 📋 **High Availability** - Multi-region deployment

---

## 💻 Development

### 🎯 **Development Workflow**

```bash
# New developer setup
pnpm install              # Install all dependencies
cp .env.example .env      # Setup environment
pnpm db:generate          # Generate Prisma client
pnpm db:migrate           # Run migrations
pnpm db:seed              # Seed development data

# Daily development
pnpm dev                  # Start development servers
pnpm lint:fix             # Fix code issues
pnpm typecheck            # Verify types
pnpm test                 # Run tests

# Before committing
pnpm format               # Format code
pnpm lint                 # Check code quality
pnpm typecheck            # Verify types

# Production deployment
pnpm build                # Build everything
pnpm docker:build         # Create Docker image
pnpm docker:run           # Deploy
```

### 📋 **Development Guidelines**

- **TypeScript Strict Mode** - All code must pass strict type checking
- **Component Structure** - Follow established patterns for React components
- **Internationalization** - All user-facing text must be translatable
- **Accessibility** - WCAG 2.1 AA compliance required
- **Conventional Commits** - Use standardized commit messages
- **Code Review** - All changes require peer review
- **Testing** - Maintain test coverage above 80%

---

## 🌍 Internationalization

The platform supports multiple languages using next-intl:

### Supported Languages

- 🇺🇸 English (en)
- 🇫🇷 French (fr)
- 🇪🇸 Spanish (es)
- 🇩🇪 German (de)
- And more...

### Translation Workflow

```bash
# Add new translations
# Edit messages/{locale}/common.json
# Edit messages/{locale}/pages/*.json

# Generate message bundles
pnpm build                # Automatically bundles translations
```

---

## 🔐 Security

### 🎯 **Security Measures**

- **Authentication** - JWT tokens with refresh mechanism
- **Authorization** - Role-based access control (RBAC)
- **Input Validation** - Server-side validation for all inputs
- **HTTPS** - All traffic encrypted with TLS 1.3
- **CORS** - Strict cross-origin policies
- **Rate Limiting** - Protection against abuse
- **Security Headers** - CSP, HSTS, X-Frame-Options
- **Audit Logging** - Comprehensive activity logging
- **Data Encryption** - At-rest and in-transit encryption

### 📋 **Reporting Security Issues**

Please report security vulnerabilities to: developer@info.gov.aor

---

## 🤝 Contributing

We welcome contributions from citizens, developers, and organizations who want to improve government services.

### 🎯 **How to Get Started**

1. **Fork the repository** and create a feature branch
2. **Check the issues** for tasks that need help
3. **Read the documentation** in `/docs`
4. **Start small** - Documentation, tests, or minor features
5. **Follow our code standards** and commit guidelines
6. **Submit a pull request** with clear description

### 🏗️ **Areas Needing Help**

- **Frontend Development** - React components, UI/UX design
- **Backend Development** - API endpoints, business logic
- **Mobile Development** - React Native app improvements
- **Database Design** - Schema development, optimization
- **DevOps** - Docker, deployment, CI/CD
- **Accessibility** - WCAG compliance improvements
- **Internationalization** - Translation contributions
- **Documentation** - User guides, API docs, tutorials

### 📝 **Contribution Process**

1. **Choose an area** - Frontend, backend, mobile, or infrastructure
2. **Read the guidelines** - Understand project conventions
3. **Create a branch** with a descriptive name
4. **Implement your changes** following our guidelines
5. **Test thoroughly** - Ensure code passes all tests
6. **Submit a pull request** with clear description and testing
7. **Address feedback** from maintainers

---

## 📞 Support & Community

### 💬 **Get Help**

- 📖 **[Documentation](docs/)** - Comprehensive guides
- 🐛 **[GitHub Issues](https://github.com/astoria-gouv/website-gouv/issues)** - Bug reports and feature requests
- 💡 **[GitHub Discussions](https://github.com/astoria-gouv/website-gouv/discussions)** - General questions and ideas
- 📧 **Email** - developer@info.gov.aor

### 🐛 **Reporting Issues**

When reporting bugs, please include:

- Clear description of the problem
- Steps to reproduce
- Environment information (Node.js version, OS, etc.)
- Error logs or screenshots
- Expected vs actual behavior

---

## 📊 Project Status

| Component                 | Status         | Technology               | Notes                        |
| ------------------------- | -------------- | ------------------------ | ---------------------------- |
| **Monorepo Architecture** | ✅ Working     | pnpm Workspaces          | Multi-package structure      |
| **Frontend Framework**    | ✅ Working     | Next.js 15 + React 19    | App Router + Tailwind CSS v4 |
| **UI Components**         | ✅ Working     | Radix UI + Tailwind      | Accessible component library |
| **Internationalization**  | ✅ Working     | next-intl                | Multi-language support       |
| **Database Layer**        | 🔄 In Progress | Prisma + PostgreSQL      | Schema development           |
| **Mobile App**            | 🔄 In Progress | React Native + Capacitor | Cross-platform mobile        |
| **Authentication**        | 📋 Planned     | JWT + OAuth              | Secure citizen login         |
| **API Development**       | 📋 Planned     | Next.js API Routes       | RESTful endpoints            |
| **Payment Integration**   | 📋 Planned     | Stripe/Payment Gateway   | Online fee payments          |
| **AI Assistant**          | 📋 Planned     | OpenAI/Claude            | Virtual assistant            |
| **Docker Deployment**     | ✅ Working     | Docker Compose           | Containerized development    |
| **CI/CD Pipeline**        | ✅ Working     | GitHub Actions           | Automated testing and deploy |

---

## 🏆 Sponsors & Partners

**Development led by [Sky Genesis Enterprise](https://skygenesisenterprise.com)**

We're grateful to all contributors and partners who support the development of this open-source government services platform.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Astoria Government

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **Sky Genesis Enterprise** - Project leadership and development
- **Next.js Team** - Excellent React framework
- **React Team** - Modern UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible components
- **Prisma Team** - Modern database toolkit
- **React Native Team** - Cross-platform mobile framework
- **Capacitor Team** - Native mobile bridge
- **pnpm** - Fast, disk space efficient package manager
- **Docker Team** - Container platform and tools
- **Open Source Community** - Tools, libraries, and inspiration
- **Government Stakeholders** - Requirements and feedback

---

<div align="center">

### 🏛️ **Building Modern Government Services for Citizens**

[⭐ Star This Repo](https://github.com/astoria-gouv/website-gouv) • [🐛 Report Issues](https://github.com/astoria-gouv/website-gouv/issues) • [💡 Start a Discussion](https://github.com/astoria-gouv/website-gouv/discussions)

---

**🔧 Modern Government Digital Services Platform**

**Made with ❤️ by the [Sky Genesis Enterprise](https://skygenesisenterprise.com) team**

_Serving citizens with accessible, secure, and modern government services_

</div>
