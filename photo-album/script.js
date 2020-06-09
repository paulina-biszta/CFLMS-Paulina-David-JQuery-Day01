const family = [{
        "firstName": "Greta",
        "lastName": "Doe",
        "relation": "mother",
        "img": "img/mother.jpg"
    },
    {
        "firstName": "Tom",
        "lastName": "Doe",
        "relation": "father",
        "img": "img/father.jpg"
    },
    {
        "firstName": "Wendy",
        "lastName": "Doe",
        "relation": "sister",
        "img": "img/sister.jpg"
    },
    {
        "firstName": "Bill",
        "lastName": "Doe",
        "relation": "brother",
        "img": "img/brother.jpg"
    },
    {
        "firstName": "Suzy",
        "lastName": "Black",
        "relation": "friend",
        "img": "img/mother.jpg"
    },
    {
        "firstName": "Fin",
        "lastName": "James",
        "relation": "friend",
        "img": "img/mother.jpg"
    }
]
const resultDiv = document.getElementById("result")
    /*family.map((family) => {
        resultDiv.innerHTML +=
            '<p >${ family.firstName }</p>'
        '<p>${family.lastName}</p>'
        '<p>${family.relation}</p>'
        '<div>${family.img}</div>'
    })*/
var i = 0
for (i = 0; i < family.length; i++) {
    document.writeln("<p>" + family[i].firstName + "</p>");
    document.writeln("<p>" + family[i].lastName + "</p>");
    document.writeln("<p>" + family[i].relation + "</p>");
    document.writeln("<div>" + family[i].img + "</div>");
}