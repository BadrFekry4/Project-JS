var ProductName=document.getElementById("ProductName");
var ProductPrice=document.getElementById("ProductPrice");
var ProductCategory=document.getElementById("ProductCategory");
var ProductDescription=document.getElementById("ProductDescription");
var mainBtn=document.getElementById("mainBtn");
var Update
var inCase = 'create';
var ProductList=[];

if(localStorage.setItem(ProductList)!=null){
    ProductList=JSON.parse(localStorage.getItem("list"))
    DisplayProduct()

}else{
    ProductList=[]
}

function AddProduct(){
    var Product={
        name:ProductName.value,
        price:ProductPrice.value,
        category:ProductCategory.value,
        description:ProductDescription.value,
    }
    clear()

    if (inCase === 'create'){
        ProductList.push(Product);
        DisplayProduct();
        localStorage.setItem("List",JSON.stringify(ProductList))
        
        }
        else{
        ProductList[Update]=Product
        DisplayProduct();
        mainBtn.innerText='Add Product'
        inCase = 'create'
        DisplayProduct();
        localStorage.setItem("List",JSON.stringify(ProductList))
        
        }
    
}


function DisplayProduct() {
    var cartona=``;
    for (var i = 0; i < ProductList.length; i++) {
        cartona+=`     <tr>
                        <td>${i+1}</td>
                        <td>${ProductList[i].name}</td>
                        <td>${ProductList[i].price}</td>
                        <td>${ProductList[i].category}</td>
                        <td>${ProductList[i].description}</td>
                        <td><button onclick="updateProduct(${i})" class=" btn btn-outline-warning">Update</button></td>
                        <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
                        </tr>
        `
        
    }
    document.getElementById('TableBody').innerHTML=cartona;
    
}

function clear() {
    ProductName.value='';
    ProductPrice.value='';
    ProductCategory.value='';
    ProductDescription.value='';
}

function deleteProduct(index){
    ProductList.splice(index,1);
    DisplayProduct();
    localStorage.setItem("list",JSON.stringify(ProductList))

}

function updateProduct(index) {
    ProductName.value=ProductList[index].name;
    ProductPrice.value= ProductList[index].price;
    ProductCategory.value=ProductList[index].category;
    ProductDescription.value=ProductList[index].description ;
    mainBtn.innerText="UpdateProduct";
    Update=index;
    inCase = 'update'


}