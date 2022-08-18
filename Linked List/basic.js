//This is very basic form of linked list in JS

const n1 = {
    data: 100,
};

const n2 = {
    data: 200,
};

// creating an attribute of n1
n1.next = n2;
console.log(n1) //{ data: 100, next: { data: 200 } }
