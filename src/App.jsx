import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia illum
          incidunt, officia tenetur veniam porro doloribus atque laudantium
          ratione voluptatum iure sapiente esse libero dolorum quaerat
          perferendis minima necessitatibus rerum.
        </p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
