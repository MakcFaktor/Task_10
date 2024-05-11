let user = {
  name: "Максим",
  age: 30,
  location: "Одеса",
  getInfo: function () {
    console.log(`Ім'я: ${this.name}`);
    console.log(`Вік: ${this.age}`);
    console.log(`Місце проживання: ${this.location}`);
  },
};

user.getInfo();
