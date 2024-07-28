import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Input, Heading } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-start items-start ml-[120px] gap-2 md:ml-5">
        <Img src="images/img_group_19.svg" alt="image" className="h-[24px] mt-1" />
        <Heading as="h4" className="!text-gray-800">
          ShilpoVault{" "}
        </Heading>
      </div>
      <div className="flex flex-row md:flex-col justify-between w-[60%] mr-[120px] md:gap-10 md:mr-5">
        <Input
          color="white_A700"
          size="xs"
          variant="fill"
          shape="square"
          name="search"
          placeholder="Search here"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          suffix={
            <div className="flex justify-center items-center w-[48px] h-[48px] bg-gray-800">
              {searchBarValue?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
              ) : (
                <Img src="images/img_search_white_a700_18x18.svg" alt="search" className="cursor-pointer" />
              )}
            </div>
          }
          className="w-[53%] md:w-full gap-[35px] text-gray-500_87 border-gray-50 border-2 border-solid"
        />
        <div className="flex flex-row justify-between items-center w-[20%] md:w-full">
          <div className="flex flex-row justify-between w-auto gap-8">
            <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
            <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-[24px] w-[24px]" />
          </div>
          <Button size="md" shape="square" className="sm:px-5 font-bold min-w-[107px]">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
