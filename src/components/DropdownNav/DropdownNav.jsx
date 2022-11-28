import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './DropdownNav.css'

function DropdownNav() {
    return (
        <>
            {
                <Dropdown>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic" className="btn button-6 btn-nav">
                        Category <i className="fa-solid fa-diagram-predecessor"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown'>
                        <Dropdown.Item className='dropdownChildren'>
                            <Link to="/rods" className='nav withoutStyle'>
                                <span className='paraNav'>Rods</span>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdownChildren'>
                            <Link to="/reels" className='nav withoutStyle'>
                            <span className='paraNav'>Reels</span>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            }
        </>
    );
}

export default DropdownNav;