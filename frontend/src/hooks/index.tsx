import React from 'react';

import { PageProvider } from './page';


const AppProvider: React.FC = ({ children }) => (
  <PageProvider>
    {children}
  </PageProvider>
);
export default AppProvider;
