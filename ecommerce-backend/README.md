# 🛒 E-Commerce Backend (Spring Boot)

## 📌 Project Overview

This is a backend application for an E-Commerce platform built using **Spring Boot**. It provides REST APIs for managing users, products, orders, and authentication.

### 🚀 Features

* User registration & login
* Product management (CRUD)
* Order management
* Secure authentication (JWT / SSO)
* Database integration (MySQL)
* RESTful APIs

---

## ⚙️ Setup Steps

### 🔧 Prerequisites

* Java 17+
* Maven
* MySQL (or any supported DB)

---

### 🖥️ Local Setup

1. Clone the repository:

```bash
git clone https://github.com/kondamahesh1250/ecommerce.git
cd ecommerce-backend
```

2. Configure environment variables:

```env
DB_URL=jdbc:mysql://localhost:3306/ecommerce
DB_USERNAME=root
DB_PASSWORD=yourpassword
```

3. Build the project:

```bash
mvn clean package -DskipTests
```

4. Run the application:

```bash
java -jar target/ecommerce-app-backend.jar
```

---

### 🌐 Deployment (Render)

1. Push code to GitHub
2. Create a new Web Service on Render
3. Add environment variables:

    * `DB_URL`
    * `DB_USERNAME`
    * `DB_PASSWORD`
4. Deploy

---

## 📡 API Details

### 🔐 Authentication APIs

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /auth/register | Register user |
| POST   | /auth/login   | Login user    |

---

### 📦 Product APIs

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /products    | Get all products  |
| GET    | /products/{id} | Get product by ID |
| POST   | /products    | Create product    |
| PUT    | /products/{id} | Update product    |
| DELETE | /products/{id} | Delete product    |

---

## 🔐 SSO Configuration (Google Example)

### 1. Add dependency (if not present)

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>
```

---

### 2. Configure in `application.properties`

```properties
spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET
spring.security.oauth2.client.registration.google.scope=email,profile
```

---

### 3. Google Cloud Setup

* Go to Google Cloud Console
* Create OAuth Client ID
* Add redirect URI:

```
http://localhost:8080/login/oauth2/code/google
```

---

### 4. Access Login

```
http://localhost:8080/oauth2/authorization/google
```

---

## 📂 Project Structure

```
src/
 ├── controller/
 ├── service/
 ├── repository/
 ├── model/
 └── config/
```

---

## 🧠 Tech Stack

* Java
* Spring Boot
* Spring Security
* Hibernate / JPA
* MySQL
* Maven

---
