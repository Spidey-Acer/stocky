# POS Management and Inventory System Setup Guide

## Prerequisites

-   Node.js version 18.x or later
-   Visual Studio Build Tools 2022 with:
    -   Desktop development with C++
    -   Windows 10/11 SDK
    -   MSVC v143 Build Tools
    -   C++ CMake tools
-   Python 2.7 (Make sure to add to PATH during installation)
-   XAMPP (version 7.3.0 recommended) with:
    -   PHP >= 7.3.0
    -   MySQL 5.x or higher

## Required PHP Extensions

-   BCMath PHP Extension
-   Ctype PHP Extension
-   Fileinfo PHP Extension
-   GD2 PHP Extension
-   JSON PHP Extension
-   Mbstring PHP Extension
-   OpenSSL PHP Extension
-   PDO PHP Extension
-   Tokenizer PHP Extension
-   XML PHP Extension

## Installation Steps

1. **Prepare Environment**

```bash
# Install Python 2.7 first, then set environment variable
set NODE_GYP_FORCE_PYTHON=C:\Python27\python.exe
set npm_config_msvs_version=2022
```

2. **Configure XAMPP**

-   Place project files in `C:/xampp/htdocs/stocky`
-   Start Apache and MySQL from XAMPP Control Panel

3. **Configure Virtual Host**

-   Edit `C:\Windows\System32\drivers\etc\hosts`:

```
127.0.0.1 stocky.local
```

-   Edit `C:\xampp\apache\conf\extra\httpd-vhosts.conf`:

```apache
<VirtualHost stocky.local:80>
    ServerAdmin webmaster@stocky.local
    DocumentRoot "C:/xampp/htdocs/stocky"
    ServerName www.stocky.local
    ServerAlias stocky.local

    <Directory "C:/xampp/htdocs/stocky">
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog "logs/stocky.local-error.log"
    CustomLog "logs/stocky.local-access.log" common
</VirtualHost>
```

4. **Install Dependencies**

```bash
# Clean any existing installations
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# Install using Yarn (recommended)
yarn install

# If using npm
npm install
```

5. **Database Setup**

-   Create new MySQL database through phpMyAdmin
-   Set up database credentials in your `.env` file

6. **Access Setup Page**

-   Restart Apache
-   Navigate to `http://stocky.local/setup`
-   Follow the setup wizard:
    1. Configure application name and environment
    2. Enter database credentials
    3. Complete installation

## Default Login Credentials

```
Email: admin@example.com
Password: 123456
```

## Common Issues & Solutions

1. **500 Server Error**

-   Check PHP version compatibility
-   Verify all required PHP extensions are enabled
-   Check file permissions
-   Review error logs in XAMPP

2. **Node-sass Issues**

```bash
# If node-sass fails, try:
yarn remove node-sass
yarn add sass --dev
```

3. **Setup Page Not Found**

-   Verify virtual host configuration
-   Check Apache rewrite module is enabled
-   Ensure all project files are in correct location

4. **Database Connection Issues**

-   Verify MySQL is running
-   Check database credentials in `.env` file
-   Ensure database exists and user has proper permissions

## Development Notes

-   Source code structure:
    -   `/assets` - Contains CSS, JS, Images
    -   `/core` - Contains Laravel framework files
    -   `/core/routes/web.php` - URL routes
    -   `/core/app` - Models
    -   `/core/app/Http` - Controllers
    -   `/core/resources/views` - Views/HTML

## Recommendation

I recommend using Yarn for this project as it tends to handle the node-sass and other dependencies better than npm for this particular application. The error logs suggest better compatibility with Yarn.

# Changelog

This error indicates Python is not installed or not properly added to your system's PATH. Let's fix this step by step:

1. **Download Python 2.7**
   Go to: https://www.python.org/downloads/release/python-2718/

-   Scroll down and download "Windows x86-64 MSI installer" for 64-bit systems

2. **Install Python 2.7**
   During installation:

-   [x] Check "Add Python to PATH"
-   [x] Install for all users
-   Default install location should be `C:\Python27`

