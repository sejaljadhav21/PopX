# PopX Landing Page

This is a simple React-based frontend application that allows users to **sign up**, **log in**, and **view their profile**. It demonstrates basic routing, form handling, and navigation using React Router.

---

## 🚀 Features

* Landing page with navigation to Sign Up and Login
* Signup form with user details and agency selection
* Login form with basic validation
* Profile page with static user information
* Route navigation using `react-router-dom`
* Simple UI structure using reusable CSS classes

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Landing.js
│   ├── Login.js
│   ├── Signup.js
│   └── Profile.js
│
├── App.js
└── App.css
```

---

## 🛠️ Technologies Used

* React
* React Router DOM
* HTML & CSS (for styling)

---

## 📦 Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sejaljadhav21/PopX.git
   cd popx-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start Development Server:**

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:3000`.

---

## 🌐 Available Routes

| Path       | Component | Description                      |
| ---------- | --------- | -------------------------------- |
| `/`        | `Landing` | Landing page with nav options    |
| `/signup`  | `Signup`  | User registration form           |
| `/login`   | `Login`   | Login form with basic validation |
| `/profile` | `Profile` | Static profile details page      |

---

## ⚠️ Notes

* **No backend integration**: The login and signup functionality is simulated with form inputs and simple routing logic.
* **Form validation is minimal** and only checks for non-empty fields.
* **Profile data is static** and not fetched or saved.

---

## 🧑‍💻 Author

**Sejal Jadhav**
---

## 📄 License

This project is licensed under the [GNU License](LICENSE).

---
