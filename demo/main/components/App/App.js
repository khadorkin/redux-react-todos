import React from 'react';
// import UsersList from '../../users/containers/UsersList';
// import UserView from '../../users/containers/UserView';
import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

const App = ({children}) => (
  <div>
      <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
        <RaisedButton secondary
                      label="Users"
                      containerElement={<Link to="/users"/>} />
      </AppBar>
      {children}
  </div>
);

export default App;
