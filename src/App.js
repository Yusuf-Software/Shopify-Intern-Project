import ListMovies from "./components/ListMovies";
import NominatedMovie from "./components/NominatedMovie";
import NominationProvider from "./store/NominationStore";
import "./styles.css";
import Fetch from "./components/Fetch";

export default function App() {
  return (
    <NominationProvider>
      <div className="App">
        <ListMovies />
        {/* <NominatedMovie /> */}
        <Fetch />
      </div>
    </NominationProvider>
  );
}
