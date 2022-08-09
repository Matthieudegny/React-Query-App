import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider, QueryClient } from 'react-query'
import { HomePage } from './components/Homepage/HomePage';
import { Routes, Route } from 'react-router-dom'

import { OneRequest } from './components/fetchOneRequest/FetchOneRequest'
import { DynamicRequest } from './components/dynamicRequest/DynamicRequest';
import { InfinteScroll } from './components/infinitScroll/InfinitScroll';
import { PaginatedCats } from './components/paginatedCat/PaginatedCats';

const queryClient = new QueryClient()
function App() {

  return (

    <QueryClientProvider client={queryClient}>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/oneRequest" element={<OneRequest/>}/>
          <Route path="/dynamicRequest" element={<DynamicRequest/>}/>
          <Route path="/infinitScroll" element={<InfinteScroll/>}/>
          <Route path="/paginatedCats" element={<PaginatedCats/>}/>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
 
  );
}

export default App;
