import React from "react"
import './styles.css'
import { createRef } from "react"
import { Display } from "./Display"

class FormCompo extends  React.Component{

    constructor(){
        super()
        this.state={
            StuData:[],
            error:{},
            submitToggle:true,
            // newData:[
            //     {name:'Ramesh',batch :'EA23'},
            //     {name:'Ramte',batch :'EA21'},
            //     {name:'Suresh',batch :'EA23'},
            //     {name:'Saketh',batch :'EA13'},
            //     {name:'Vishal',batch :'EA18'},
            // ]
        }
        this.nameRef=createRef()
        this.departmentRef=createRef()
        this.ratingRef=createRef()

        // this.setState({StuData:this.StuData})
    }
    
    handleChange=(event)=>{
        // console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
        // console.log(event.target.value)
        // console.log(this.state)

        }

    validate=()=>{
        let invalid=true
        if(!this.state.name || this.state.name==='') {
            // this.setState()
            invalid=false
            alert("Invalid name")
        }
        if(this.state.department==='') {
            invalid=false
            alert("Invalid department")
        }
        if((this.state.rating>5 && this.state.rating<1)|| !this.state.rating || this.state.rating==='') 
        {
            alert("Invalid email")

            invalid=false
        }
        console.log("validation " ,invalid)
        return invalid
    }
    revertSubmit=()=>{
        this.setState({submitToggle:!this.setState.submitToggle})
    }
    handleSubmit=()=>{
        
        if(this.validate()){
            const tempobj={
                name:this.state.name,
                department:this.state.department,
                rating:this.state.rating
            }
            this.state.StuData.push(tempobj)
            // console.log(this.nameRef.current)
            this.nameRef.current.value=""
            this.departmentRef.current.value=""
            this.ratingRef.current.value=""
            this.setState({StuData:this.state.StuData,submitToggle:!this.state.submitToggle})
            // submitToggle
            // console.log(this.state.StuData.length)
        }
        else console.log("data failed")

    }
    render(){


        return(
            <>
             {this.state.submitToggle ?  <> <h1 className="center">COURSE FEEDBACK FORM</h1>
            <div className="formContainer">
            <form>
                <label >Name:
                    <input type="text"  id="name" ref={this.nameRef} name="name" onChange={this.handleChange}></input>
                </label><br/>
                <label >Department:
                    <input type="text"  id="department"  ref={this.departmentRef} name="department" onChange={this.handleChange}></input>
                </label>
                <br></br>
                <label >Rating:
                    <input type="number"  id="rating"  ref={this.ratingRef}  name="rating" onChange={this.handleChange}></input>
                </label><br></br>
              
                <button onClick={this.handleSubmit} type="button">Submit</button>
            </form>
            
            </div></>: <Display value={this.state.StuData} submitToggle={this.revertSubmit}/> }



           
            </>
        )
    }
}
export {FormCompo}