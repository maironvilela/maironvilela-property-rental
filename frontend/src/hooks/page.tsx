/* eslint-disable camelcase */
import React, { createContext, useCallback, useContext, useState } from 'react';


// Interface com o que será disponibilizados para os demais componentes
interface PageContextState {
  currentPage: number;
  setCurrentPage(page: number): void
}

const PageContext = createContext<PageContextState>({} as PageContextState);

const PageProvider = ({ children }) => {

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

function usePage(): PageContextState {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('Falha a criar Sessão');
  }
  return context;
}

export { PageProvider, usePage };
