const React = require('react')
const aggregatedMap = require('./abbrLists')

const nmVioletLightFlat = {
  borderRadius: '21px',
  background: '#fdf0f6',
  boxShadow:  '27px 27px 54px #afa6aa, -27px -27px 54px #ffffff'
}

function numberWithCommas(x) {
    if(!x.includes('%')){
      return parseInt(x, 10).toLocaleString('en')
    }else{
      return x
    }
}

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '/db',
      sheet: '/db',
      headers: null,
      data: null,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  async componentDidMount(){
    const res = await fetch(this.state.sheet)
    const rows = await res.json()
    
    const rowsArray = rows.map(row => {return Object.keys(row)})
    const headers = Object.keys(rows[0]).map((key,i) => {if (key!='Title') return <th key={key+i}>{key}</th>})
    const data = rows.map((row,i) => {return <tr>
                                                          <th key={i}><abbr title={row.Title}>{aggregatedMap[row.Title]}</abbr></th>
                                                          {Object.keys(row).map((key, j) => {
                                                            if(key != 'Title'){ 
                                                              return <td key={key+j}>{numberWithCommas(row[key])}</td>
                                                            }})}
                                                        </tr>})
    this.setState({headers: headers, data: data})
  }
  
  async componentDidUpdate(prevProps,prevState){
   if(prevState.sheet != this.state.sheet){
      const res = await fetch(this.state.sheet)
      const rows = await res.json()

      const rowsArray = rows.map(row => {return Object.keys(row)})
      const headers = Object.keys(rows[0]).map((key,i) => {if (key!='Title') return <th key={key+i}>{key}</th>})
      const data = rows.map((row,i) => {if(aggregatedMap[row.Title]!=null) {return <tr>
                                                            <th key={i}><abbr title={row.Title}>{aggregatedMap[row.Title]}</abbr></th>
                                                            {Object.keys(row).map((key, j) => {
                                                              if(key != 'Title'){ 
                                                                return <td key={key+j}>{numberWithCommas(row[key])}</td>
                                                              }})}
                                                          </tr>}
                                       else {return <tr>
                                                            <th key={i}>{row.Title}</th>
                                                            {Object.keys(row).map((key, j) => {
                                                              if(key != 'Title'){ 
                                                                return <td key={key+j}>{numberWithCommas(row[key])}</td>
                                                              }})}
                                                          </tr>}})
      this.setState({headers: headers, data: data})
   }
  }
  
  async handleChange(event) {
    await this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.setState({sheet: this.state.value})
    event.preventDefault();
  }
  
  render(){
    if(!this.state.headers && !this.state.data) {return <div></div>}

   
    return(
      <div style={nmVioletLightFlat} class='p-4 mt-5'>
        <form onSubmit={this.handleSubmit}  >
          <label>
            <span class='is-size-4 px-2'>Pick the datasheet:</span>
            <select value={this.state.value} onChange={this.handleChange} class="select is-medium p-2">
              <option value="/db">High Level Overview</option>
              <option value="/db/Breakdown_Overview">Breakdown of Overview</option>
              <option value="/db/Breakdown_Race">Breakdown of Overview by Race</option>
              <option value="/db/Breakdown_Age">Breakdown of Overview by Age</option>
              <option value="/db/State_and_USPop_Overview">High Level of State & US Pop. Overview</option>
              <option value="/db/State_and_USPop_Breakdown">Breakdown of State & US Pop.</option>
              <option value="/db/State_and_USPop_Race">State & US Pop. Breakdown by Race</option>
              <option value="/db/Firearm_Breakdown">Firearm Death Specific Breakdown</option>
            </select>
          </label>
          <input type="submit" value="Submit" class="button" />
        </form>
        
        <div style={{overflow:'auto'}}>
          <table class='table is-bordered is-hoverable has-background-light m-2' style={{width:'200%'}}>
            <thead>
              <tr>
                <th><abbr>Title</abbr></th>
                {this.state.headers}
              </tr>
            </thead>
            <tbody>
              {this.state.data}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


module.exports = Table