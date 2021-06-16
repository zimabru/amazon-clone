import React from 'react'
import  './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Header() {
    return (
        <div className="header">
                          
          <img className="header__logo" src="./ama.png"/>
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
          </div>
          <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">
                    Hello Guest
              </span>
              <span className="header__optionLineTwo">
                    Sign In
              </span>

            </div>
            <div className="header__option">
            <span className="header__optionLineOne">
                    Returns
              </span>
              <span className="header__optionLineTwo">
                    & Orders
              </span>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">
                   Your
              </span>
              <span className="header__optionLineTwo">
                   Prime
              </span>
            </div>
          </div>
          <div className="header__optionBasket">
            <ShoppingBasketIcon/>
            <span className="header__basketCount header__optionLineTwo">0</span>
          </div>

        </div>
    )
}

export default Header
