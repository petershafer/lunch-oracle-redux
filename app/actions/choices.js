/* actions */

module.exports = {
 
  LOADCHOICES: 'LOADCHOICES',

  loadChoices: function(data, status) {
    return {
      type: this.LOADCHOICES,
      status,
      data
    }
  }
  
}
