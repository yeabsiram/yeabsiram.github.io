String.prototype.filter = function(bannedWords){
    let splitted = this.split(" ");
  

    return splitted.filter((x) => !bannedWords.includes(x)).reduce((a,b)=> a + " " + b);
}

Array.prototype.bubbleSort = function(){
    let toBeSorted = this;
    for(let i = 0; i < toBeSorted.length; i++)
    {
        for(j = 0; j < toBeSorted.length; j++)
        {
            if(toBeSorted[i] < toBeSorted[j])
            {
                let temp = toBeSorted[j];
                toBeSorted[j] = toBeSorted[i];
                toBeSorted[i] = temp;
            }
        }   
    }
    return toBeSorted;
}

var Person = function(){};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;

}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old. ";
}


var Teacher = function(){};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
   return this.name + " is now teaching " + subject;
}






