# Implementing File Upload on the Server Application

## Overview

This practical focuses on implementing a secure file upload system using Node.js and Express.js. The project demonstrates how a frontend React/Next.js application connects with an Express backend to upload, validate, store, and serve files efficiently.

The implementation includes file validation, multipart form data handling, upload progress tracking, error handling, and secure file storage using Multer middleware.

---

## Objective

The objective of this practical is to:

- Implement a server-side file upload system
- Handle multipart form data using Multer
- Validate uploaded files by type and size
- Configure secure file storage
- Connect the frontend upload form to the backend server
- Implement proper error handling and CORS configuration
- Test the complete frontend-backend upload workflow

---

## Technologies Used

- Node.js
- Express.js
- Multer
- CORS
- Morgan
- Dotenv
- Axios
- React / Next.js

---

## Installation

### 1. Create Project Directory

```bash
mkdir file-upload-server
cd file-upload-server

# Error Handling

- Custom error handling middleware was implemented for:

- Invalid file types
- File size exceeded errors
- Server-side upload failures
- Multer-specific errors
- Benefits
- Better debugging
- Improved user feedback
- More secure upload handling

# Configure CORS
- CORS middleware was configured to allow communication between:
- Frontend (Next.js)
- Backend (Express.js)
- This enabled file uploads from different ports during development.

# Connect Frontend to Backend

- The frontend upload form was updated to communicate directly with the Express backend.

-- Frontend Changes
- Updated Axios upload URL
- Implemented upload progress tracking
- Added file previews
- Improved PDF handling
- Displayed uploaded filenames

# The application was tested by:

1. Starting the Express backend
2. Starting the Next.js frontend
3. Uploading files through the browser
4. Verifying upload progress
5. Testing validation and error handling
6. Confirming files were saved correctly

# Key Concepts Learned
~ Multipart Form Data
- Allows sending files and text fields together in a single HTTP request.

~ Multer Middleware

Handles:
- File parsing
- File storage
- File validation
- File metadata management

~ Error Handling
- Ensures users receive meaningful feedback when uploads fail.

CORS
- Allows frontend and backend applications running on different origins to communicate securely.

#Progress Tracking

- Uses Axios onUploadProgress to display upload progress in real time.

# Conclusion

- This practical successfully demonstrated the implementation of a complete file upload system using Node.js and Express.js. It provided practical experience in handling multipart form data, validating uploads, configuring secure storage, and connecting frontend applications with backend services.

- The project improved understanding of full-stack file upload workflows and modern web application development practices.