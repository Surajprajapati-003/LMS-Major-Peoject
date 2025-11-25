import mysql from "mysql2/promise";

//1️⃣ Connect to MySQL Server
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9129806460@Aziz",
    database :"userdetail",
});
console.log("Connection successful");

//2️⃣ Create Database if not exists
await db.execute(`CREATE DATABASE IF NOT EXISTS userdetail`);
console.log("Database created");


//4️⃣ Create Table if not exists
await db.execute(`
    CREATE TABLE IF NOT EXISTS students (
        id INT PRIMARY KEY,
        username VARCHAR(100),
        email VARCHAR(150)
    )
`);
console.log("Table created");


//5️⃣ Insert Data (CRUD - Create)
await db.execute(`
    INSERT INTO students (id, username, email) VALUES
 
(3, 'riya', 'riya.sharma@gmail.com'),
(4, 'john', 'john_doe@gmail.com'),
(5, 'meera', 'meera09@gmail.com'),
(6, 'sameer', 'sam255@gmail.com'),
(7, 'anjali', 'anjali_k@gmail.com'),
(8, 'rohan', 'rohan001@gmail.com'),
(9, 'kiran', 'kiran_24@gmail.com'),
(10, 'priya', 'priya1999@gmail.com');
`);
console.log("Data inserted");


//6️⃣ Read Data (CRUD - Read)
const [rows] = await db.execute(`SELECT * FROM students `);
console.log(rows);

//update operation

try{
const [rows] = await db.execute("update students set username='priyathapar' where id='10'");
console.log("all students",rows);

} catch(error){
    console.error(error);
}

//delete operation

 try{
 const [rows] = await db.execute("delete from students where username='priyathapar' ");
 console.log("all students",rows);

} catch(error){
     console.error(error);
 }





