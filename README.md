# f27wd-coursework
A remake of the site www.lingscars.com, for a university course

***THIS IS A REMAKE, NOT A REAL WEBSITE***

<br/><br/>
<br/><br/>
<br/><br/>
# Workflow

## Get repository 
### Fork repository to make your own copy 
github.com/SardineMilk/f27wd-coursework -> Fork

### Clone github repository to local repository
git clone git@github.com:YourName/f27wd-coursework.git

### Add the repository as an upstream so you can fetch new changes
git remote add upstream git@github.com:SardineMilk/f27wd-coursework.git

<br/><br/>
## Daily Workflow
### Update local main branch
git checkout main

#### Get changes from upstream (SardineMilk) repo
git pull upstream main

#### Update your local repo with any changes
git push origin main

### Create a new branch - EVERY task/feature
git checkout -b task-branch-name

### Make changes
#### Check everything is correct - branch/changes etc 
git status
#### Commit local changes
git add .
git commit -m "complete-task-name"
#### Push to your github repository
git push origin task-branch-name

### Create a pull request
github.com/SardineMilk/f27wd-coursework -> Pull requests -> New pull request

If required, modify your code and add it to the pull request

<br/><br/>

# Project Structure
## /lings-cars
This is the website - all your work should be in here or a subfolder

Contains .html pages

e.g. about.html, contact.html

### /assets
Contains any image/video/etc assets

### /components
Contains reusable .html file snippets

NOT full pages

e.g. navbar.html

### /css
Contains all .css files

### /js
Contains all .js files
