import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/partials/frontend/Main';
import Advertisement from './components/partials/backend/advertisement/Advertisement';
import Category from './components/partials/backend/category/Category';
import Settings from './components/partials/backend/settings/Settings';
import Role from './components/partials/backend/settings/role/Role';
import SettingList from './components/partials/backend/settings/SettingList';
import Dashboard from './components/partials/backend/dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from './components/store/storeContext';
import Banner from './components/partials/backend/banner/Banner';



const App = () => {
   const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/advertisement" element={<Advertisement />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/banner" element={<Banner />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/settings/role" element={<Role />} />
            <Route path="/admin/settings/developer" element={<SettingList />} />
            <Route path="/admin/settings/admin" element={<Settings />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App