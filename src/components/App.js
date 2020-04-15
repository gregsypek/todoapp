import React, { Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>

      TODOAPP
      <AddTask />
      <TaskList />
    </div>
     );
  }
}
 
export default App;