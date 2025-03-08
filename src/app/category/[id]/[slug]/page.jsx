// "use client";
import React from "react";
import { use } from "react";
import Breadcrumb from "@/app/component/breadcrumb/Breadcrumb";
import Container from "@/app/component/header/Container";
import CardItems from "@/app/component/cardItem/CardItems";
import Filtering from "@/app/component/filtering/Filtering";
function page({ params }) {
  const { slug } = use(params);
console.log(slug)
console.log(params)
  return (
    <>
      <Breadcrumb />
      <main className="">
        <Container>
          <div className="grid grid-cols-12 py-5">
            <div className="col-span-3 relative rounded-lg">
              <Filtering />
            </div>
            <div className="col-span-9 flex flex-wrap *:w-full *:md:w-[50%] *:lg:w-[33%] *:xl:w-[25%] px-3">
              <CardItems slug={slug} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default page;
