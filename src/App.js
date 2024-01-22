import { SearchWithZipCode } from './components/SearchWithZipCode';
import { Title } from './components/Title';

function App() {
  return (
    <div className="mx-auto max-w-screen-md my-6 mt-4 py-7 px-32 bg-gradient-to-br rounded-xl bg-violet-200 h-fit shadow-x shadow-gray-400
    flex flex-row w-3/4  justify-center spa gap-x-5">
    <Title/>
    <SearchWithZipCode/>
    </div>
  );
}

export default App;
