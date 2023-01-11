/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

enum Role {
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
