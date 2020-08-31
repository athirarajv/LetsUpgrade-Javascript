console.log("LetsUpgrade JS Assignment : Day5 - Question 2");


class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.coins = 0;
      this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in.`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out.`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, age is ${this.age}, email is ${this.email}, coins are ${this.coins}, courses are ${this.courses}.`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCoins(user, coins){
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins`);
        return this;
    }
    removeCoins(user, coins){
        user.coins--;
        console.log(`${user.name} has ${user.coins} coins`);
        return this;
    }
}

class Admin extends Moderator{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    addCourse(user,course){
        user.courses.push(course);
        console.log(`${user.name} has added ${course} courses.`);
        return this;
    }
    deleteCourse(user,course){
        user.courses=user.courses.filter(courses=>courses!==course);
        console.log(`${user.name} has deleted ${course} courses.`);
        return this;
    }
}


let user1 = new User('Zendaya',23,'zendaya@gmail.com')
let user2 = new User('Hunter',24,'hunter@gmail.com')
let mod = new Moderator('Selena',24,'selena@gmail.com','Moderator');
let admin = new Admin('Cole',25,'cole@gmail.com','Admin');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});

console.log("The users are" + users);

// adding coins and courses to users
user1.login();
mod.addCoins(user1);
mod.addCoins(user1);
mod.addCoins(user1);
admin.addCourse(user1,'Javascript');
admin.addCourse(user1,'Python');
user1.getDetails();

user2.login();
mod.addCoins(user2);
admin.addCourse(user2,'Python');
user2.getDetails();

// removing coins and courses from users
mod.removeCoins(user1);
admin.deleteCourse(user1,'Python');
user1.getDetails().logout;
user2.getDetails().logout;




