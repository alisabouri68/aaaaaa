// "use client";
import React from "react";
import { use } from "react";
import Breadcrumb from "@/app/component/breadcrumb/Breadcrumb";
import Container from "@/app/component/header/Container";
import CardItems from "@/app/component/cardItem/CardItems";
import Filtering from "@/app/component/filtering/Filtering";
function page({ params }) {
  const { slug } = use(params);

  return (
    <>
      <Breadcrumb />
      <main className="">
        <Container>
          <div className="grid grid-cols-12 py-5">
            <div className="col-span-3 relative rounded-lg">
              <Filtering />
            </div>
            <div className="col-span-9 *:min-h-[430px] *:max-h-[430px] *:min-w-full *:lg:min-w-[33%] *:lg:max-w-[33%]  *:2xl:min-w-[25%] *:2xl:max-w-[25%] flex flex-wrap items-start justify-start px-5">
              <CardItems slug={slug} />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

export default page;
