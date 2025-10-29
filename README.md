**Backend:**  
- Node.js  
- Express.js  
- MySQL (Sequelize) 



# start server 
npm run dev

# Initialize Git in your project
git init  

# Add your GitHub repo as remote (replace with your repo link)
git remote add origin https://github.com/mohammad-danish-ansari/server_logical.git 

# Add all files
git add .  

# Commit changes
git commit -m "React + Node CRUD app"  

# Push to GitHub master branch
git pull origin master 
git push -u origin master 


### how to run server
cd server
npm install
npm run dev

- `bcrypt` → Password hashing  
- `cors` → Cross-Origin Resource Sharing  
- `dotenv` → Environment variable management  
- `express-jwt` & `jsonwebtoken` → JWT authentication  
- `mysql2` & `sequelize` → MySQL connection 
- `morgan` → HTTP request logger  
- `nodemon` → Development server auto-reload  





## backend
  config
    dbSQL.js           # MySQL connection

  controllers
    v1
      website
       <!--  website-related controllers -->
      admin
                movie
                   movieController.js
                   routes.js
                product
                   productController.js
                   routes.js
                user
                   userController.js
                   routes.js
             index.js
                 <!-- all movie,.user routes inside the index.js       -->
      routes.js
           <!-- web and admin routes inside the  routes.js-->
  models
    movieModel.js
    userModel.js
  routes
    v1 
    <!-- vi routes  -->
      

  app.js               # Main server file
  .env                 # Environment variables
