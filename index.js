const express = require('express');
const exphbs  = require('express-handlebars');

const pg = require("pg");
const Pool = pg.Pool;
const ServicesFactory = require("./fe-taxi-trips");
const app = express();
const PORT =  process.env.PORT || 3017;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/fetxidb';



const pool = new Pool({
    connectionString,
    rejectUnauthorized: false
  });

  const servicesFactory = ServicesFactory(pool);
  

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

// console.log(exphbs);
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.get('/',async function(req, res) {
  let tableData = await servicesFactory.unifiedSelector().catch("error")
	console.log(tableData);
	res.render('index', {
    tableData
	});
});

app.get("/specificTaxi/:reg",async (req,res)=>{
  let reg = req.params.reg
  // console.log({reg});
 let taxiRegion =  await servicesFactory.regionForTaxi(reg).catch("error");
  let totIncome = await servicesFactory.findIncomeByRegNumber(reg).catch("error");
  res.render('specificTaxi',{totIncome,taxiRegion})
});



app.get("/region",async (req,res)=>{
  let region = await servicesFactory.findAllRegions().catch("error");
  res.render(`region`,{region})
});


app.get("/region/:name/:id",async (req,res)=>{
  // let name = req.params.name
  // let regionTotIncome = await servicesFactory.unifiedSelector(name);
  // console.log(regionTotIncome);
  // console.log(name);
  res.render(`region`)
});


app.post("/region",async (req,res)=>{
let bodyObj = req.body
console.log(bodyObj);
res.render("region");
});

app.get("/regionInfo/:name/:id",async (req,res)=>{
  let name = req.params.name;
  let id = req.params.id;
  let totIncome = await servicesFactory.findTotalIncomeByRegion(name).catch("error");
  let numOfTrips = await servicesFactory.findTripsByRegion(name).catch("error");
  let opt = await servicesFactory.findAllRegions();

  res.render("regionInfo",{totIncome, numOfTrips,name,id,opt})
});

app.get("/regionInfo/:name/:id",async (req,res)=>{
  
  let name = req.params.name;
  let id = req.params.id;
  let totIncome = await servicesFactory.findTotalIncomeByRegion(name).catch("error");
  let numOfTrips = await servicesFactory.findTripsByRegion(name).catch("error");
  let opt = await servicesFactory.findAllRegions().catch("error");

  // res.redirect("/regionInfo",{totIncome, numOfTrips,name,id,opt})
res.redirect(`/region/${name}/${id}`);
});

// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});          
