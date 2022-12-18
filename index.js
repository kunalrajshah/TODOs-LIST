let add=document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();

function getAndUpdate()
{
  console.log("updating list....");
    let tit=document.getElementById("title").value;
    let desc=document.getElementById("description").value;
    if(localStorage.getItem('items')==null){
      itemsarray=[];
      itemsarray.push([tit,desc]);
      localStorage.setItem('items',JSON.stringify(itemsarray));
    }
    else
    {
      /*itemsarraystr=localStorage.getItem("items");                //it give as a string.
      itemsarray=JSON.parse(itemsarraystr);    */                   //it convert string into json object.
      itemsarray.push([tit,desc]);
      localStorage.setItem('items',JSON.stringify(itemsarray))
    }
    update();
}
function update(){       
        if(localStorage.getItem('items')==null){
          itemsarray=[];
          localStorage.setItem('items',JSON.stringify(itemsarray));
        }
        else{
      itemsarraystr=localStorage.getItem("items");   
      itemsarray=JSON.parse(itemsarraystr);          
      }
                //populate the table
       let tablebody=document.getElementById("tablebody");
       let str="";
       itemsarray.forEach((element,index) => {
          str+=`
          <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>     
          </tr> `;
       });
       tablebody.innerHTML=str;
}

  //For Delete any list
function deleted(itemindex)
{
    // console.log("Delete",itemindex);
    // itemsarraystr=localStorage.getItem("items");
    // itemsarray=JSON.parse(itemsarraystr);     
    // Delete itemIndex element from the array
    itemsarray.splice(itemindex,1);
    localStorage.setItem('items',JSON.stringify(itemsarray));
    update();
}

  //For clear the list
function clearstorage(){
  if(confirm('Do you really want to clear the storage')){
  console.log('clearing the storage');
  localStorage.clear();
  update();
  }
}