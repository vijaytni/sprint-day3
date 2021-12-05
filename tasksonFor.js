var data = [ { person: "Vijay", age: "22", company: "Wipro", experience: "7 Years" }, 
{ person: "Vino", age: "5", company: "TCS", experience: "17 Years" }, 
{ person: "Priya", age: "8", company: "VIT", experience: "27 Years" }, ]; 

for(i=0;i<data.length;i++){
    console.log(data[i].person)
    console.log(data[i].age)
    console.log(data[i].company)
    console.log(data[i].experience)
}


for(i=0;i<data.length;i++){
    for(var values in data[i]){
        console.log(`${values}: ${data[i][values]}`);
    }
}
 

data.forEach(function(content){
    console.log(content.person)
    console.log(content.age)
    console.log(content.company)
    console.log(content.experience)
})

for(var elements of data){
    console.log(elements.person)
    console.log(elements.age)
    console.log(elements.company) 
    console.log(elements.experience)
 
}