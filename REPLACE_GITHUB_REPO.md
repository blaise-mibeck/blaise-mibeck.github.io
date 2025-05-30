# How to Replace Your Existing GitHub Pages Repository

## Method 1: Force Push (Replaces Everything)

```bash
# 1. Initialize git in your current directory
git init

# 2. Add all files (respecting .gitignore)
git add .

# 3. Commit the new portfolio
git commit -m "Complete portfolio redesign - replacing old site"

# 4. Add your existing repository as remote
git remote add origin https://github.com/blaise-mibeck/blaise-mibeck.github.io.git

# 5. Force push to completely replace the repository
git push -u origin main --force
```

## Method 2: Clone, Replace, and Push

```bash
# 1. Clone your existing repository to a temporary location
cd ..
git clone https://github.com/blaise-mibeck/blaise-mibeck.github.io.git temp-repo

# 2. Go into the cloned repo
cd temp-repo

# 3. Remove all old files except .git
rm -rf * .*[!.git]*

# 4. Copy all new files from your portfolio directory
cp -r ../Blaise-Mibeck/* .
cp -r ../Blaise-Mibeck/.gitignore .

# 5. Add all new files
git add .

# 6. Commit the changes
git commit -m "Complete portfolio redesign - replacing old site"

# 7. Push to GitHub
git push origin main
```

## Windows PowerShell Version (Method 2):

```powershell
# 1. Clone your existing repository
cd ..
git clone https://github.com/blaise-mibeck/blaise-mibeck.github.io.git temp-repo

# 2. Go into the cloned repo
cd temp-repo

# 3. Remove all old files except .git
Get-ChildItem -Path . -Exclude .git | Remove-Item -Recurse -Force

# 4. Copy all new files from your portfolio directory
Copy-Item -Path ..\Blaise-Mibeck\* -Destination . -Recurse -Force

# 5. Add all new files
git add .

# 6. Commit the changes
git commit -m "Complete portfolio redesign - replacing old site"

# 7. Push to GitHub
git push origin main
```

## Important Notes:

1. **Backup First**: Before replacing, you might want to backup your old repository
2. **Force Push Warning**: Method 1 will completely overwrite the repository history
3. **GitHub Pages**: After pushing, it may take a few minutes for GitHub Pages to update

## After Pushing:

Your new portfolio will be live at: https://blaise-mibeck.github.io

The site should update automatically within 5-10 minutes.
