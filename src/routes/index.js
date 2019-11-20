import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FAQs from '../pages/FAQs';
import Contact from '../pages/Contact';
import Privacy from '../pages/PrivacyPolicy';
import Terms from '../pages/Terms';
import MainLayout from "../layouts";

const renderWithLayout = (Component, Layout) => <Layout>{Component}</Layout>;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Redirect exact path='/' to='/home' /> */}
        <Route 
          exact
          path='/'
          render={() => renderWithLayout(<Home />, MainLayout)}
        />
        <Route 
          exact
          path='/faqs'
          render={() => renderWithLayout(<FAQs />, MainLayout)}
        />
        <Route
          exact
          path='/contact'
          render={() => renderWithLayout(<Contact />, MainLayout)}
        />
        <Route
          exact
          path='/privacy'
          render={() => renderWithLayout(<Privacy />, MainLayout)}
        />
        <Route
          exact
          path='/terms'
          render={() => renderWithLayout(<Terms />, MainLayout)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
