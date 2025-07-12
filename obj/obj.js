const user = new Object() // singleton boj

const user1 = {}

user1.id = "123",
user1.name = "Shantnau",
user1.isLoggerIn = false

// console.log(user1);

const user2= {
    email: "shantnaud430@gmail.com",
    fullname: {
         userfullname:{
             firstname:  "shantnau",
             lastname: "deshpande"
         }
      }
}
console.log(user2.fullname.userfullname);
