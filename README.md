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

# Version 1.1 - 07-04-2021

-   Updated : bug Fixed in backup
-   Added : Support IE

# Version 1.2 - 08-04-2021

-   Added : Footer Dynamic
-   Added : Instruction Installation In Localhost
-   Updated : Changing the Database Structure
-   Updated : bug Fixed in dark mode
-   Updated : bug Fixed in Edit Payment

# Version 1.3 - 10-04-2021

-   Updated : Improve Code
-   Updated : Improve security

# Version 1.4 - 12-04-2021

-   Added : Updated Guide
-   Updated : Fixed dropdown in purchases
-   Updated : Fixed Import Products by csv

# Version 2.0 - 21-04-2021

-   Updated : Improve security
-   Added : Integration Payment Gateway ( Stripe)
-   Updated : Upgrade to laravel 8 (Support php 8)
-   Updated : The new minimum PHP version is now 7.3.0.
-   Added : Filter By Date for all reports

# Version 2.1.0 - 22-04-2021

-   Updated : Improve security
-   Updated : Fix bug Duplicate User & Customer & Product Code

# Version 2.2.0 - 02-05-2021

-   Added : SMS API (Twilio)
-   Added : Footer Dynamic
-   Updated : Fix bug in Password Database
-   Updated : Fix bug in Stock Alert

# Version 2.3.0 - 18-05-2021

-   Added : Default Customer & Warehouse in POS
-   Updated : Fix bug in editing Variants Product

# Version 2.4.0 - 02-06-2021

-   Added : Add Sale Date in invoice
-   Updated : Fix Duplicated product in import
-   Updated : Fix Minor bugs

# Version 2.5.0 - 08-06-2021

-   Updated : Fix POS Receipt Printer

# Version 3.0.0 - 25-06-2021

-   Added : Barcode Scanner in POS
-   Updated : Fix bug in Import Product
-   Updated : Fix bug in download file
-   Updated : Updated Iconsmind

# Version 3.1.0 - 28-06-2021

-   Updated : Minor bug fixes

# Version 3.2.0 - 30-06-2021

-   Updated : Fix bug in download pdf (Support php 8)
-   Added : Clearing cache with a click of a button
-   Updated : Fix bug in Import Product (without create warehouse)
-   Updated : Change currency symbol from the right to the left
-   Added : Video in documentation showing you the steps on how to upgrade stocky
-   Updated : Minor bug fixes

# Version 3.3.0 - 06-07-2021

-   Added : Add the ability to enter the BarCode manually
-   Added : Barcode Scanner (All Operations)
-   Updated : Fix bug in barcode printing
-   Added : Paper Size for printing barcode labels
-   Updated : Correct some words in Spanish translation
-   Updated : Fix bug in Editing Variants
-   Updated : Fix bug in generate backup
-   Updated : Improve security
-   Updated : Documentation Updated
-   Updated : Minor bug fixes

# Version 3.3.1 - 06-07-2021

-   Fixed : Fix bug in pos

# Version 3.3.2 - 12-07-2021

-   Fixed : bug in pos
-   Fixed : Design & Size receipt pos for thermal receipt printer
-   Fixed : Currency symbol Dynamic in input fields
-   Fixed : Bug Duplicate save data when click more than one times

# Version 3.4.0 - 29-07-2021

-   Added : Server requirements in Installation
-   Added : Automatically increase quantity in POS when scanning items
-   Added : option to choose unit when create Transaction
-   Added : Paid Amount & due Amount in pos receipt
-   Fixed : Show Items in dashboard with permissions
-   Fixed : if Transaction deleted the stock return to previous status
-   Fixed : Profit Calculation based by (price & cost)
-   Fixed : Report Profit And Loss
-   Fixed : Bug in editing Transaction
-   Fixed : Bug in Units
-   Updated : Improve security
-   Updated : Documentation Updated

# Version 3.5.0 - 02-08-2021

-   Added : Cost of goods sold formula implemented to calculate profit
-   Added : received & paying Amount & change
-   Fixed : bug in calculate Due Amount
-   Fixed : migration database
-   Fixed : Minor bug fixes
-   Updated : pos receipt

