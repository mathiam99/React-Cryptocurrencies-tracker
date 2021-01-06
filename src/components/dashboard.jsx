import React, { Component } from 'react';
import Linechart from './linechart';

class Dashboard extends Component {
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <h4>Dashboard</h4>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <Linechart/>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quis dolor quod asperiores error labore, quas exercitationem, nulla mollitia eum explicabo, odio consectetur assumenda molestias aut recusandae. Nisi, sequi ab!
                        </div>
                        <div className="col s12 m6">
                            <Linechart/>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quis dolor quod asperiores error labore, quas exercitationem, nulla mollitia eum explicabo, odio consectetur assumenda molestias aut recusandae. Nisi, sequi ab!
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
         );
    }
}
 
export default Dashboard;