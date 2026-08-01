let Data= "Secret information";
class user {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
      console.log(Data);
    }
}
class admin extends user {
constructor(name,email){
    super(name,email);
}
editdata(){
    Data="new value";
}
}
let student1=new user("Anshu","anshu@gmail.com");
let student2=new user("Nikhil","nikhil@gmail.com");
let Admin=new admin("admin","admin@gmail.com");