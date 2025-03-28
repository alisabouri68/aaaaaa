import React from "react";
import Container from "./Container";
import RighHeader from "./RighHeader";
import LeftHeader from "./LeftHeader";
import BtnToggleTheme from "./btnToggleTheme";
import ShopingCart from "./ShopingCart";
import SearchBox from "./SearchBox";
import ModalParent from "../modal/ModalParent";
function Header() {
  return (
    <header className="h-84px mb-5 bg-background">
      <Container>
        <div className="w-full h-full flex shadow-md shadow-gray-200 dark:shadow-gray-500 relative z-10">
          <RighHeader>
            <ShopingCart />
            <BtnToggleTheme />
            <SearchBox/>
            
          </RighHeader>
          <LeftHeader>
          </LeftHeader>
        </div>
      </Container>
    </header>
  );
}

export default Header;
