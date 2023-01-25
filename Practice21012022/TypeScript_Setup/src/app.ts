class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const it = new Department("ICT");
console.log(it);

// Shortening class declaration via public keyword

class Product {
  title: string;
  price: number;
  private isListed: boolean;
  constructor(name: string, pr: number) {
    this.title = name;
    this.price = pr;
    this.isListed = true;
  }
}
class Product_shortened {
  private isListed: boolean;
  constructor(public title: string, public price: number) {
    this.isListed = true;
  }
}
