import chefIcon from '../images/chef-icon.png'

function Header(){
    return (
        <header>
            <img src={chefIcon} />
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header