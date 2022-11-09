
import React, { Component } from 'react'

class CourseComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            courseName:'',
            numberMonths:'',
            technology:'',
            courseFee:'',
            description:'',
            type:''
        }

        this.changeCourseNameHandler=this.changeCourseNameHandler.bind(this);
        this.changeNumberMonthsHandler=this.changeNumberMonthsHandler.bind(this);
        this.changeTechnologyHandler=this.changeTechnologyHandler.bind(this);
        this.changeCourseFeeHandler=this.changeCourseFeeHandler.bind(this);
        this.changeDescriptionHandler=this.changeDescriptionHandler.bind(this);
        this.changeTypeHandler=this.changeTypeHandler.bind(this);
        this.saveCourse=this.saveCourse.bind(this);
    }

    changeCourseNameHandler=(event)=>{
        this.setState({courseName: event.target.value});
    }

    changeNumberMonthsHandler=(event)=>{
        this.setState({numberMonths: event.target.value});
    }

    changeTechnologyHandler=(event)=>{
        this.setState({technology: event.target.value});
    }

    changeCourseFeeHandler=(event)=>{
        this.setState({courseFee: event.target.value});
    }
    
    changeDescriptionHandler=(event)=>{
        this.setState({description: event.target.value});
    }

    changeTypeHandler=(event)=>{
        this.setState({type: event.target.value});
    }


    saveCourse=(e)=>{
        e.preventDefault();
        let student={courseName: this.state.courseName,numberMonths: this.state.numberMonths,technology: this.state.technology, courseFee: this.state.courseFee};
        console.log('Student=>'+JSON.stringify(student));
    }

    cancel(){
        this.props.history.push();
    }

    render(){
        return(
            <div>

            <div className="container">
                <div className="row">
                    <br></br>
                    <h1 className="text-center">Course Registration Form</h1>
                    <br></br>
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Course Name:</label>
                                    <input placeholder="Course Name" name="courseName" className="form-control"
                                    value={this.state.courseName} onChange={this.changeCourseNameHandler}/>
                                </div>

                                <br></br>
                        
                                <div className="form-group">
                                    <label>No. of Months:</label>
                                    <input placeholder="Months" name="months" className="form-control"
                                    value={this.state.months} onChange={this.changeNumberMonthsHandler}/>
                                </div>

                                <br></br>
                                <div className="form-group">
                                    <label>Technology:</label>
                                    <input placeholder="Technology" name="technology" className="form-control"
                                    value={this.state.technology} onChange={this.changeTechnologyHandler}/>
                                </div>

                                <br></br>
                                <div className="form-group">
                                    <label>Course Fee:</label>
                                    <input placeholder="Course Fee" name="coursefee" className="form-control"
                                    value={this.state.courseFee} onChange={this.changeCourseFeeHandler}/>
                                </div>

                                <br></br>

                                <div className="form-group">
                                    <label>Description:</label>
                                    <input placeholder="Description" name="description" className="form-control"
                                    value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                </div>

                                <br></br>

                                <div className="form-group">
                                    <label>Type:</label>
                                    <input placeholder="Type" name="type" className="form-control"
                                    value={this.state.type} onChange={this.changeTypeHandler}/>
                                </div>

                                <br></br>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveStudent}>Register</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind} style={{marginLeft:"10px"}}>Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default CourseComponent