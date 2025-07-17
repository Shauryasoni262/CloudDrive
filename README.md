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
