import React from "react";
import { IconButton, Badge} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((state) => state.cartItem.cartItems);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>ShireShop</h2>
      </div>
      <div className="">
      {/* {classes.button}> */}
        <IconButton
          component={Link}
          to="/cart"
          arial-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={cartItems.length} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
