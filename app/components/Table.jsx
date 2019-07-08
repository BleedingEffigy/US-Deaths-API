const React = require('react')

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: null,
    }
  }
  
  componentDidMount(){
    fetch('/db')
    .then(res => res.json())
    .then((rows) => { console.log(rows)
                      this.setState({rows: rows})})
    
  }
  
  render(){
    if(!this.state.rows) {return <div></div>}
    
    const rows = this.state.rows.map(row => {return Object.keys(row)})
    const headers = Object.keys(this.state.rows[0]).map((key,i) => {if (key!='Quantifier') return <th key={key+i}>{key}</th>})
    const data = this.state.rows.map((row,i) => {return <tr>
                                                          <th key={i}><abbr title={row.Quantifier}>{i}</abbr></th>
                                                          {Object.keys(row).map((key, j) => {
                                                            if(key != 'Quantifier'){ 
                                                              return <td key={key+j}>{row[key]}</td>
                                                            }})}
                                                        </tr>})
    return(
      <div style={{overflow:'auto'}}>
        Table
        <table class='table' style={{width:'200%'}}>
          <thead>
            <tr>
              <th><abbr>Type</abbr></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Table