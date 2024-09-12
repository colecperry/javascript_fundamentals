// Objects in objects
const userInfo = {
    firstName: "Avi",
    lastName: "Flombaum",
    company: { // company points at another objects
      name: "Flatbook Labs",
      jobTitle: "Developer Apprentice",
    },
    friends: [ // friends points at an array of objets
      {
        firstName: "Nancy",
        lastName: "Burgess",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Developer Apprentice",
        },
      },
      {
        firstName: "Corinna",
        lastName: "Jackson",
        company: {
          name: "Flatbook Labs",
          jobTitle: "Lead Developer",
        },
      },
    ],
    projects: [
      {
        title: "Flatbook",
        description:
          "The premier Flatiron School-based social network in the world.",
      },
      {
        title: "Scuber",
        description:
          "A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
      },
    ],
  };

console.log("objects in objects: ")
console.log(userInfo.lastName);
console.log(userInfo.company.jobTitle);
console.log(userInfo.friends[0].firstName);
console.log(userInfo.projects[1].title);
console.log(userInfo.friends[0].company.name);

// Arrays in arrays
const letters = ["a", ["b", ["c", ["d", ["e"]], "f"]]];

console.log("a:", letters[0])
console.log("b array:", letters[1])
console.log("b:", letters[1][0])
console.log("c array:", letters[1][1])
console.log("c:", letters[1][1][0])
console.log("d array:", letters[1][1][1])
console.log("d:", letters[1][1][1][0])
console.log("e array:", letters[1][1][1][1])
console.log("e:", letters[1][1][1][1][0])
console.log("f:", letters[1][1][2])

// Use recursion to iterate over a nested array
const numbers = [1, [2, [4, [5, [6]], 3]]];

function deepIterator(target) {
    if (typeof target === "object") {
      for (const key in target) {
        deepIterator(target[key]);
      }
    } else {
      console.log(target);
    }
  }

deepIterator(numbers)