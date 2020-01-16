/* actions */

module.exports = {
 
  ADDOPTION: 'ADDOPTION',
  REMOVEOPTION: 'REMOVEOPTION',
  CLEAROPTIONS: 'CLEAROPTIONS',
  LOADOPTIONS: 'LOADOPTIONS',

  loadOptions: function(data, status) {
    return {
      type: this.LOADOPTIONS,
      status,
      data
    }
  },
  addOption: function(option) {
    return {
      type: this.ADDOPTION,
      option
    }
  },

  removeOption: function(option) {
    return {
      type: this.REMOVEOPTION,
      option
    }
  },
  
  clearOptions: function() {
    return {
      type: this.CLEAROPTIONS,
    }
  }
  
}
