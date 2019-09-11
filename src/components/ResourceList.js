import React from 'react';

import useResources from './useResources';

const ResourceList = ({resource}) => {
    const resourceList = useResources(resource);
    return(
        <div className="ui content">
            <div className="ui header">{resource } </div>
            <ul>{ resourceList.map( entry => <li key={entry.id} >{entry.title}</li>) }</ul>
        </div>
    );
}


// class ResourceList extends React.Component {
//     state = { list : [] }
//
//     async componentDidMount(){
//         const response = await jsonApi.get(`/${this.props.resource}`);
//         this.setState({list : response.data});
//     }
//
//     async componentDidUpdate(prevProps){
//         if( prevProps.resource !== this.props.resource ){
//             const response = await jsonApi.get(`/${this.props.resource}`);
//             this.setState({list : response.data});
//         }
//     }
//
//     renderList(){
//         return this.state.list.map( (entry) => {
//             return <div key={entry.id} >{entry.title}</div>;
//         });
//     }
//
//     render(){
//         const list = this.renderList();
//         return(
//             <div className="ui content">
//                 <div className="ui header">{this.props.resource} </div>
//                 {list}
//             </div>
//         );
//     }
// }

export default ResourceList;
