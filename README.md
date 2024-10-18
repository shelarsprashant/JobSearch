
# JobSearch

Welcome to the *Job Search App*, a powerful full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). This platform connects job seekers with employers, providing a seamless experience for job searching, applying, and managing profiles.



##  🚀 Features

- **User Authentication:** Secure sign-up and login for users.
- **Job Listings:** Browse, filter, and search for job opportunities.
- **Application Process:** Apply for jobs directly through the platform.
- **User Profiles:** Manage personal information and track application history.
- **Admin Dashboard:** Employers can post new jobs and manage their listings.



## 🛠 Technologies Used

- **Frontend:** React.js, React Router, Axios, Tailwind CSS, shadcn ui

- **Backend:** Node.js, Express.js

- **Datebase:** MongoDB

- **Other Tools:** Mongoose for MongoDB object modeling, JSON Web Tokens (JWT) for secure authentication, Cloudinary for image uploads (e.g., for user profile pictures or job listings),






## 📦 Installation

To set up the project locally, follow these steps:

#### 1. Clone the repository:

```bash
  git clone https://github.com/shelarsprashant/JobSearch.git 
```
#### 2. Navigate to the project directory:

```bash
  cd job-portal-app 
```

#### 3. Install backend dependencies:

```bash
  cd backend
  npm install

```

#### 4. Install frontend dependencies:

```bash
  cd ../frontend
  npm install
 
```

#### 5. Set up environment variables:
Create a .env file in the backend directory and add your MongoDB URI and JWT secret: 


    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret

    
#### 6. Start the backend server:

```bash
  cd backend
  npm run dev

```

#### 7. Start the frontend application:

```bash
  cd ../frontend
  npm run dev

```
   


## 🌐 Usage

#####    1. Open your browser and navigate to http://localhost:3000.
#####    2. Create an account or log in to start exploring job listings.
#####    3. Apply for jobs and manage your profile from the dashboard.

  
## 📡 API Endpoints

#### Authentication

```http
  POST /api/auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email	` | `string` | **Required**. User's email address. |
| `password	` | `string` | **Required**. User's password. |

```http
  POST /api/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email	` | `string` | **Required**. User's email address. |
| `password	` | `string` | **Required**. User's password. |

#### Job Listings
```http
  GET /api/jobs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none	` | `N/A	` | **Required**. Retrieves all job listings. |

```http
  /* Admin Only */
  POST /api/jobs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title	` | `string` | **Required**. Title of the job. |
| `description	` | `string` | **Required**. Description of the job. |
| `company	` | `string` | **Required**. Company offering the job. |


#### User Profile
```http
  GET /api/users/me
```
 Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none	` | `N/A	` | **Required**. Fetches the logged-in user's profile. |

```http
  PUT /api/users/me

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name	` | `string` | **Required**. User's name. |
| `email	` | `string` | **Required**. User's email. |
| `password	` | `string` | **Required**. User's new password. |



## 🤝Contributing

Contributions are always welcome!

If you have suggestions or improvements, please fork the repository and submit a pull request.
## 📄 License


This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License. 

## 📞 Support

For any support or feedback, feel free to reach out:

Prashant Sanjivan Shelar   
Email - *shelarsprashant@gmail.com*  
LinkedIn - *https://www.linkedin.com/in/prashantsshelar/*


