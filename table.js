var contact1 = {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
};

var contact2 = {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
};

var contact3 = {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
};

// Create  all contacts
var contacts = [contact1, contact2, contact3];

// Display information 
console.log("First Contact:");
console.log("Name: " + contacts[0].name);
console.log("Phone: " + contacts[0].phone);
console.log("Email: " + contacts[0].email);

console.log("Last Contact:");
console.log("Name: " + contacts[contacts.length - 1].name);
console.log("Phone: " + contacts[contacts.length - 1].phone);
console.log("Email: " + contacts[contacts.length - 1].email);

