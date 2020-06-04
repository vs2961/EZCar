import React from "react";
import { Cookies } from "react-cookie";
import axios from "axios"

class Profile extends React.Component{
    constructor (props){
        super(props)
        this.state = {myCars: []}
    }
    componentDidMount(){
        const cookies = new Cookies()
        console.log(cookies.get("id"))
        axios.post("/get_cars", {user_id:cookies.get("id")}).then(res =>
            this.setState({myCars: res.data}))
    }
    render(){
        console.log(this.state.myCars)
        return (<div>{
            Object.entries(this.state.myCars).map( ([key,value]) => {
                return <h1>{value.NAME}</h1>

        })
        }</div>)
    }
}

export default Profile;
