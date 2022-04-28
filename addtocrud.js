class User{ 
    constructor(name,email){
        this.name=name;
        this.email=email
    }
}
const myForm=document.querySelector('#my-Form')
const submitBtn=document.querySelector('#submit')
document.addEventListener("DOMContentLoaded",displayOnRefresh)
myForm.addEventListener('submit',onSubmit)
function onSubmit(e){
    e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const myObj=new User(name,email)
    axios.post("https://crudcrud.com/api/7cf9c2551559497badd4b15fe5106cd3/appointmentdata",myObj)
    .then((Response)=>{
        console.log(Response)
        addNewLineElement(Response.data)
    })
    .catch((err)=>{
        document.body.innerHTML+="<h4>Some Thing Went Wrong</h4>"
        console.log(err)})
    
}


function addNewLineElement(object){
    const ul=document.querySelector('#listOfPeople')
    const li=document.createElement("li")
    li.appendChild(document.createTextNode(object.name+" "+object.email+" "))
    const a1=document.createElement("input")
    a1.id="edit"
    a1.value="Edit"
    a1.type="button"
    a1.addEventListener("click",(e)=>{
        document.querySelector('#name').value=object.name
        document.querySelector('#email').value=object.email
        li.remove();
    })
    a1.className="delete"
    a1.style.border="2px solid green"
    li.appendChild(a1)
    const a=document.createElement("input")
    a.type="button"
    a.id="delete"
    a.value="Delete"
    a.addEventListener("click",(e)=>{
        localStorage.removeItem(object.email)
        li.remove()
    })
    a.className="delete"
    a.style.border="2px solid red"
    li.appendChild(a)
    ul.appendChild(li)
}