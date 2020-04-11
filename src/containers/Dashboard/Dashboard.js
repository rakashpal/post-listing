import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../../store/actions/index';
import { bindActionCreators } from 'redux';
import Rows from '../../components/Rows';
import './dashboard.css'
class Dashboard extends Component{
  constructor (props) {
    super(props);
    this.state = {
      usersdata: [],
      total:5,
      per_page:5,
      current_page:1,
      totalNav:1
    }
  }
     componentDidMount(){
      this.callapi(1);
    }

     handleClick =(e,id)=> {
      this.callapi(id);
    }
    async callapi(page){
      const { getUsers } = this.props;
      await getUsers(page);
      const {users,total,per_page,current_page}=this.props;
      this.setState({usersdata:users,total:total,per_page:per_page,current_page:current_page});
     var totalNav=total/per_page;
     this.setState({totalNav:totalNav>1?totalNav:1})
    }
    createNav = () => {
      let nav = []
  
      // Outer loop to create parent
      for (let i = 1; i <= this.state.totalNav; i++) {
       
        nav.push( <li className={`page-item ${this.state.current_page==i?'active':''}`} key={i} onClick={(event) => this.handleClick(event,i)}>{i}</li>)
        }
       console.log(nav);
      return nav
    }
    render(){
      console.log(this.state);
     const rows= this.state.usersdata.map((item, i) => <Rows item={item} key={i} />);
      
       return (

       <>
      <table className="table-wraper">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>post</th>
          <th>created_at</th>
          <th>updated_at</th>
        </tr>
      {rows}
    </table>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
  {this.createNav()}
  </ul>
</nav>
       </>
          
        );
    }
}
const mapStateToProps = ({users}) => ({
  users:users.users.data,
  total:users.users.total,
  per_page:users.users.per_page,
  current_page:users.users.current_page
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(
    {
      getUsers
    },
    dispatch
  );
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);

