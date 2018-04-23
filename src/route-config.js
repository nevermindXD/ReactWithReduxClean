import React from 'react'
import { Route, Redirect,Link} from 'react-router-dom' 


const Dashboard = () => <div>Dashboard</div>;
const Home = () => (
  <div>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>dashboard</Link>
      </li>
      <li>
        <Link to='/Info'>Info</Link>
      </li>
      <li>
        <Link to='/Topics'>Topics</Link>
      </li>
    </ul>
  </div>
);


export default (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/registro' component={() => {}} />
    <Route path='/confirmacionMail' component={() => {}} />
    <Route path='/activarCuenta/:token' component={() => {}} />
    <Route path='/recuperarContrasena' component={() => {}} />
    <Route path='/envioRecuperar' component={() => {}} />
    <Route path='/NuevaContrasena/:token' component={() => {}} />
    <Route path='/ConfirmacionContrasena' component={() => {}} />
    <Route path='/jardinerodash' component={() => {}} />
  </div>
);
		
const PrivateRoute = ({ component: Component, navigateTo, logged, ...rest }) => {
  return (
	<Route 
		{...rest}
		render={
			props => logged ? ( <Component {...props} />) : ( <Redirect to={navigateTo} /> )
    	}
  	/>
  )
};