3. **Verify Python Path**
   After installation, open a NEW command prompt and check:

```bash
# Check Python path
echo %PATH%

# The path should include:
# C:\Python27 and C:\Python27\Scripts
```

4. **Manually Add to Path if Needed**
   If Python is still not found:

```powershell
# Open PowerShell as Administrator and run:
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\Python27;C:\Python27\Scripts", "Machine")
```

5. **Set Python for node-gyp**

```bash
# Set Python path specifically for node-gyp
set PYTHON=C:\Python27\python.exe
set NODE_GYP_FORCE_PYTHON=C:\Python27\python.exe

# Verify the variables are set
echo %PYTHON%
echo %NODE_GYP_FORCE_PYTHON%
```

6. **Clean and Reinstall**
   After Python is properly set up:

```bash
# Clean previous installation
rm -rf node_modules
yarn cache clean

# Try installation again
yarn install
```

If you're still getting the error, try these alternative steps:

1. **Using Windows Python Launcher**

```bash
# Check if py launcher is installed
py --version

# If it exists, try using it to install Python 2.7
py -2.7 -m pip install --upgrade pip
```

2. **Direct Path Usage**

```bash
# Try using the full path
C:\Python27\python.exe --version

# If this works, you can set it directly
set PYTHON=C:\Python27\python.exe
```

3. **System Settings Check**

-   Open Windows Settings
-   Go to "Manage App Execution Aliases"
-   Disable "App Installer" for Python if it exists

1. Environment Setup:

```bash
# Install specific XAMPP version
- Download XAMPP version 7.3.0 (this specific version is required)
- Install XAMPP
- Start both Apache and MySQL services from XAMPP Control Panel

# Create Virtual Host Configuration
- Edit C:\Windows\system32\drivers\etc\hosts (as administrator)
Add: 127.0.0.1 stocky.local

# Configure Apache Virtual Host
- Edit C:\xampp\apache\conf\extra\httpd-vhosts.conf
Add:
<VirtualHost *:80>
    ServerAdmin webmaster@stocky.local
    DocumentRoot "C:/xampp/htdocs/stocky"
    ServerName www.stocky.local
    ServerAlias stocky.local
    <Directory "C:/xampp/htdocs/stocky">
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog "logs/stocky.local-error.log"
    CustomLog "logs/stocky.local-access.log" common
</VirtualHost>
```

2. Project Setup:

```bash
# Copy project files
- Extract downloaded POS files to: C:/xampp/htdocs/stocky

# Install Dependencies
- Install Composer (https://getcomposer.org/)
- Open terminal in project directory:
cd C:/xampp/htdocs/stocky
composer install
composer update (if install fails)

# Environment Config
- Copy .env.example to .env
- Generate application key:
php artisan key:generate
```

3. Database Setup:

```bash
- Open phpMyAdmin (http://localhost/phpmyadmin)
- Create new empty database
- Update .env file with database credentials:
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=
```

4. Final Steps:

```bash
# Clear caches
php artisan config:clear
php artisan cache:clear

# Restart Apache
- Restart Apache in XAMPP Control Panel
- Access http://stocky.local/setup
- Follow setup wizard:
  1. Name application
  2. Select "Local" environment
  3. Set App Debug to true
  4. Enter database credentials
  5. Test connection
  6. Complete installation

# Default Login:
Email: admin@example.com
Password: 123456
```

Common Issues & Solutions:

1. 500 Server Error:

-   Verify XAMPP version is 7.3.0
-   Check PHP extensions are enabled
-   Review Apache error logs
-   Verify .env configuration

2. Blank Setup Page:

-   Confirm Apache and MySQL are running
-   Verify virtual host configuration
-   Check Apache error logs
-   Clear browser cache

3. Vendor Autoload Error:

```bash
rm -rf vendor
rm composer.lock
composer install
```

4. Database Connection Issues:

-   Verify database exists
-   Check database credentials in .env
-   Ensure MySQL is running
