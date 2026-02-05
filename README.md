# FishID

A fish identification application built with Next.js 16, React 19, and Tailwind CSS.

## Features

- Fish identification and search
- Progressive Web App (PWA) support
- Offline functionality with service workers
- Image caching for Wikimedia Commons
- Responsive design with Tailwind CSS

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Building

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests with UI
npm test -- --ui
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Deployment

### Docker Deployment

The application is configured for containerized deployment using Docker with a multi-stage build for optimal image size.

#### Prerequisites

- Docker 20.10+
- Docker Compose 2.0+ (optional, for easier orchestration)

#### Building the Docker Image

```bash
docker build -t fishid .
```

#### Running the Container

```bash
docker run -p 3000:3000 fishid
```

The application will be available at `http://localhost:3000`.

#### Health Check

Verify the container is running:

```bash
curl http://localhost:3000
```

#### Using Docker Compose

For easier deployment and management:

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f fishid

# Stop the application
docker-compose down
```

#### Environment Variables

The Docker container runs with `NODE_ENV=production` by default. To override:

```bash
docker run -p 3000:3000 -e NODE_ENV=production fishid
```

#### Docker Configuration Details

- **Base Image**: Node.js 20 Alpine (minimal, secure)
- **Build Strategy**: Multi-stage build for reduced image size
- **Output Mode**: Next.js standalone output (~80% smaller than default)
- **Security**: Non-root user (nextjs) for container execution
- **Health Check**: Built-in HTTP health check endpoint
- **Restart Policy**: `unless-stopped` (auto-restart on failure)

#### Deployment Notes

- The Dockerfile uses Next.js standalone output mode, which includes only necessary dependencies
- The container exposes port 3000 by default
- For production deployments, consider:
  - Using a reverse proxy (nginx, Caddy) for SSL/TLS termination
  - Setting up proper logging and monitoring
  - Configuring environment-specific variables
  - Using container orchestration (Kubernetes, Docker Swarm) for scaling

## Project Structure

- `src/` - Application source code
- `public/` - Static assets
- `.next/` - Next.js build output
- `Dockerfile` - Container configuration
- `docker-compose.yml` - Docker Compose orchestration
- `.dockerignore` - Files excluded from Docker build

## Technologies

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand 4.4.0
- **PWA**: @ducanh2912/next-pwa 10.2.0
- **Testing**: Vitest 4.0.18
- **Linting**: ESLint 9
- **Build Tool**: Turbopack

## License

MIT
