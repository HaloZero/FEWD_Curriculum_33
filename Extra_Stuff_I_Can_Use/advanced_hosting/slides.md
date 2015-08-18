![GeneralAssemb.ly](/reveal/img/icons/FEWD_Logo.png)

#FEWD - How to Host your Website

###Rohan Dhaimade

---


##Agenda

* Github
* Best workflows
* Advanced hosting

---

## What is hosting?

Hosting consists of two major services:

1. Hosting and "serving" your files.
2. Domain registration and pointing

---

## Github

Github is a company that provides hosting your code

What it does do:

* Provides static hosting (html, js, css)
* Give you a real URL to point people to do
* Let you host all your projects up to 1 GB of data
* Let's you host your files but have your own domain
* Easily modify and push changes to your website
* Let's you host your blog

---

## Github

What it doesn't do:

* Does not working with more back-end services (Rails, node.js, etc.)
* It's not super fast to sync your changes
* It's not going to support Worpdress (but you can have a blog)

---

## Github

1. Sign up for an account, be warned your username will be the subdomain of your site. So your site will be username.github.io
2. Create a repository on github named username.github.io
3. Download the Github app

More instructions are here: https://pages.github.com/
Make sure to select "user or organization site"

---

## Basic Git Vocabulary

Vocabulary:

* Commits - A collection of changes that you've made to your code. Consider them like snapshots of your code
* Branching - Usually there exists a "master" of your code, a branch is a fork from that code that you can make changes to without affecting master.
* Repositories - A place where your project is hosted
* Push - Pushing your commits mean's uploading them to the server


---

## Workflow

1. Make your changes to website, add this or modify that then save that as a "commit"
2. Make multiple commits or a single commit
3. Sync those changes to the server to upload them to your site

---

## THATS IT

Done, you have a website working!

---

## Setting up your own domain

You have to buy your domain properly from a website, whatever you have hosted properly.

I use namecheap, there are a ton.

https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/

---

## Hosting Multiple Projects

1. Create a repository for your project (ex. ga-project-1), make sure you put it in a local folder appropriately
2. Put your code in that local folder if it exists, otherwise write your code in that folder
2. Create a new branch for your repo called gh-pages
3. Make any modifications to your project as you go along and if you make commits and sync, it will push your project changes to username.github.io/project-name
4. You can link specific domains to this project specifically by targeting your domain username.github.io/project-name


---

## Why Github Pages vs other hosting solutions?

1. Git is standard and getting familiar with it is only good if you're going to work with developers
2. Github pages keeps your projects in separate spots and backups all your projects
3. They're public code, so not only can people see your projects they can make changes and improve it if you want to start a bigger project.

---

## What about if I want a blog?

You can use *Jekyll*, it requires some terminal-fu though.

https://help.github.com/articles/using-jekyll-with-pages/

But honestly, your best bet is Wordpress. Github is for hosting *static* sites.

---

## Caveats about Github Pages

Github pages is a great way to host your basic website and your small projects easily, but there are a few issues with it.

* If you're trying to make all your pages look alike, you have to link your css files properly between all your projects.
* You'll also have to modify any shared headers between pages.
