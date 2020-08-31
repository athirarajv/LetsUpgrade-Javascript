console.log("LetsUpgrade JS Assignment : Day5 - Question 3");

let jsonObj = fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

console.log(jsonObj);

for(obj in jsonObj){
    if(obj.completed == true){
        console.log(obj);
    }


// function completedTodos() {
//     var resJson = jsonObj.list.filter(item => item.completed == "false");
//     console.log(resJson);
//   }

function compTodo(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response=>{
  console.log(response);
  return response.json()
  })
  .then(data=>{
  console.log(data);
  for(let i = 0; i<data.length; i++){
    if(data[i].completed == "true"){
      console.log(data[i]);
    }
  }
})
}
