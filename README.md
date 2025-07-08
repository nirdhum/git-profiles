# 🔍 GitHub Profile Finder

A basic web app built using **HTML**, **CSS**, and **JavaScript** that allows users to type a GitHub username and fetch profile details like avatar, name, bio, followers, following, public repositories, and a list of the latest repositories using the **GitHub REST API**.

## 🚀 Features

- 🔎 Search any GitHub user's profile
- 🧑‍💼 Displays avatar, name, bio, followers, following, and public repos
- 📂 Shows up to 10 recently created public repositories
- ✅ Clean and responsive design
- ⚠️ Error handling for invalid usernames

## 🌐 Live Demo

👉 [Live Preview](https://nirdhum.github.io/git-profiles/)

## 🛠️ Tech Stack

- **HTML** – Structure of the app
- **CSS** – Styling and layout
- **JavaScript (ES6)** – Logic and dynamic behavior
- **Axios** – For HTTP requests
- **GitHub API** – To fetch user data and repositories

## 📂 Project Structure

```bash
git-profiles/
├── assets
├── index.html
├── LICENSE
├── README.md
├── script.js
└── style.css
```

## 🧠 How It Works

1. User types a GitHub username and submits the form.
2. The app fetches profile data from `https://api.github.com/users/{username}`.
3. If the user exists:
   - A profile card is shown with avatar, name, bio, followers, following, and public repos.
   - A second request fetches up to 10 latest repositories from `https://api.github.com/users/{username}/repos?sort=created`.
4. If the user is not found:
   - A simple error message is shown instead.

## 📦 Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/nirdhum/git-profiles.git
   cd git-profiles
   ```
2. **Open index.html in your browser Or use Live Server in VS Code or any similar extension.**

## ❗ Notes

- Requires internet access to fetch data from GitHub.
- GitHub API has a rate limit for unauthenticated requests (usually 60 per hour).

## 📄 License

This project is licensed under the MIT License.

## 🙌 Acknowledgements

- GitHub REST API
- Axios Library

## 👨‍💻 Author

Nirdhum
