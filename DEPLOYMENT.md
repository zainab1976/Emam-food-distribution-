# Deployment Guide for Lanza Food Distribution Website

This guide will help you deploy your website so it's accessible to everyone via a public URL.

## Quick Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Create a Netlify Account**
   - Go to [https://www.netlify.com](https://www.netlify.com)
   - Sign up for a free account (use GitHub, Google, or email)

2. **Deploy Your Site**
   - Log in to Netlify
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire project folder OR
   - Use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify login
     netlify deploy
     netlify deploy --prod
     ```

3. **Get Your Public URL**
   - Netlify will provide a URL like: `https://your-site-name.netlify.app`
   - You can customize the domain name in site settings

### Option 2: Vercel

1. **Create a Vercel Account**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up for a free account

2. **Deploy Your Site**
   - Install Vercel CLI: `npm install -g vercel`
   - In your project folder, run: `vercel`
   - Follow the prompts
   - For production: `vercel --prod`

3. **Get Your Public URL**
   - Vercel will provide a URL like: `https://your-site-name.vercel.app`

### Option 3: GitHub Pages

1. **Create a GitHub Repository**
   - Go to [https://github.com](https://github.com)
   - Create a new repository
   - Upload all your files

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source branch (usually `main` or `master`)
   - Save

3. **Get Your Public URL**
   - Your site will be at: `https://your-username.github.io/repository-name`

### Option 4: Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select your project folder
   - Set `index.html` as public directory
   - Configure as single-page app: Yes

3. **Deploy**
   ```bash
   firebase deploy
   ```

4. **Get Your Public URL**
   - Firebase will provide a URL like: `https://your-project.web.app`

## Backend Setup (Optional)

If you want to store orders in a database instead of just WhatsApp:

### Simple Backend Options:

1. **Firebase Firestore** (Free tier available)
   - Real-time database
   - Easy integration
   - No server needed

2. **Supabase** (Free tier available)
   - PostgreSQL database
   - REST API included
   - Easy to use

3. **Node.js + Express** (Requires hosting)
   - More control
   - Can use services like Heroku, Railway, or Render

## Current Features

Your website currently:
- ✅ Stores cart in browser localStorage
- ✅ Sends orders via WhatsApp
- ✅ Works offline (after first load)
- ✅ Fully responsive

## Next Steps After Deployment

1. **Test Your Live Site**
   - Check all pages load correctly
   - Test cart functionality
   - Verify WhatsApp links work

2. **Custom Domain (Optional)**
   - Most hosting services allow custom domains
   - You can connect your own domain name

3. **Analytics (Optional)**
   - Add Google Analytics
   - Track visitor behavior

## Support

If you need help with deployment, contact your developer or refer to the hosting service's documentation.

