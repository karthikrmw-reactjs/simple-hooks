import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [ resource, setResource ] = useState('posts');

    //can have multiple individual state values
    //const [ count, setCounter ] = useState(0);

    return(
        <div className="ui container">
            <UserList />
            <div className="ui content">
                <button onClick={ () => setResource('posts') }>posts</button>
                <button onClick={ () => setResource('todos') }>todos</button>
            </div>

            <ResourceList resource={resource} />
        </div>
    );
}


// class App extends React.Component {
//     state = { resource : 'posts' };
//
//     render(){
//         return(
//             <div className="ui container">
//                 <div className="ui content">
//                     <button onClick={ () => this.setState({'resource' : 'posts' }) }>posts</button>
//                     <button onClick={ () => this.setState({'resource' : 'todos' }) }>todos</button>
//                 </div>
//                 {this.state.resource}
//             </div>
//         );
//     }
//
// }

export default App;
