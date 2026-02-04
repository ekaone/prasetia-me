# Prasetia.me - Personal Website

A modern, interactive personal website built with Next.js 15, React 19, and TailwindCSS. Features an AI-powered chat interface, beautiful UI components, and a responsive design.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Interactive Chat**: AI-powered chat interface using OpenAI integration
- **Beautiful UI**: Custom components built with Radix UI and TailwindCSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Markdown Support**: Rich text rendering with react-markdown
- **Animations**: Smooth animations and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: TailwindCSS
- **Components**: Radix UI
- **AI Integration**: OpenAI SDK
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Animations**: Motion

## 🏗️ Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components
│   └── magicui/        # Custom UI effects
├── lib/                 # Utility functions
├── public/             # Static assets
└── hooks/              # Custom React hooks
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ekaone/prasetia-me
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env.local file with:
   OPENAI_API_KEY=your_api_key_here || GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key_here
   HELICONE_API_KEY=your_helicone_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Build for production**
   ```bash
   pnpm build
   ```

## 🔑 Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key for the chat functionality
- `Or`
- `GOOGLE_GENERATIVE_AI_API_KEY`: Your Google Generative AI API key for the chat functionality
- `HELICONE_API_KEY`: Your Helicone API key for the chat functionality

## 📦 Main Components

- `ContactChat`: Interactive chat interface with AI integration
- `Hero`: Main hero section with animations
- `Stack`: Technology stack showcase
- `Blog`: Blog post display component
- `RenderMarkdown`: Markdown rendering component

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
