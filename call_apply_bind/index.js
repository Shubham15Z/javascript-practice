name1 = {
    firstname: "Ajay",
    lastName: "Roy",
    printFullName: function (hometown, state) {
        console.log(this.firstname+ " "+this.lastName+ " from "+hometown+" , "+state)
    }
};

name1.printFullName("Pune", "Maharashtra");

//function or method borrowing

name2 = {
    firstname: "Vijay",
    lastName: "Sane"
}

name1.printFullName.call(name2, "Hydrabad", "Telangana");
name1.printFullName.apply(name2, ["Hydrabad", "Telangana"]);
