import React from "react";
import Container from "./Container";
import RighHeader from "./RighHeader";
import LeftHeader from "./LeftHeader";
import BtnToggleTheme from "./btnToggleTheme";
import ShopingCart from "./ShopingCart";
function Header() {
  return (
    <header className="h-84px mb-10">
      <Container>
        <div className="w-full h-full flex shadow shadow-gray-700 dark:shadow-gray-200 relative z-50">
        <RighHeader>
          <ShopingCart/>
        <BtnToggleTheme />
        </RighHeader>
        <LeftHeader>
        </LeftHeader>
        </div>
      </Container>
    </header>
  );
}

export default Header;
