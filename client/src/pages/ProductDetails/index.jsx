import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";

export default function ProductDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Sattwikee's Ecommerce Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full p-6 sm:p-5 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-[181px] md:px-5 max-w-[1632px]">
          <div className="flex flex-row md:flex-col justify-start items-center w-full gap-8 md:gap-5">
            <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-8">
              <div className="flex flex-row justify-center w-full">
                <Img
                  src="images/img_placeholder_523x800.png"
                  alt="placeholder_one"
                  className="w-full md:h-auto sm:w-full object-cover"
                />
              </div>
              <div className="flex flex-row sm:flex-col w-[61%] gap-8">
                <Img
                  src="images/img_placeholder_137x139.png"
                  alt="placeholder_one"
                  className="w-[29%] md:h-auto sm:w-full object-cover"
                />
                <Img
                  src="images/img_placeholder_26.png"
                  alt="placeholder_one"
                  className="w-[29%] md:h-auto sm:w-full object-cover"
                />
                <Img
                  src="images/img_placeholder_27.png"
                  alt="placeholder_one"
                  className="w-[29%] md:h-auto sm:w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[50%] md:w-full gap-14">
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify-between w-[39%] md:w-full">
                  <Text as="p" className="mb-0.5 !font-medium">
                    Featured
                  </Text>
                  <Text as="p" className="!text-blue_gray-100 !font-medium">
                    &gt;
                  </Text>
                  <Text as="p" className="!font-medium">
                    Purple Warm Jacket
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[31px]">
                  <Heading size="md" as="h1" className="w-[49%] !text-gray-800">
                    <>
                      Purple Warm <br />
                      Zip Jacket
                    </>
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[31px]">
                    <Text size="lg" as="p">
                      $299
                    </Text>
                    <div className="h-px w-full bg-blue_gray-100" />
                  </div>
                  <Text as="p" className="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[35%] md:w-full gap-6">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Quantity
                </Text>
                <div className="flex flex-row justify-start w-[63%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Button
                      color="blue_gray_100"
                      shape="square"
                      className="w-full sm:px-5 !text-gray-800 font-medium z-[1] border-blue_gray-100 border border-solid"
                    >
                      1
                    </Button>
                    <div className="flex flex-row justify-between w-full mt-[-48px]">
                      <div className="flex flex-col items-center justify-center h-[48px] w-[48px] md:h-auto p-[19px] bg-gray-50">
                        <div className="h-[2px] w-[90%] my-[3px] bg-gray-500" />
                      </div>
                      <Button size="sm" shape="square" className="w-[48px]">
                        <Img src="images/img_increase.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="6xl"
                shape="square"
                rightIcon={<Img src="images/img_cart_white_a700.svg" alt="Cart" />}
                className="gap-4 sm:px-5 font-bold min-w-[245px] sm:min-w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[33px]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
              <div className="flex flex-row justify-between items-center w-auto gap-8">
                <Heading size="s" as="h2" className="!text-gray-800">
                  Similiar Product
                </Heading>
                <a href="#">
                  <Text as="p" className="!font-medium">
                    View all
                  </Text>
                </a>
              </div>
              <div className="flex flex-row justify-start gap-4">
                <Img src="images/img_arrow_blue_gray_100.svg" alt="arrow_one" className="h-[48px] w-[48px]" />
                <Img src="images/img_arrow_gray_800_48x48.svg" alt="arrow_three" className="h-[48px] w-[48px]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-8">
              <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-3.5 px-14 py-[67px] md:p-5">
                <Img
                  src="images/img_placeholder_1.png"
                  alt="black_briefcase"
                  className="w-[250px] md:h-auto mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[68%] md:w-full mb-3.5 gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Black Briefcase
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-3.5 px-14 py-[67px] md:p-5">
                <Img
                  src="images/img_placeholder_24.png"
                  alt="placeholder_one"
                  className="w-[250px] md:h-auto mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[41%] md:w-full mb-3.5 gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Pink Shirt
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-4 px-14 py-[67px] md:p-5">
                <Img
                  src="images/img_travel_8v7cnke.png"
                  alt="placeholder_one"
                  className="w-[250px] md:h-auto mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[54%] md:w-full mb-3.5 gap-1.5">
                  <Text size="md" as="p" className="!text-gray-800">
                    Gray T-shirt
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[24%] md:w-full gap-[15px] px-14 py-[67px] md:p-5">
                <Img
                  src="images/img_placeholder_2.png"
                  alt="placeholder_one"
                  className="w-[250px] md:h-auto mt-3.5 object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[52%] md:w-full mb-[13px] gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Red Flannel
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px] p-[30px] sm:p-5 bg-gray-800">
          <div className="flex flex-col items-center justify-center w-[88%] mt-[31px] gap-[97px] mx-[113px] md:mx-5">
            <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
              <div className="flex flex-col items-start justify-start w-[26%] md:w-full gap-[31px]">
                <div className="flex flex-row justify-start items-start gap-2">
                  <Img src="images/img_group_19_white_a700.svg" alt="image_one" className="h-[24px] mt-1" />
                  <Heading as="h4">Elliye </Heading>
                </div>
                <div className="flex flex-row justify-start">
                  <Text as="p" className="leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <div className="flex flex-row justify-start items-center w-full gap-2 py-0.5">
                    <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                    <Text as="p" className="!text-white-A700">
                      +1234567890
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Img src="images/img_email_white_a700.svg" alt="email_three" className="h-[24px] w-[24px]" />
                    <Text as="p" className="mt-0.5 !text-white-A700">
                      elliye@support.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-start w-[58%] md:w-full gap-8 md:gap-5">
                <div className="flex flex-col items-start justify-start w-[27%] md:w-full gap-[33px]">
                  <Heading as="h4">Product Links</Heading>
                  <div className="flex flex-col items-start justify-center gap-[15px]">
                    <Text as="p" className="mt-px">
                      Categories
                    </Text>
                    <Text as="p">New Arrival</Text>
                    <Text as="p">Features</Text>
                    <Text as="p">Collections</Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[27%] md:w-full gap-[29px]">
                  <Heading as="h4" className="mt-0.5">
                    Company
                  </Heading>
                  <div className="flex flex-col items-start justify-start">
                    <Text as="p">About</Text>
                    <Text as="p" className="mt-3">
                      Blog
                    </Text>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Careers</Text>
                    </a>
                    <Text as="p" className="mt-[9px]">
                      Services
                    </Text>
                    <a href="#" className="mt-3">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Terms of service</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[41%] md:w-full gap-[30px]">
                  <Heading as="h4">Join our Newsletter</Heading>
                  <Text as="p">Drop your email below to get update, promotions, coupons, and more!</Text>
                  <div className="flex flex-row justify-start sm:w-full">
                    <Input
                      color="gray_800"
                      variant="fill"
                      shape="square"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      suffix={
                        <div className="flex justify-center items-center w-[60px] h-[60px] bg-white-A700">
                          <Img src="images/img_arrow_gray_800.svg" alt="Arrow" />
                        </div>
                      }
                      className="w-full sm:w-full gap-3 tracking-[0.36px] border-white-A700 border border-solid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Text size="xs" as="p" className="!text-blue_gray-100">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
