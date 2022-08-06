import './App.css';

import { QueryClientProvider, QueryClient } from 'react-query'
import { HomePage } from './components/Homepage/HomePage';
import { Routes, Route, NavLink } from 'react-router-dom'

import { OneRequest } from './components/fetchOneRequest/FetchOneRequest'


const queryClient = new QueryClient()
function App() {

  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/oneRequest" element={<OneRequest/>}/>
      </Routes>
    </QueryClientProvider>
 
  );
}

export default App;
