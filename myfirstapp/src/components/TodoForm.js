import React, { Component } from 'react';

class TodoForm extends Component {
  constructor (props) {

    super(props);
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }




  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
       title: '',
       responsible: '',
       description: '',
       priority: 'low'
    });
  }


  handleInputChange(e) {
    const {value, name} = e.target;
    // console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    // console.log ("state del TodoForm --------------------->", this.state);
     // console.log ("prop del TodoForm----------------------->", this.props);
    // console.log ("soy el render-")


    return (
      <div className="card">
        <form onSubmit={this.props.indexUpdate === "" ? this.handleSubmit : this.props.AddUpdate } className="card-body">
          <div className="form-group">
          <input type="hidden" id="index" name="index" value={this.props.indexUpdate} />

            { this.props.indexUpdate === "" ?
             <input
               type="text"
               name="title"
               className="form-control"
               value={this.state.title}
               onChange={this.handleInputChange}
               placeholder="Title"
             />
               :
               <input
                 type="text"
                 name="titleUpdate"
                 className="form-control"
                 value={this.props.titleUpdate}
                 onChange={this.props.ChangeUpdate}
                 placeholder="Title"
               />
            }

          </div>
          <div className="form-group">

            { this.props.indexUpdate === "" ?
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsible"

             />
               :
               <input
                 type="text"
                 name="responsibleUpdate"
                 className="form-control"
                 value={this.props.responsibleUpdate}
                 onChange={this.props.ChangeUpdate}
                 placeholder="Responsible"
               />
            }
          </div>

          <div className="form-group">

            { this.props.indexUpdate === "" ?
             <input
               type="text"
               name="description"
               className="form-control"
               value={this.state.description}
               onChange={this.handleInputChange}
               placeholder="Description"
             />
               :
               <input
                 type="text"
                 name="descriptionUpdate"
                 className="form-control"
                 value={this.props.descriptionUpdate}
                 onChange={this.props.ChangeUpdate}
                 placeholder="Description"
               />
            }
          </div>
          <div className="form-group">

            { this.props.indexUpdate === this.onSubmitUp ?
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
               :
               <select
                   name="priorityUpdate"
                   className="form-control"
                   value={this.props.priorityUpdate}
                   onChange={this.props.ChangeUpdate}
                 >
                 <option>low</option>
                 <option>medium</option>
                 <option>high</option>
               </select>

            }
          </div>

          { this.props.indexUpdate === "" ?
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              :
              <button  className="btn btn-success" >
                Update
              </button>

          }





        </form>
      </div>
    )
  }


}

export default TodoForm;
