Meteor.call('getCourseById', classId, function(error, result) => {
  if (!error) {
    console.log(this.state); 
    this.setState({selectedClass: result, query: ""}, function() {
      console.log(this.state.selectedClass);
      console.log(this.state.query);
    });
  } else {
    console.log(error)
  }
});