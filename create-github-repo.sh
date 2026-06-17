#!/bin/bash

# Script to create GitHub repository and push code
# Usage: ./create-github-repo.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "Usage: ./create-github-repo.sh YOUR_GITHUB_USERNAME"
    echo "Example: ./create-github-repo.sh johndoe"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="avizum-landing-page"

echo "🚀 Setting up GitHub repository for Avizum Landing Page..."
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Run: git init"
    exit 1
fi

# Rename branch to main
git branch -M main

# Add remote (if not already added)
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote 'origin' already exists"
    git remote set-url origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
else
    echo "➕ Adding remote repository..."
    git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git
fi

echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named: $REPO_NAME"
echo "3. DO NOT initialize with README, .gitignore, or license"
echo "4. Click 'Create repository'"
echo ""
read -p "Press Enter after you've created the repository on GitHub..."

echo ""
echo "📤 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Success! Your code is now on GitHub:"
    echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    echo ""
    echo "🌐 Next: Deploy to Vercel at https://vercel.com"
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "   1. The repository exists on GitHub"
    echo "   2. You're authenticated with GitHub"
    echo "   3. You have write access to the repository"
fi
