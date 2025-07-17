# CloudDrive - A Basic Drive-like File Storage Application 🌥️

CloudDrive is a secure and minimal file storage web application built using Node.js, Express, MongoDB, and Cloudinary. It allows authenticated users to upload and store their files in the cloud, mimicking the basic functionalities of a drive system like Google Drive.

---

## 🚀 Features

- ✅ **User Authentication (JWT-based)**
- 📁 **Secure File Upload**
- ☁️ **Cloud Storage using Cloudinary**
- 🔐 **Authorization Middleware**
- 📤 **Track User-Specific Files**
- 📥 **File Download Support (Cloudinary Signed URLs)**

---

## 🛠️ Tech Stack

| Technology | Description                    |
|------------|--------------------------------|
| Node.js    | Backend runtime environment    |
| Express.js | Web framework for Node.js      |
| MongoDB    | Database to store user/files   |
| Mongoose   | MongoDB ODM                    |
| Cloudinary | Cloud storage for file uploads |
| JWT        | Authentication (token-based)   |
| Multer     | File upload middleware         |
| Dotenv     | Environment variables support  |

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/clouddrive.git
cd clouddrive
npm install
```

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Usage

### 🔐 Register & Login

- `POST /auth/register`  
  Register a new user with `username`, `email`, and `password`.

- `POST /auth/login`  
  Authenticate user and receive a JWT token.

### 📁 File Upload

- `POST /upload`  
  - **Headers:** `Authorization: Bearer <token>`  
  - **FormData:** `file` (your file input field)  
  - Uploads file to Cloudinary and stores metadata in MongoDB.

### 📥 File Download

- `GET /download/:path`  
  - Validates token and ownership  
  - Returns a signed Cloudinary URL for temporary file access

---

## 🧠 Project Structure

```
├── models
│   └── users.models.js
│   └── files.models.js
├── routes
│   └── auth.routes.js
│   └── upload.routes.js
├── middlewares
│   └── authe.js
├── config
│   └── cloudinary.js
├── .env
├── app.js
└── README.md
```

---

## 📌 Important Notes

- Passwords are hashed securely before storage using `bcrypt`.
- Only authenticated users can upload and access files.
- Each file is linked to a specific user using their unique ID.
- File downloads use **Cloudinary's signed URLs**, ensuring security.

---

## 📚 Future Improvements

- Add frontend UI using React or HTML/CSS
- File previews (images, PDFs)
- Delete files
- Rename or organize files in folders
- File size restrictions

---

## 🙋‍♂️ Author

**Shaurya Soni**  
Feel free to connect or contribute!
