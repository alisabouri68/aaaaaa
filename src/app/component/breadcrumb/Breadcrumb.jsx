"use client";
import React, { useEffect, useState } from "react";
import Container from "../header/Container";
import { usePathname } from "next/navigation";
import { dbmegamenu } from "../header/db";
function Breadcrumb() {
  const pathname = usePathname();
  const [breadCrumb, setBreadCrumb] = useState([]);

  useEffect(() => {
    setBreadCrumb(pathname.split("/").filter(Boolean));
  }, [pathname]);

  const getBreadcrumbName = (item) => {
    if (item === "category") return "دسته بندی";
    for (let i = 0; i < dbmegamenu.length; i++) {
      if (dbmegamenu[i].menu[1] === item) {
        return dbmegamenu[i].menu[0];
      }
      const match = dbmegamenu[i].submenu.find((a) => a[1] === item);
      if (match) {
        return match[0];
      }
    }
    return item;
  };
  return (
    <div className="h-12  mt-5 ">
      <Container>
        <div className="w-full h-full overflow-hidden flex bg-amber-500 breadcrumb-parent">
          <div className="breadcrumb-home flex items-center justify-center">
            خانه
          </div>
          {breadCrumb.length > 0
            ? breadCrumb.map((item, index) => (
                <div
                  key={index}
                  className="breadcrumb-one flex items-center justify-center px-20"
                >
                  {getBreadcrumbName(item)}
                </div>
              ))
            : ""}
        </div>
      </Container>
    </div>
  );
}

export default Breadcrumb;
