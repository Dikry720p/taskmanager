//MyObj
var myObj= {
    //Select TextArea Func
    textSelect: function(){
        document.getElementById('deskripsi').select();
    },

//Hide form 
    hide: function() {
    document.getElementById("form").style.display = "none";
    document.getElementById("show").style.display = "inline-block";

},
//Show Form 
    show:function(){

    document.getElementById("form").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById('tanggal').valueAsDate = new Date();
    },
    //Hapus data 
    removeTask: function () {
    var id = this.getAttribute('id');
    var myTasks = returnToDo();
    myTasks.splice(id, 1);
    localStorage.setItem('myData', JSON.stringify(myTasks));
    document.getElementById('myTasks').innerHTML = '';
    showMyTasks();
    console.log('delete');

}
};
//local data
function returnToDo(){
    var myTasks = [];
    var myTasksTemp = localStorage.getItem('myData');
    if(myTasksTemp != null){
        myTasks = JSON.parse(myTasksTemp);
    }
    return myTasks;
}
//create
function Task(){
    this.Nama = document.getElementById('Nama').value;
    this.Judul = document.getElementById('Judul').value;
    this.date = document.getElementById('tanggal').value;
    this.describe = document.getElementById('deskripsi').value;
}
//Add
function newTask(x,y,z,o){
    document.getElementById('myTasks').innerHTML +=
        '<div class="col l3 m4 s12 animated zoomIn"> <h4>'+z+  ':</h1>'+
        '<p style="border-bottom: solid 2px;">'+y+'</p>' +
        '<p> '+x+'</p>' +
        '<p>Tenggat: ' +o +'</p>'+
        '<div class="btn red" style="width:200px;" >Hapus</div>'+
    '</div>'
}
//GET ALL
function showMyTasks(){
    var myTasks = returnToDo();
    document.getElementById('myTasks').innerHTML = '';
    for(var i=0;i<myTasks.length;i++){
        newTask(
            myTasks[i].Nama,
            myTasks[i].describe,
            myTasks[i].Judul,
            myTasks[i].date
        );
    }
    var button = document.getElementsByClassName('red');
    for (var j = 0; j < button.length; j++) {
        button[j].addEventListener('click', myObj.removeTask);
        console.log(button[j].addEventListener('click', myObj.removeTask));

    }
}
function submitInfo(){
    var myTasks = returnToDo();
    myTasks.push(new Task);
    localStorage.setItem('myData',JSON.stringify(myTasks));
    showMyTasks();
    myObj.hide();
}
showMyTasks();