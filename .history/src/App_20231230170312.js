import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={QueryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
