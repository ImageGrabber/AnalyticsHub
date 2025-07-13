# AnalyticsHub - Modern Dashboard

A comprehensive analytics and data visualization dashboard built with Next.js, TypeScript, Tailwind CSS, and Recharts.

## Features

- 📊 **Interactive Charts**: Beautiful data visualizations using Recharts
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🔧 **TypeScript**: Full type safety and better developer experience
- 🎯 **Real-time Data**: Ready for real-time data integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd AnalyticsHub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
AnalyticsHub/
├── src/
│   └── app/
│       ├── globals.css          # Global styles and Tailwind config
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Main dashboard page
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.ts              # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dashboard Components

### Sidebar Navigation
- Dashboard overview
- Users management
- Revenue tracking
- Analytics
- Settings

### Main Dashboard
- **Stats Cards**: Key metrics with trend indicators
- **Bar Chart**: Monthly revenue visualization
- **Pie Chart**: Traffic sources breakdown
- **Search Bar**: Global search functionality
- **Notifications**: User notifications system

## Customization

### Adding New Charts
1. Import required components from Recharts
2. Create your data structure
3. Add the chart component to the dashboard

### Styling
- Modify `tailwind.config.js` for theme customization
- Update CSS variables in `globals.css` for color schemes
- Add new components in the `src/components/` directory

### Data Integration
- Replace mock data with real API calls
- Add data fetching logic using React hooks
- Implement real-time updates with WebSocket connections

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Build the project: `npm run build`
- Deploy the `out` directory to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions, please open an issue on GitHub. 