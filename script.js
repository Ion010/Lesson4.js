/*let varname = "Name";
function funcName(name){
    console.log("Hello" , name);
}
funcName(varname);



let human = {
    fullname: "Object Name",
    age: 11,
    email: "email.com"
};
console.log(human.fullname);




let cat = {
    catname: "Tolea",
    color: "Tarcat",
    age: 2
}
console.log(cat);

cat.age = 2.5
cat.color = "Sur";

console.log(cat);




elementele/functii -> obiect -> clasa

// ex:
class human {
    let organe = {
        inima: "Transporta singe ",
        creierul: "Prelucreaza info"
    }
    function eat (){
        console.log("Eu mananc");
    }
    age: 274

}




let info = "olikuhmfjgdnybsvacA";

let n = {
    info: "vLadu este ",
    display(parametru){
        console.log(this.info, parametru);
    }
};

n.display("LLOOOOOOOOHHHHHH");





let phone = {
    brand: "Xiaomi",
    model: "Redmi Note 10 Pro",
    color: "Black",
    procesor: "Snapdragon",
    camera: 108,
    ac_dc: "este",

    turnOn(){
        console.log(this.brand, " se porneste ");
    },

    discharge(){
        console.log("Rechearge me .... 1%");
    },

    call(){
        console.log(" Eu pot suna ");
    },

    photo(){
        return " Eu fac poze" + this.camera + "MP");
    }
};

console.log(phone.brand);
phone.photo();
phone.call();*/





class cat{
    constructor(name, age){
        this.name = name;
        this.age  = age;
    }
    ceaipitea(cat1, cat2){
        console.log(cat1 , "a venit la ", cat2, "sa bea cofii din boabe obtinute din caca cu podliva de la elefant si peurma in camera sa faca cikipibarum");
    }
};

let dalbaiob = new cat("Dalbaiob", 2);
let conciuga = new cat("Conciuga", 3);
dalbaiob.ceaipitea(conciuga.name, dalbaiob.name);
conciuga.ceaipitea(dalbaiob.name, conciuga.name);