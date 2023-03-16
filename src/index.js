import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MessageProviderWrapper } from "./contexts/message.context"
import { AuthProviderWrapper } from './contexts/auth.context'

import { BrowserRouter as Router } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <MessageProviderWrapper>
        <Router>
          <App />
        </Router>
      </MessageProviderWrapper>
    </AuthProviderWrapper>
  </React.StrictMode>
);


