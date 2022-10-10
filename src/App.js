import './App.css';
import Navigation from "./components/Navigation";
import ImageLinkForm from "./components/ImageLinkForm";
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="App">
      <ParticlesBg type="square" color={["#ff0000"]}  num={20} bg={true} />
      <Navigation name="Sam"/>
      <ImageLinkForm />
  {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
