class Project {
    name;
    date;
    features;
    constructor(name, date, features) {
        this.name = name;
        this.date = date;
        this.features = features;
    }
    speak() {
        console.log(`Project Name: ${this.name}, Date: ${this.date}, Features: ${this.features.join(", ")}`);
    }
}

let Plantira = new Project(
    "Plantira",
    "2023-05-15",
    ["Plant identification", "Care tips", "Community forum"]
);

console.log(Plantira.speak());


