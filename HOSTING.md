# Landliya Property Platform - Hosting Guide

This guide covers deploying the Landliya property platform on AWS EC2.

## Prerequisites

- AWS Account
- Domain name (optional, for production)
- GitHub repository access

## Architecture Overview

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   User      │────▶│   AWS EC2   │────▶│  PostgreSQL │
│   Browser   │     │  (Next.js) │     │  (RDS)      │
└─────────────┘     └─────────────┘     └─────────────┘
                          │
                          ▼
                   ┌─────────────┐
                   │    S3      │
                   │  (Images)  │
                   └─────────────┘
```

## Step 1: AWS EC2 Setup

### 1.1 Launch EC2 Instance

1. Go to AWS Console → EC2 → Launch Instance
2. Choose Amazon Linux 2 or Ubuntu 22.04 LTS
3. Select instance type: `t3.medium` (recommended) or `t3.small` for testing
4. Configure security groups:
   - SSH (Port 22) - Your IP
   - HTTP (Port 80) - 0.0.0.0/0
   - HTTPS (Port 443) - 0.0.0.0/0
5. Create or use existing key pair

### 1.2 Connect to EC2

```bash
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

## Step 2: Server Setup

### 2.1 Update and Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL client
sudo apt install -y postgresql-client

# Install Nginx
sudo apt install -y nginx

# Install PM2 for process management
sudo npm install -g pm2
```

### 2.2 Configure PostgreSQL (RDS or Local)

#### Option A: AWS RDS (Recommended)
1. Create RDS PostgreSQL instance in AWS Console
2. Note the endpoint, username, and password
3. Update environment variables

#### Option B: Local PostgreSQL on EC2
```bash
sudo apt install -y postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database
sudo -u postgres psql
CREATE DATABASE landliya;
CREATE USER landliya_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE landliya TO landliya_user;
\q
```

## Step 3: Deploy Application

### 3.1 Clone Repository

```bash
# Clone the repository
cd /var/www
sudo git clone https://github.com/viviztech/real-estate.git landliya
cd landliya
```

### 3.2 Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit environment variables
nano .env
```

Update these variables:
```env
# Database
DATABASE_URL="postgresql://landliya_user:password@localhost:5432/landliya"

# NextAuth
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="generate-a-secure-random-string"

# OpenAI (for AI descriptions)
OPENAI_API_KEY="your-openai-api-key"

# Uploadthing (for image uploads)
UPLOADTHING_SECRET=""
UPLOADTHING_APP_ID=""

# Facebook Pixel (optional)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=""
```

### 3.3 Install Dependencies and Build

```bash
# Install dependencies
cd landliya
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed database (optional)
npx prisma db seed

# Build application
npm run build
```

### 3.4 Configure PM2

```bash
# Start application with PM2
pm2 start npm --name "landliya" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp $HOME
```

### 3.5 Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/landliya
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/landliya /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 4: SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo certbot renew --dry-run
```

## Step 5: AWS S3 for Image Storage (Optional)

### 5.1 Create S3 Bucket
1. Go to S3 Console → Create bucket
2. Enable public access (or use CloudFront)
3. Note bucket name

### 5.2 Update Environment
```env
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="ap-south-1"
AWS_BUCKET_NAME="your-bucket-name"
```

## Step 6: Monitoring & Maintenance

### View Logs
```bash
pm2 logs landliya
```

### Restart Application
```bash
pm2 restart landliya
```

### Check Status
```bash
pm2 status
```

## Step 7: Domain Configuration (Optional)

1. Go to Route 53 in AWS Console
2. Create hosted zone for your domain
3. Create A record pointing to EC2 IP
4. Wait for DNS propagation

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| DATABASE_URL | PostgreSQL connection string | Yes |
| NEXTAUTH_SECRET | Random string for NextAuth | Yes |
| NEXTAUTH_URL | Your domain URL | Yes |
| OPENAI_API_KEY | OpenAI API key for AI descriptions | No |
| UPLOADTHING_SECRET | Uploadthing secret | No |
| UPLOADTHING_APP_ID | Uploadthing app ID | No |

## Troubleshooting

### Database Connection Issues
```bash
# Test database connection
psql -h localhost -U landliya_user -d landliya
```

### Node.js Issues
```bash
# Check Node version
node -v

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Issues
```bash
# Check what's using port 3000
sudo lsof -i :3000

# Kill process if needed
sudo kill -9 <PID>
```

## Production Checklist

- [ ] EC2 instance running
- [ ] PostgreSQL database configured
- [ ] Environment variables set
- [ ] Application built successfully
- [ ] PM2 process manager configured
- [ ] Nginx reverse proxy setup
- [ ] SSL certificate installed
- [ ] Domain pointed to server
- [ ] Logs monitored
- [ ] Backups configured

## Support

For issues or questions, please check the GitHub repository or contact the development team.
