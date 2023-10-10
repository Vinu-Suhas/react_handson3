import React from "react";

class Display extends React.Component{

    constructor(props){
        super(props)
        console.log(props)

    
    }

    render(){
        return(<>
        <div className="tableContainer">
<table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Rating</th>

            </tr>
        </thead>
        <tbody>
            {this.props.value.map((element,index)=>{
                return(<>
                <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.department}</td>
                    <td>{element.rating}</td>
                </tr>
                </>)
            })}
        </tbody>
        </table>
        <button onClick={this.props.submitToggle}>Go Back</button>
        </div>
        </>)
    }
}

export {Display}