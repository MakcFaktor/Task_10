let contactBook = {
  contacts: [
    { name: "Петро", phone: "123-456-7890", email: "petro@example.com" },
    { name: "Микола", phone: "456-789-0123", email: "mykola@example.com" },
  ],

  searchContactByName: function (name) {
    let foundContacts = this.contacts.filter(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );
    return foundContacts.length > 0 ? foundContacts : "Контакт не знайдено";
  },

  addContact: function (name, phone, email) {
    if (this.searchContactByName(name) !== "Контакт не знайдено") {
      return "Контакт з таким ім'ям вже існує";
    }

    this.contacts.push({ name: name, phone: phone, email: email });
    return "Контакт успішно додано";
  },
};

console.log(contactBook.searchContactByName("Петро"));
console.log(contactBook.searchContactByName("Микола"));
console.log(contactBook.addContact("Іван", "789-012-3456", "ivan@example.com"));
console.log(
  contactBook.addContact("Сергій", "111-222-3333", "serguy@example.com"),
);