# Version 3.6.0 - 08-08-2021

-   Fixed : Minor bug fixes
-   Updated : Documentation Updated

# Version 3.7.0 - 26-09-2021

-   Added : Choose default language from area settings
-   Added : Pos Settings
-   Fixed : bug in twillio SMS
-   Updated : Hide Documentation from sidebar
-   Updated : Improve performance
-   Updated : Documentation Updated
-   Fixed : bug fixes

# Version 3.8.0 - 28-10-2021

-   Updated : Report profit
-   Updated : Update stock without purchase product
-   Fixed : Bug fixes

# Version 3.9.0 - 01-01-2022

-   Added : Add Korean language
-   Added : Add Paid Amount & Due on pdf
-   Added : Add Note on Detail transaction
-   Fixed : Search box fixed
-   Fixed : Bug fixes

# Version 4.0.0 - 11-04-2022

-   Added ability to assign warehouses to users
-   Added Module HRM
-   Added multi reports
-   Added Date Range in all reports
-   Update all the Node.js dependencies to their latest version
-   Documentation Updated
-   Fix issue in search box not working properly on mobile
-   Fix Print CSS
-   Make fields optional for Customers & Providers
-   Fixed npm install
-   Small Bug fixes

# Version 4.0.1

-   Added Warranty Management (IMEI & SERIAL NUMBERS)
-   Added Delivery Management
-   Added ability to assign warehouses to users
-   Added Users Report
-   Added Stock Report
-   Added Due Report to Customers
-   Added Due Report to Suppliers
-   Added Export PDF to all reports
-   Small Bug fixes

# Version 4.0.2

-   Added : Pay all due from the customer list in one payment
-   Added : option product not for selling
-   Added : Nexmo (Vonage now) SMS Gateway
-   Added : bengali language
-   Added : Notification for new update
-   Added : Select Timezone in settings
-   Added : more setting pages
-   Added : invoice footer
-   Added : Permission to Dashboard
-   Added : shipping fees in pos receipt
-   Updated : Sale return will be according to Sale reference.
-   Updated : Purchase return will be according to Purchase reference.
-   Updated : Renamed all routes api
-   Updated : documentation Updated
-   Fixed : Mail settings issue
-   Fixed : Bug fixed when you make a payment
-   Fixed : only admin or user who has permission "system_setting" he can upgrade the system
-   Fixed : bug fixes

# Version 4.0.3

-   Add sum of Amount in reports
-   Add clean-webpack-plugin
-   Some bugs Fixed

# Version 4.0.4

-   Pay all sell return due from the customer list in one payment
-   Pay all Supplier due from the Supplier list in one payment
-   Pay all Purchase return due from the Supplier list in one payment
-   Fix bug in Purchase & sale return
-   Add Brazilian Portuguese Language
-   Add Tax Number for Customers & Suppliers
-   Add Total revenue (sales - sales return)
-   Documentation Updated
-   Some bugs Fixed

# Version 4.0.5

-   Added : Profit Net using (FIFO METHOD)
-   Added : Profit Net using (Average Cost)
-   Added : Product report
-   Added : Product Sell report
-   Added : Product Purchase report
-   Added : Filter by warehouse in reports & dashboard
-   Added : Enable/Disable Print Invoice automatically
-   Fixed : Arabic language in PDF
-   Fixed : bug in twillio SMS
-   Fixed : print pos receipt
-   Some bugs Fixed

# Version 4.0.6

-   Fixed issue in Stripe
-   Showing the credit card saved for the client
-   Choose the default credit card for the client
-   Added Price & cost & code to Variants
-   Added Auto Generate barcode
-   Added New SMS Gateway InfoBip
-   Added Custom Templates for SMS
-   Added Custom Templates for Email
-   Added Danish Language
-   Added Price in barcode printing
-   Added an option to choose if you want make a quotation
    with items has no stock or has stock
-   Added more Permissions
-   Added logo in receipt POS
-   Added warehouse in receipt POS
-   Fixed bug in assign warehouses to users
-   Fixed bug in Import products
-   Some bugs Fixed
