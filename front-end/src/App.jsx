import React, { useState, useEffect } from 'react';
import MainPage from './Pages/MainPage';
import Loading from './component/Loading';

function App() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return(
    <div>
    <MainPage />
    </div>
  )
}

export default App;