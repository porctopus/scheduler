import React from 'react';
import axios from 'axios';
import AllStudentsForm from './AllStudentsForm';
import { Redirect } from 'react-router-dom';

class AllStudentsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: '',
      errors: {},
      token: sessionStorage.getItem("token"),
      students: [],
      loggedIn: '',
      selected: '',
      checkValue: 'none',
      doRedirect: false
    };

    this.handleEditClick = this.handleEditClick.bind(this);
  };

  handleRowClick = (student) => {

  }

  handleCheckChange = (e, { value }) => {
    this.setState({ checkValue: value });
  }

  componentDidMount () {

    this.setState({headerHeight: document.getElementById('header').clientHeight});

    var token = this.state.token;
    var self = this;

    axios.post('/all_students', {
    //axios.post('https://glacial-sierra-90432.herokuapp.com/all_students', {
      token: token
    })
    .then(response => {
      self.setState({students: response.data.students});
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  handleEditClick(event) {

    if (this.state.checkValue !== 'none') {
      this.setState({ doRedirect: true });
    }
  }



  handleInputChange(event) {
    this.setState({ [event.target.name] : event.target.value});
  }

  render() {

      if (this.state.doRedirect) {
        return <Redirect to={{
          pathname: '/main/admin_student_page',
          state: { id: this.state.checkValue }

        }}/>;
      }

      var headerStyle = {
        height: this.state.headerHeight
      };

      return (

        <div>
          <div style={headerStyle}></div>
          <AllStudentsForm
            handleRowClick={this.handleRowClick}
            onChange={this.handleInputChange}
            errors={this.state.errors}
            students={this.state.students}
            handleCheckChange={this.handleCheckChange}
            checkValue={this.state.checkValue}
            handleEditClick={this.handleEditClick}
          />
        </div>
    );
  }
}

export default AllStudentsPage;
