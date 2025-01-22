// const http = require('http');
// const calculate=require("./Calculator");

// const server=http.createServer((req,res) => {
//   const a=10;
//   const b=20;
//   const sum=calculate.add(a,b)
//   const subt=calculate.sub(a,b)
//   const mult=calculate.mul(a,b)
//   res.writeHead(200, { "content-Type":"text/plain"});
//   res.end(`First number : ${a}\nSecond number : ${b}\nSum : ${sum}\nDifference : ${subt}\nProduct : ${mult}`);
// });

// server.listen(3000 , () => {
//   console.log("Server running at http://127.0.0.1:3000/");
// });

// const calculate=require("./Calculator");
// console.log(calculate.add(10,20));

// const fs=require('fs')

// fs.writeFile('sample.txt',"utf8",(err,data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data);
// })

// const fs=require('fs')

// fs.writeFile('sample.txt',"Hello world",(err,data) => {
//   if (err) {
//     console.error(err)
//   }
// });

// const fs=require('fs')
// fs.readFile('sample.json','utf-8',(err,data) => {
//   if (err){
//     console.error(err)
//     return
//   }
//   const json=JSON.parse(data)
//   console.log(json)
// })
// const fs=require('fs')
// const newp = {
//   name : "John",
//   age : 20,
//   city : "New York"
// }
// fs.writeFile('sample.json',JSON.stringify(newp),(err,data) => {
//   if(err){
//     console.error(err)
//   }
// })
const fs = require("fs");
const filePath = "example.json";

function createStudent(newStudent) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    json.push(newStudent);
    fs.writeFile(filePath, JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log("Student added successfully!");
      }
    });
  });
}

function readStudents() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    console.log("Students List:", json);
    console.log("All students have been read successfully!");
  });
}

function updateStudent(rollNo, updatedData) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    const updatedJson = json.map((student) =>
      student.rollNo === rollNo ? { ...student, ...updatedData } : student
    );
    fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log(`Student with roll number ${rollNo} updated successfully!`);
      }
    });
  });
}

function deleteStudent(rollNo) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    const json = JSON.parse(data);
    const updatedJson = json.filter((student) => student.rollNo !== rollNo);
    fs.writeFile(filePath, JSON.stringify(updatedJson, null, 2), (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
      } else {
        console.log(`Student with roll number ${rollNo} deleted successfully!`);
      }
    });
  });
}

readStudents();

updateStudent(1003, { studentName: "Alice", dept: "CSBS" });

createStudent({
  studentName: "John",
  rollNo: 1001,
  dob: "2002-12-10",
  dept: "CSE",
});

deleteStudent(1002);
