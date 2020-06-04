import React from "react";
import { Cookies } from "react-cookie";
import axios from "axios"
import Grid from '@material-ui/core/Grid'
import CompareCard from './CompareCard'

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
        return (<Grid container>{
            Object.entries(this.state.myCars).map( ([key,value]) => {
                return <Grid item xs={4}><CompareCard data={value}/></Grid>

        })
        }</Grid>)
    }
}

export default Profile;
