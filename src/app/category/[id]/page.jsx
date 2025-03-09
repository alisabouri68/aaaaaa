import React, { use} from "react";
import Breadcrumb from "@/app/component/breadcrumb/Breadcrumb";
import Category from "@/app/component/category/Category";
function page({ params }) {
  const { id } = use(params);
  return (
    <main className="grow">
      <Breadcrumb />
     <Category id={id}/>
    </main>
  );
}

export default page;
