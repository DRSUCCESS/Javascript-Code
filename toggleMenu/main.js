let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); // to select all the tags in an array

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }


    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
    
}



// Object-> method 1
let person = new Object(); //use new to create a new instance/object

person.name = "Daniel";
person.eyeColor = "Blue";
person.age = 27;

person.updateAge = function() {
    return ++person.age;
}

console.log(person.name, person.eyeColor, person.age);
person.updateAge();
console.log(person.age);



// Object-> method 2
let psn = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 37,

    updateAge: function() {
        return ++psn.age;
    }
}; console.log(psn.age);

// Object blueprint using constructor
function Person(name, eyeColor, age) {
    // use this-> as a keyword to denote which object you are dealing with
    $this.name = name;
    $this.eyeColor = eyeColor;
    $this.age = age;
    $this.updateAge = function() {
        return ++this.age;
    }; //close all the brackets

}

let person01 = new Person("Daniel", "Blue", 27);
console.log(person01.name);