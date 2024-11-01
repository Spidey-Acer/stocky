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

# 🚀 Major System Upgrades

## 🛠️ Technical Improvements

-   Upgraded to Laravel 8 with PHP 8 support (min PHP 7.3.0)
-   Node.js dependencies updated to latest versions
-   Enhanced security measures and code optimization
-   Added cache clearing functionality
-   Timezone selection in settings
-   System update notifications

## 💳 Payment & Financial Features

-   Stripe Payment Gateway integration
-   Enhanced profit calculation using FIFO and Average Cost methods
-   Credit card management for clients
    -   Save cards for future use
    -   Set default payment methods
-   Improved due payment handling
    -   Batch payment processing for customers
    -   Supplier due payment consolidation

## 📱 Communication & Notifications

-   Multiple SMS Gateway integrations:
    -   Twilio
    -   Nexmo (Vonage)
    -   InfoBip
-   Custom template system for:
    -   SMS communications
    -   Email notifications
-   Dynamic email & SMS templates

## 🏪 POS Enhancements

-   Barcode scanning capabilities:
    -   Manual barcode entry
    -   Auto quantity increase on scan
    -   Auto-generate barcode feature
-   Receipt improvements:
    -   Company logo integration
    -   Warehouse information
    -   Customizable footer
    -   Dynamic paper size options
    -   Shipping fee display
-   Default customer & warehouse settings

## 📦 Inventory Management

-   Warranty tracking system:
    -   IMEI number support
    -   Serial number tracking
-   Product enhancements:
    -   Non-sellable item flagging
    -   Variant pricing & costing
    -   Auto-generate barcodes
-   Stock management:
    -   Multi-warehouse support
    -   User warehouse assignment
    -   Stock alerts
    -   Direct stock updates

## 📊 Reporting & Analytics

-   New report types:
    -   Product analytics
    -   Sales analysis
    -   Purchase tracking
    -   User activity
    -   Stock status
    -   Customer/Supplier due reports
-   Enhanced features:
    -   Date range filtering
    -   Warehouse-specific filtering
    -   PDF export capability
    -   Revenue calculations
    -   Total amount summaries

## 👥 User Management

-   Warehouse access control
-   Enhanced permission system
-   Dashboard access controls
-   HRM module integration

## 🌍 Internationalization

-   New language support:
    -   Korean
    -   Bengali
    -   Brazilian Portuguese
    -   Danish
-   Default language selection
-   Right-to-left (RTL) support
-   Dynamic currency symbol positioning

## 📝 Documentation

-   Installation guides
-   Local development setup
-   Upgrade procedures
-   Server requirements
-   Troubleshooting guides

# 🐛 Bug Fixes & Optimizations

-   PDF generation improvements
-   Import/Export functionality fixes
-   Mobile search optimization
-   Print CSS enhancements
-   Transaction calculation corrections
-   Database structure optimizations

# XAMPP Laravel Project Setup and Troubleshooting Guide

## Initial Issues Encountered

1. phpMyAdmin Configuration Error
    - Error: `#1142 - INSERT command denied to user 'pma@localhost'`
    - 500 Server Error on localhost
2. MySQL Connection Issues
    - "Could not find driver" error
    - Access denied for root user
3. Laravel Session Directory Issues
    - Failed to write to sessions directory

## Step-by-Step Resolution

### 1. MySQL PDO Driver Setup

```bash
# Enable in php.ini (C:\xampp\php\php.ini)
extension=pdo_mysql
extension=mysqli
```

### 2. Directory Structure and Permissions

```bash
cd C:\xampp\htdocs\stocky
mkdir -p storage\framework\sessions
mkdir -p storage\framework\views
mkdir -p storage\framework\cache
mkdir -p bootstrap\cache

# Set permissions
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

### 3. MySQL Root User Configuration

```sql
-- Stop MySQL in XAMPP
-- Start in safe mode
mysqld --skip-grant-tables --skip-networking

-- In new command prompt
mysql -u root

-- Reset root password
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;
```

### 4. Laravel Environment Configuration

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=stocky
DB_USERNAME=root
DB_PASSWORD=
```

### 5. phpMyAdmin Setup

```sql
CREATE USER 'pma'@'localhost' IDENTIFIED BY 'pmapass';
GRANT ALL PRIVILEGES ON phpmyadmin.* TO 'pma'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'pma'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### 6. Laravel Cache and Configuration

```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan key:generate
```

## Project Structure

```
C:/xampp/htdocs/stocky/
├── storage/
│   └── framework/
│       ├── sessions/
│       ├── views/
│       └── cache/
├── bootstrap/
│   └── cache/
└── .env
```

## Common Issues and Solutions

### 1. MySQL Connection Issues

-   Verify MySQL is running in XAMPP Control Panel
-   Check user permissions in MySQL
-   Verify PDO drivers are enabled
-   Clear Laravel configuration cache

### 2. 500 Server Error

-   Check Laravel log files in storage/logs
-   Verify directory permissions
-   Enable error reporting in php.ini
-   Clear Laravel caches

### 3. phpMyAdmin Access

-   Configure proper user permissions
-   Create required databases
-   Set up correct configuration in config.inc.php

## Important Configuration Files

### 1. php.ini Location

```
C:\xampp\php\php.ini
```

### 2. MySQL Configuration

```
C:\xampp\mysql\bin\my.ini
```

### 3. phpMyAdmin Configuration

```
C:\xampp\phpMyAdmin\config.inc.php
```

## Best Practices

1. Always check XAMPP Control Panel for service status
2. Keep regular backups of the database
3. Monitor Laravel log files for errors
4. Maintain proper file permissions
5. Keep configuration files backed up

## Post-Setup Verification

1. Verify MySQL connection: `php artisan migrate`
2. Check phpMyAdmin access
3. Verify Laravel routes are working
4. Check storage directory permissions
5. Verify session handling

## Additional Resources

-   XAMPP Documentation: https://www.apachefriends.org/docs/
-   Laravel Documentation: https://laravel.com/docs
-   MySQL Documentation: https://dev.mysql.com/doc/

## Maintenance Tips

1. Regularly clear Laravel caches
2. Monitor log files
3. Keep backups of configurations
4. Update PHP extensions as needed
5. Monitor database performance
