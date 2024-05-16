import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
            count2:1
        }
        console.log('child constructor');
    }

    componentDidMount(){
        //api calling
        console.log('child did mount');
       this.timer = setInterval(()=>{
            console.log('harish');
        },1000)
    }

    componentDidUpdate(){
        console.log('child is updated');
    }
    componentWillUnmount(){
        //clear intervals here if you have created
        console.log('child unmounted');
        clearInterval(this.timer);
    }
    render(){
        const {name} =  this.props;
        const {count,count2} = this.state;
        console.log('child render');
        return(
            <div className="user-card">
                <h2>Count:{count}</h2>
                <button onClick={()=>{
                    // dont update the state variable directly
                    // this.state.count = this.state.count+1 like this
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increase count</button>
                <h2>Count2:{count2}</h2>

                <h2>Name: {name}</h2>
                <h2>Location:</h2>
                <h2>Contact:limeroad123@gmail.com</h2>
            </div>
        )
    }
}
export default UserClass;