var books = [
    ["Node Js", 1000, "Sanjeev verma", "t vell pvt ltd.",],
    ["React Js", 2000, "Mahash verma", "t vell pvt ltd.",],
    ["Veu Js", 3000, "Sanjeev verma", "t vell pvt ltd.",],
]
function BindBooks(books) {
    var row = `   <div class="rowe"><tr><th>SNo</th><th>Title</th><th>Price</th><th>Author</th><th>Publisher</th>   <th>Action</th></tr>
    </div>`;
    books.forEach(function (book, i) {
        row += `<tr><td>${i + 1}</td><td>${book[0]}</td><td>${book[1]}</td><td>${book[2]}</td><td>${book[3]}</td>   <td> 
       <a href='#' onclick = edit(${i})><i class = "fa fa-edit"> E</i></a>
       <button onclick="view(${i})">View</button>
       <button type="submit" onclick="openForm() ">
       <a href='#' onclick= del(${i})><i class = "fa fa-trash"> X</i></a>
     </button>
        </td>  </tr>`;
    })
    document.getElementById('tbl').innerHTML = row;
}

// aklfjhgjksdfh
function openForm() {
    document.getElementById("myForm").style.display
    = "block";
    }
    function closeForm() {
    document.getElementById("myForm").style.display
    = "none";
    }


//  onclick delete
function del(i) {
    event.preventDefault();
    books.splice(i, 1);
    BindBooks(books);
}




//  function openIt(){
//     document.querySelector(".box").style.display
//     = "block";
//  }
//  openIt();
// const lists = document.querySelector(".rowe");
// const show = document.querySelector('.Show-Data');
// const view = (i) => {
//     const showData = books[i]
//     const data = `
//     <div class="about-clint"  style="background-color: red;">
//     <p>${showData.title}</p>
//     <p>${showData.price}</p>
//     <p>${showData.author}</p>
//     <p>${showData.publish}</p>
//     </div>`
//     show.innerHTML = data;
// };


// books.forEach((item,index)=>{
//     const std= `
//    <div class="inp-std">
//    <span class="jfw">
//    <span>${item.}</span>
//    <span>${item.Name}</span>
//    <span>${item.Age}</span>
//    <span>${item.class}</span>
//    <span>${item.Adress}</span>
//    </span>
//    <button onclick="view(${index})">View</button>
//    </div> `
//     lists.innerHTML += std;
    
// });

// update book
// function edit(i) {
//     var book = books[i];
//     document.getElementById("title").value = book[0];
//     document.getElementById("price").value = book[1];
//     document.getElementById("author").value = book[2];
//     document.getElementById("publish").value = book[3];
//     document.getElementById("index").value = i;
//     // update btn book
// }

// for add new title
function AddBook() {

    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var author = document.getElementById("author").value;
    var Publisher = document.getElementById("publish").value;
    // console.log(index)
    // var index = document.getElementById("index").value;
    var Book = [title, price, author, Publisher];
    // if (index == "" || index == undefined) {
    //     books.splice(Book);
    // } else {
    //     books.splice(index, 1, Book)
    //     document.getElementById("btn-book").innerText = "add book";
    // }



    books.push(Book);
    BindBooks(books);
    ClearForm();
}




// skdjkfdhfgfdjghd


// function openForm() {
//     document.getElementById("myForm").style.display
//     = "block";
//     }
//     function closeForm() {
//     document.getElementById("myForm").style.display
//     = "none";
//     }









document.getElementById('btn-book').addEventListener("click", AddBook);


// clear form
function ClearForm() {
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("author").value = "";
    document.getElementById("publish").value = "";
}
BindBooks(books);






