const React = require('react')
const Table = require('./Table')

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '/db',
                 sheet: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({sheet: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="/db">High Level Overview</option>
            <option value="/db/Breakdown_Overview">Breakdown of Overview</option>
            <option value="/db/Breakdown_Race">Breakdown of Overview by Race</option>
            <option value="/db/Breakdown_Age">Breakdown of Overview by Age</option>
            <option value="/db/State_and_USPop_Overview">High Level of State & US Pop Overview</option>
            <option value="/db/State_and_USPop_Breakdown">Mango</option>
            <option value="/db/State_and_USPop_Race">Mango</option>
            <option value="/db/Firearm_Breakdown">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <Table/>
      </form>
    );
  }
}

module.exports = DataForm