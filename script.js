var Categories = ['Clothing', 'Food'];
var Products = [
    {name:'Shirts', category:'Clothing'},
    {name:'Pants', category:'Clothing'},
    {name:'Cereals', category:'Food'},
    {name:'Fruits', category:'Food'}
]
var Brands = [
    {name:'Shirt1', category:'Clothing',product:'Shirts'},
    {name:'Shirt2', category:'Clothing',product:'Shirts'},
    {name:'Shirt3', category:'Clothing',product:'Shirts'},
    {name:'Pant1', category:'Clothing',product:'Pants'},
    {name:'Pant2', category:'Clothing',product:'Pants'},
    {name:'Pant3', category:'Clothing',product:'Pants'},
    {name:'Cereal1', category:'Food',product:'Cereals'},
    {name:'Cereal2', category:'Food',product:'Cereals'},
    {name:'Cereal3', category:'Food',product:'Cereals'},
    {name:'Fruit1', category:'Food',product:'Fruits'},
    {name:'Fruit2', category:'Food',product:'Fruits'},
    {name:'Fruit3', category:'Food',product:'Fruits'}
]

var data = [{brandname: 'Shirt1', January : 500, February: 400, March:200, April:300 },
{brandname: 'Shirt2', January : 400, February: 100, March:300, April:200 },
 {brandname: 'Shirt3', January : 300, February: 400, March:200, April:100 },
 {brandname: 'Pant1', January : 100, February: 300, March:400, April:200 },
 {brandname: 'Pant2', January : 200, February: 400, March:100, April:300 },
 {brandname: 'Pant3', January : 500, February: 400, March:200, April:300 },
 {brandname: 'Cereal1', January : 500, February: 400, March:200, April:100 },
 {brandname: 'Cereal2', January : 400, February: 300, March:200, April:100 } ,
 {brandname: 'Cereal3', January : 500, February: 400, March:200, April:100 },
 {brandname: 'Fruit1', January : 300, February: 400, March:200, April:100 },
 {brandname: 'Fruit2', January : 500, February: 400, March:200, April:300 },
 {brandname: 'Fruit3', January : 400, February: 300, March:200, April:100 }];

 Chart.defaults.global.defaultFontFamily = 'Lato';
 Chart.defaults.global.defaultFontSize  =18;
 Chart.defaults.global.defaultFontColor = 'black';
 Chart.defaults.global.elements.point = 'circle';

var Categoryselect = document.getElementById("Category")
var ProductSelect = document.getElementById("Product");
var BrandSelect = document.getElementById("Brand");

var selectedCategory= 'Clothing';
var selectedProduct;
var selectedBrand;
for(const val of Categories)
{
    var option = document.createElement("option");
    option.value = val;
    option.text = val;
    Categoryselect.appendChild(option)
}
Categoryselect.value= selectedCategory;
whenChangedCategory(selectedCategory);


function whenChangedCategory(category){
    ProductSelect.options.length =0;
    selectedCategory=category;
    let Productsdisplay = Products.filter(x=>{
        return x.category==selectedCategory;
    })
    console.log(Productsdisplay)
    for(const val of Productsdisplay)
    {
        var option = document.createElement("option");
        option.value = val.name;
        option.text = val.name;
        ProductSelect.appendChild(option)
    }
    ProductSelect.value=Productsdisplay[0].name;
    selectedProduct=Productsdisplay[0].name
    whenProductSelected(selectedProduct);
}
Categoryselect.onchange=function(eve){
    whenChangedCategory(eve.target.value);
}
function whenProductSelected(product){
    BrandSelect.options.length=0;
    selectedProduct=product;
    let brandsDisplay= Brands.filter(x=>{
        return x.category==selectedCategory && x.product==selectedProduct;
    })
    console.log(brandsDisplay)
    for(const val of brandsDisplay)
    {
        var option = document.createElement("option");
        option.value = val.name;
        option.text = val.name;
        BrandSelect.appendChild(option)
    }
    BrandSelect.value=brandsDisplay[0].name;
    selectedBrand=brandsDisplay[0].name
    console.log(selectedCategory,selectedProduct,selectedBrand);
    whenBrandSelected(selectedBrand);
}
ProductSelect.onchange=function(eve){
    whenProductSelected(eve.target.value);
}
BrandSelect.onchange=function(eve){

    whenBrandSelected(eve.target.value);
}
function whenBrandSelected(brand){
selectedBrand = brand;
let brandsDisplay = data.filter(x=>{
    return x.brandname == selectedBrand ;
    
})
console.log(brandsDisplay)
    let massPopChart = new Chart(myChart, {
        type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {
            labels:['January', 'February', 'March', 'April', //'Cambridge', 'New Bedford'
            ],
            datasets: [{
                // label: 'Category',
                data: [
                    brandsDisplay[0].January,
                    brandsDisplay[0].February,
                    brandsDisplay[0].March,
                    brandsDisplay[0].April
                    // 105162,
                    // 9507
                ],
                // backgroundColor: 'orange'
                backgroundColor: [
                    'blue',
                    'blue',
                    'blue',
                    'blue'
                    // 'blue',
                    // 'blue'
                ],
                // borderWidth:4,
                // borderColor: '#777',
                // hoverBorderWidth:3,
                // hoverBorderColor: 'black',
            // }
            }]
            
        },
        
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero : true
                    }
                }]
            },
            title:{
                display:true,
                text:'Sales By Month for: ',

                // fontSize:25
                // label : 
                // select:[
                //     Clothing, 
                //     Food],
            },
            legend:{
                display:false,
                // display:true,
                position:'right',
                labels:{
                    fontColor:'#black'
                }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
//             custom: function(tooltipModel) {
//                 // Tooltip Element
//                 var tooltipEl = document.getElementById('chartjs-tooltip');

                
                  
//                 },
                // Create element on first render
               
            
            tooltips:{
                // mode: 'sales',
                // enabled:false

                 enabled:true
            }
        }
    });
}

           



       
