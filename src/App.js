import "./App.css";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import RingModel from "./sections/RingModel";
import Art from './sections/Art'

const arts = [
    {
        img: "https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg",
        name: "Sculptor",
    },
    {
        img: "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Art of rooms",
    },
    {
        img: "https://images.pexels.com/photos/2939793/pexels-photo-2939793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Painting",
    },
    {
        img: "https://images.pexels.com/photos/753697/pexels-photo-753697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Sculptor",
    },
];

function App() {
    return (
        <div className="App">
            <header>
                <Header />
                <div className="container1">
                    <Hero />
                    <p className="drag">Drag the model</p>

                    <RingModel />
                </div>
                {arts.map(el =>{
                  return <Art img={el.img} name={el.name}/>
                })}
            </header>
        </div>
    );
}

export default App;
