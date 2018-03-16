import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarTitle, Card, CardMedia} from 'material-ui';

const MyAwesomeReactComponent = () => (
  <div>
    <AppBar title="Hello World"  />
    <Card>
      <Toolbar style={{"justify-content": "center"}}>
         <ToolbarTitle  text="Material UI" />
      </Toolbar>
      <CardMedia><img src="http://www.material-ui.com/images/get-started.svg" alt=""/></CardMedia>
     </Card>
  </div>
);

export default MyAwesomeReactComponent;