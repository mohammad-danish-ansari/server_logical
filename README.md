**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- MySQL (Sequelize) 



# start server 
npm run dev

# Initialize Git in your project (if not already done)
git init  

# Add your GitHub repo as remote (replace with your repo link)
git remote add origin https://github.com/At-Drive/server.git 

# Add all files
git add .  

# Commit changes
git commit -m "Angular + Node CRUD app"  

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
- `mongoose` → MongoDB ODM  
- `mysql2` & `sequelize` → MySQL connection & ORM  
- `morgan` → HTTP request logger  
- `nodemon` → Development server auto-reload  





## backend
  config
    dbConnect.js       # MongoDB connection
    dbSQL.js           # MySQL connection

  controllers
    v1
      admin
       <!--  Admin-related controllers -->
      website
                order
                   orderController.js
                   routes.js
                product
                   productController.js
                   routes.js
                user
                   userController.js
                   routes.js
             index.js
                 <!-- all order,product.user routes inside the index.js       -->
      routes.js
           <!-- web and admin routes inside the  routes.js-->
  models
    orderModel.js
    productModel.js
    userModel.js
  routes
    v1 
    <!-- vi routes  -->
      

  app.js               # Main server file
  .env                 # Environment variables
