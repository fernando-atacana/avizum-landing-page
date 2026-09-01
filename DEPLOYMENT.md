# Deployment Guide for Avizum Landing Page

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `avizum-landing-page`
   - **Description**: "Modern landing page for Avizum - AI-powered pharma competitive intelligence"
   - **Visibility**: Choose Public (for free hosting) or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create avizum-landing-page --public --source=. --remote=origin --push
```

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions. Run these commands:

```bash
cd /Users/fernandoalvarez/Library/CloudStorage/OneDrive-AtacanaGroupInc/Documents/projects/avizum-landing-page

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/avizum-landing-page.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel (Free Hosting)

### Quick Deploy:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your **GitHub account**
3. Click **"Add New Project"**
4. Import your `avizum-landing-page` repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**
7. Wait 1-2 minutes for deployment
8. Your site will be live at: `https://avizum-landing-page.vercel.app`

### Custom Domain (Optional):

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `avizum.com`)
4. Follow DNS configuration instructions

## Step 4: Automatic Deployments

Once connected, every time you push to GitHub:
- Vercel automatically builds and deploys your changes
- You get preview URLs for pull requests
- Production updates happen automatically

## Troubleshooting

### If git push fails:
- Make sure you're authenticated with GitHub
- Check that the remote URL is correct: `git remote -v`
- Try using SSH instead: `git remote set-url origin git@github.com:YOUR_USERNAME/avizum-landing-page.git`

### If Vercel build fails:
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18+ by default)

## Quick Commands Reference

```bash
# Check git status
git status

# Add changes
git add .

# Commit changes
git commit -m "feat: your change description"

# Push to GitHub
git push

# View remote
git remote -v
```

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Next.js Deployment: https://nextjs.org/docs/deployment
