import ListMovies from "./components/ListMovies";
import NominationProvider from "./store/NominationStore";
import "./styles.css";

export default function App() {
  return (
    <NominationProvider >
    <div className="App">
      <h1>Yeah</h1>
      <ListMovies />
    </div>
    </NominationProvider>
  );
}