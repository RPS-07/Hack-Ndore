# Hack-Ndore

# Revenue Collection and Management System

## Overview

Welcome to the Revenue Collection and Management System for municipal corporations. This web application is designed to streamline the process of collecting, managing, and reporting on municipal revenues, including taxes, fees, and other sources of income.

## Features

- _User Authentication_: Secure login and registration system for different user roles (administrators, managers, and staff).
- _Revenue Collection_: Simplified process for collecting various types of revenues including property taxes, utility payments, and business licenses.
- _Payment Gateway Integration_: Integration with multiple payment gateways to facilitate online payments.
- _Revenue Management_: Comprehensive tools for managing collected revenues, tracking overdue payments, and generating financial reports.
- _Reporting and Analytics_: Detailed reporting and analytics to monitor revenue trends, collections, and outstanding balances.
- _Notifications_: Automated notifications and reminders for due payments and outstanding balances.
- _User-Friendly Interface_: Intuitive and responsive design for ease of use on desktops, tablets, and mobile devices.
- _Security_: Robust security measures to protect sensitive financial data.

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)
- npm (v6.x or higher)

### Steps

1. _Clone the Repository_:
   ```sh
   git clone https://github.com/RPS-07/Hack-Ndore.git
   cd Hack-Ndore
2. **Head to the client folder**:
   ```sh
   cd client
3. _Install the Dependencies_:
   ```sh
   npm install
4. **Configure Environment Variables(in Server Folder)**:
   ```sh
   MAIL_HOST=
   JWT_SECRET=
   FOLDER_NAME=
   MONGODB_URL=
   PORT=
   CLOUD_NAME=
   API_KEY=
   API_SECRET=
   STRIPE_SECRET_KEY=
5. _Head to Server Folder and initialize MongoDB Server_:
   ```sh
   cd ..
   cd server
   node index.js(OR)
   nodemon
6. **Initializing React Development Server**:
   ```sh
   npm start
