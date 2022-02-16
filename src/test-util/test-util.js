// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import gameModeSlice from '../reducers/gameModeSlice'; 
import gameSummerySlice from '../reducers/gameSummerySlice';

const allReducers = combineReducers({ 
  gamemode: gameModeSlice, 
  summery: gameSummerySlice
})


function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: {user: allReducers }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }