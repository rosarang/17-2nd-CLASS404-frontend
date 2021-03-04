import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import CreatorApply from './Pages/CreatorApply/CreatorApply';
<<<<<<< HEAD
// import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ReviewUpload from './Pages/ReveiwUpload/ReviewUpload';

// import Search from "./Pages/Search/Search";
=======
import ProductDetail from './Pages/ProductDetail/ProductDetail';
>>>>>>> 4be7b9a... Add: 상세페이지 레이아웃 구현 완료

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/:id" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/apply" component={CreatorApply} />
          {/* <Route exact path="/product" component={ProductDetail} /> */}
          {/* <Route exact path="/product:id" component={ProductDetail} /> */}
          <Route exact path="/reviewupload" component={ReviewUpload} />

          {/* <Route exact path="/search" component={Search} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
