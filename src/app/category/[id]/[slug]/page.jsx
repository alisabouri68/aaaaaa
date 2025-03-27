"use client";
import React from "react";
import { use } from "react";
import Breadcrumb from "@/app/component/breadcrumb/Breadcrumb";
import Container from "@/app/component/header/Container";
import CardItems from "@/app/component/cardItem/CardItems";
import Filtering from "@/app/component/filtering/Filtering";
import FilteringMobile from "@/app/component/filtering/FilteringMobile";
import { ModalParentHandler } from "@/app/zustand/ModalStoreParent";
import FilterPrice from "@/app/component/filtering/filterprice/FilterPrice";
import FilterCountry from "@/app/component/filtering/filtercountry/FilterCountry";
import ModalParent from "@/app/component/modal/ModalParent";
function page({ params }) {
  const {index} = ModalParentHandler();
  const { slug } = use(params);
  return (
    <>
      <Breadcrumb />
      <main className="">
        <Container>
          <div className="grid grid-cols-12 py-5">
            <div className="hidden lg:flex lg:col-span-3 relative rounded-lg">
              <Filtering slug={slug} />
            </div>
            <div className="flex lg:hidden w-full col-span-12">
              <FilteringMobile />
            </div>
            <div className="col-span-12 lg:col-span-9 flex flex-wrap *:min-h-[450px] *:max-h-[450px] *:w-full *:md:w-[50%] *:lg:w-[33%] *:xl:w-[25%] pr-4">
              <CardItems slug={slug} />
            </div>
          </div>
          <ModalParent >
                {index === 2 ? <FilterPrice  /> :
                index === 0 ? <FilteringBrand  /> :
                  index === 1 ? <FilterCountry styles="rounded-lg min-w-full grid gap-5" styles2="flex items-center justify-around " /> :
                    null}
                </ModalParent>
        </Container>
      </main>
    </>
  );
}

export default page;
