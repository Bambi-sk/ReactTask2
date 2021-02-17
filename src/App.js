import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import './bootstrap/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Navbar(props){
return(
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#224982'}}>
      <a className="navbar-brand" href="#">HABAR.COM</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item ml-4">
                   <Link to="/">All News</Link>
          </li>
          {props.categories.map(category=>(
          <li className="nav-item ml-3" key={category.id}>
            <Link to ={`/category/${category.id}`}>{category.name}</Link>
          </li>
          ))}
          <li className="nav-item ml-3">
                   <Link to="/signIn">Sign In</Link>
          </li>
          
         
        </ul>
        
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
   
     
      
      
    </nav>
);
}
  
   

const categories=[{id: 1, name: "Technology"},{id: 2, name:"Asia"}]

function Home(props) {
  return(
    <div className="mt-5 mb-5 mr-5">
    
              {props.posts.map(filteredPost => (
                 <div className="card mb-3 w-100"  style={cardSize} key={filteredPost.id}>
                 <div className="row no-gutters">
                   <div className="col-md-4">
                     <img src={filteredPost.imgSrc} style={imgSize}  className='text-center mt-2 ml-2' ></img>
                   </div>
                   <div className="col-md-8">
                     <div className="card-body">
                       <h5 className="card-title">{filteredPost.title}</h5>
                       <p className="card-text">{filteredPost.content}</p>
                       
                     </div>
                   </div>
                 </div>
               </div>
              ))}
      </div>
   
); 
}
let cardSize={
  width:'36rem'
}
let imgSize={
  maxWidth:'200px',
  maxHeight:'250px'
}
function Posts(props) {
  const match =useParams();
  const id=match.id;
  console.log(props.posts)
  
  return(
      <div className="mt-5 mb-5 mr-5">
      
            {props.posts.filter(post => post.category== id).map(filteredPost => (
                  <div className="card mb-3 w-100"  style={cardSize} key={filteredPost.id}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img src={filteredPost.imgSrc} style={imgSize}  className='text-center mt-2 ml-2' ></img>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{filteredPost.title}</h5>
                          <p className="card-text">{filteredPost.content}</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
    
); 
}

const posts=[{id: 1, title: "Elon Musk's Tesla buys $1.5bn of Bitcoin", content: "Elon Musk's car firm Tesla has said it bought about $1.5bn (£1.1bn) of the cryptocurrency Bitcoin in January and expects to start accepting it as payment in future.", imgSrc:"https://ichef.bbci.co.uk/news/976/cpsprodpb/1831E/production/_116820199_elonmusk.jpg" ,category:1},
{id: 2, title: "Myanmar coup: Woman shot at protest fights for life", content: "A woman who was severely injured while protesting against Myanmar's military coup is in a critical condition.", imgSrc:"https://ichef.bbci.co.uk/news/976/cpsprodpb/12474/production/_116886847_gettyimages-1231072452.jpg",category:2}]
let ImgSize={
  height:'400px'
}
let carouseltext={
  marginBottom:'20px',
  
}
let pStyle={
  width:'75%',
  marginLeft:'60px',
  backgroundColor:"#224982"
}

function Carousel(){
  return(
    <div id="carouselExampleCaptions" className="carousel slide"   data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
    <div className="carousel-inner">
        <div className="carousel-item active" >
          <img style={ ImgSize} src="https://upload.wikimedia.org/wikipedia/commons/a/a3/United_States_Capitol_west_front_edit2.jpg"  className="d-block w-100" ></img>
          <div className="carousel-caption d-none d-md-block" style={carouseltext}>
            <h5 style={{backgroundColor:"#224982"}}>Trump impeachment: Supporters rioted 'of their own accord</h5>
            <p style={pStyle}>Senate leaders reach agreement on impeachment trial rules</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/United_States_Capitol_west_front_edit2.jpg" className="d-block w-100" ></img>
          <div className="carousel-caption d-none d-md-block " style={{backgroundColor:"#224982",marginBottom:'20px'}}>
            <h5>Trump impeachment: Supporters rioted 'of their own accord</h5>
            <p>Senate leaders reach agreement on impeachment trial rules</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/United_States_Capitol_west_front_edit2.jpg" className="d-block w-100" ></img>
          <div className="carousel-caption d-none d-md-block" style={{backgroundColor:"#224982"}}>
              <h5>Trump impeachment: Supporters rioted 'of their own accord</h5>
            <p>Senate leaders reach agreement on impeachment trial rules</p>
          </div>
        </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  );
}
function AddItem(props){
  const [title,setTitle]=useState('');
  const[posts,setPost]=useState(props.posts)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title){
      const post={id:new Date().getTime(),title: title,content:" ",imgSrc:"https://ichef.bbci.co.uk/news/976/cpsprodpb/1831E/production/_116820199_elonmusk.jpg",category:1 };
      console.log(post)
      let news_arr=[...posts];
      news_arr.push(post)
      setPost(news_arr)
      console.log(news_arr)
      setTitle(" ");

    }
    else {
      console.log('empty')
    }



  };
  console.log(props)
  return(
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        <button className="btn">Add </button>
      </form>
    </article>
  );
}
function MainFrame(props) {

  return(
      <div style={{backgroundColor:'#F4F6E0'}}>
        <Navbar categories={categories} posts={posts}/>
        <div className="container mt-5 mb-5">
           <div className="row">
                <Carousel></Carousel>
           </div>
           <div className="row">
             <div className="col-12 col-md-8">
                    <Switch>
                        <Route exact path={`/category/:id/`}>
                                  <Posts posts={props.posts} ></Posts>
                        </Route>
                        <Route path="/">
                                <Home posts={props.posts} />
                        </Route>
                    </Switch>
             </div>
             <div className="col-12 col-md-4">
                <AddItem posts={props.posts}  title={props.title} ></AddItem>
             </div>
           </div>
        </div>
         
      </div>
  );
}

function App() {
  const [title, setTitle] = useState("");
  const [posts_arr, setPost] = useState([]);
  
    return (
    <MainFrame categories={categories} posts={posts} posts_arr={posts_arr} title={title}></MainFrame>
  );
 
  
}

export default App;
