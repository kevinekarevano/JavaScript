import Data from "./api/Data.js";
import Card from "./components/Card";
function App() {
  console.log(Data);
  return (
    <>
      <div className="bg-zinc-800 min-h-screen gap-3 flex justify-center items-center">
        {Data.map(({ nama, pekerjaan, gambar } = Data, index) => {
          return <Card nama={nama} pekerjaan={pekerjaan} gambar={gambar} key={index} />;
        })}
      </div>
    </>
  );
}

export default App;
