import React, {Component} from 'react'
import Dialog from './Dialog';

class Welcome extends Component
{
    render(){
        return(
            <div>

            <h3><mark>Composition works equally well for components defined as classes:</mark></h3>
            <Dialog title="Welcome to Talent Battle" message="What should we call you" />
            </div>
        );
    }
}

export default Welcome