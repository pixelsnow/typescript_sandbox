/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

/* enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "James",
  age: 29,
  hobbies: ["sleeping", "sports"],
  role: Role.ADMIN,
};

console.log(person);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  hobbies: string[];
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "Agreat carpet - almost brand-new!",
  },
  hobbies: ["swimming", "reading", "cooking"],
};

product.hobbies.forEach((hobby) => console.log(hobby.toUpperCase()));

type Uid = string | number;

const logDetails = (uid: Uid, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

type User = { name: string; uid: Uid };

const greet = (user: User) => {
  console.log(`${user.name} says hello`);
};

logDetails(4, "item");

greet({ name: "james", uid: 5 });

function voidTest(a: string): void {
  console.log(a);
  //return true;
}

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}
sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});

// Exclamation mark means it's not NULL
const button = document.querySelector("button")!;

button.addEventListener("click", () => console.log("button clicked")); */

// GENERICS

type numArray = Array<number>;
type strArray = Array<string>;

/* const last = (arr: Array<any>) => {
  return arr[arr.length - 1];
}; */

const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l1 = last<number>([1, 2, 3]);
console.log(l1);

const l2 = last(["a", "b", "c"]);
console.log(l2);

const l3 = last<string>(["a", "b", "c"]);
console.log(l3);
