import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const Navbar = ReactBootstrap.Navbar;
const Nav = ReactBootstrap.Nav;
const NavItem = ReactBootstrap.NavItem;
const NavDropdown = ReactBootstrap.NavDropdown;
const MenuItem = ReactBootstrap.MenuItem;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;
const Button = ReactBootstrap.Button;

class Navigation extends React.Component<any, any>
{
    public render()
    {
        const Items = this.props.comunnity.map((row, index) =>
            <MenuItem key={index} eventKey={3 + index/10.0} href={row.href} >{row.text}</MenuItem>
        );
        var Login;
         if(this.props.user) {
             Login = (<Nav pullRight>
                 <NavDropdown eventKey={5} title={this.props.user} id="dropdown-basic-info" bsStyle="info">
                     <MenuItem eventKey={5.1}>Cuenta</MenuItem>
                     <MenuItem eventKey={5.1}>Cerrar Session</MenuItem>
                 </NavDropdown>
             </Nav>);
        } else {
             Login = (<Navbar.Form pullRight>
                 <FormGroup>
                     <FormControl type="text" placeholder="Account" />
                     < FormControl type="password" placeholder="Password" />
                 </FormGroup > {''}
                 <Button type="submit" bsStyle="primary">Login</Button>
             </Navbar.Form >);
        }
        return (<Navbar>
            < Navbar.Header >
            <Navbar.Brand>
                <a href="/">Netsphere</a>
            </Navbar.Brand>
        </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="/register">Registrate</NavItem>
                <NavItem eventKey={2} href="/download">Descargar</NavItem>
                <NavDropdown eventKey={3} title="Communidad" id="basic-nav-dropdown">
                    {Items}
                </NavDropdown>
                <NavItem eventKey={4} href="/shop">NetsphereCoins</NavItem>
            </Nav>
                {Login}
        </Navbar>);
    }
}

export default Navigation;