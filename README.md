# colors-lamp
## Technologies Used
* DigitalOcean
* LAMP Stack (Linux, Apache, MySQL, PHP)
* HTML
* CSS
* JavaScript
## High-Level Setup Instructions
1. **Get a remote Linux server running LAMP stack**
* Create a droplet with DigitalOcean
* Set up a linux server with Ubuntu using the LAMP stack
* Verify the web servers are running
2. **MySQL Database Setup**
* Create database
* Create a `Users` table with rows (ID, FirstName, LastName, Login, Password)
* Create `Colors` table with rows (ID, Name, UserID)
* Populate tables with initial data
3. **Implement Backend Logic**
* Create `LAMPAPI` directory inside `/var/www/html`
* Upload PHP endpoint files to the directory
* Configure and update 
4. **Front-End**
* Upload css, images, and js directories to `/var/www/html`
* Upload HTML files to `/var/www/html`
5. **Testing**
* Test your web application using test data
## How to Run and Access the Application
* Open a web browser and type URL `http://personaldomain.com` or `http://IP-address`
### Features
1. **Login**
* Enter a valid username and password and select the "Do It" button
2. **Add Color**
* Once logged in navigate to the "Color To Add" textbox
* Type in the color you want to add
* Choose the "Add Color" button to save
3. **Search Color**
* Once logged in navigate to the "Color To Search For" textbox
* Type in the color you want to search for 
* Choose the "Search Color" button
## Assumptions, Limitations, or AI Usage
* The Digital Ocean droplet is running and accessible
* The database is properly configured
* Only the LAMP stack was utilized 
* Limited security features

