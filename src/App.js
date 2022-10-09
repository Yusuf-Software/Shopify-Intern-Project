import ListMovies from "./components/ListMovies";
import NominatedMovie from "./components/NominatedMovie";
import NominationProvider from "./store/NominationStore";
import "./styles.css";

export default function App() {
  return (
    <NominationProvider>
      <div className="App">
        <ListMovies />
        {/* <NominatedMovie /> */}
      </div>
    </NominationProvider>
  );
}
