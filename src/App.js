import { useCallback, useEffect, useState } from "react";
import MainContent from "./MainContent";

const URL = "https://hn.algolia.com/api/v1/search?";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [input, setInput] = useState("");

  const fetchFollowers = useCallback(async () => {
    try {
      const response = await fetch(`${URL}query=${input}&page=${currentPage}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, input]);

  useEffect(() => {
    fetchFollowers();
  }, [fetchFollowers]);

  console.log(data);

  return (
    <div className="h-full flex justify-center">
      <header className="py-16 w-10/12">
        <nav className="font-bold text-4xl max-w-xl">Search Hacker News</nav>

        <input
          type="text"
          className="bg-transparent py-4 my-4 md:w-7/12 border-b-4 border-[#bcccdc] uppercase w-full"
          onChange={(e) => setInput(e.target.value)}
        />

        <section className="py-4">
          {data?.nbHits === 0 ? (
            <p className="font-bold text-3xl text-[#324d67] tracking-widest py-16">
              No search Found for "{input}"
            </p>
          ) : (
            <MainContent
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              nbPages={data.nbPages}
              data={data}
              setData={setData}
            />
          )}
        </section>
      </header>
    </div>
  );
}

export default App;
