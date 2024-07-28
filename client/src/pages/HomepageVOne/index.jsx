import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Input, RatingBar, Button } from "../../components";

export default function HomepageVOnePage() {
  return (
    <>
      <Helmet>
        <title>Sattwikee's Ecommerce Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex justify-center items-center w-full p-[17px] bg-white-A700">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1632px]">
            <div className="flex flex-row justify-start items-start gap-2">
              <Img src="images/img_group_19.svg" alt="image" className="h-[24px] mt-1" />
              <Heading as="h4" className="!text-gray-800">
                Elliye{" "}
              </Heading>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-[70%] md:w-full md:gap-10">
              <div className="flex flex-row sm:flex-col justify-between w-auto gap-20 sm:gap-10">
                <Text as="p" className="mt-0.5 sm:mt-0 !text-gray-800 !font-medium">
                  Categories
                </Text>
                <Text as="p" className="!text-gray-800 !font-medium">
                  New Arrival
                </Text>
                <Text as="p" className="!text-gray-800 !font-medium">
                  Features
                </Text>
                <Text as="p" className="!text-gray-800 !font-medium">
                  Collections
                </Text>
              </div>
              <div className="flex flex-row justify-between items-center w-[22%] md:w-full">
                <div className="flex flex-row justify-between w-auto gap-8">
                  <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
                </div>
                <Button size="5xl" shape="square" className="sm:px-5 font-bold min-w-[107px]">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-end w-full bg-gray-50">
              <div className="flex flex-row md:flex-col justify-end items-start w-full mx-auto md:gap-5 md:px-5 max-w-[1776px]">
                <div className="flex flex-col items-start justify-start w-[32%] md:w-full mt-[102px] md:mt-0 z-[1]">
                  <Text size="xl" as="p" className="!text-gray-800 !font-playfairdisplay">
                    Summer Sale
                  </Text>
                  <Heading size="lg" as="h1" className="mt-0.5 !text-gray-800">
                    50% Off
                  </Heading>
                  <Text as="p" className="w-[93%] mt-[34px] !text-gray-800 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.{" "}
                  </Text>
                  <Button
                    size="3xl"
                    shape="square"
                    rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" />}
                    className="mt-14 gap-2.5 sm:px-5 font-medium min-w-[245px] sm:min-w-full"
                  >
                    Shop Now
                  </Button>
                </div>
                <div className="flex flex-row justify-end w-[69%] md:w-full ml-[-14px] md:ml-0">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row sm:flex-col justify-center w-full sm:gap-5">
                      <Img
                        src="images/img_placeholder.png"
                        alt="placeholder_one"
                        className="w-[32%] md:h-auto sm:w-full object-cover"
                      />
                      <Img
                        src="images/img_placeholder_364x837.png"
                        alt="placeholder"
                        className="w-[69%] md:h-auto sm:w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
                      <div className="h-[336px] w-[32%] md:w-full relative">
                        <Img
                          src="images/img_placeholder_336x385.png"
                          alt="placeholder"
                          className="justify-center h-[336px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                        />
                        <div className="flex w-[112px] h-[12px] sm:w-full bottom-[11%] right-[17%] m-auto absolute" />
                      </div>
                      <Img
                        src="images/img_placeholder_336x384.png"
                        alt="placeholder"
                        className="w-[32%] md:w-full md:h-[336px] object-cover"
                      />
                      <div className="flex flex-row justify-center w-[38%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            src="images/img_placeholder_336x453.png"
                            alt="placeholder"
                            className="w-full md:h-[336px] object-cover"
                          />
                          <Img src="images/img_button.svg" alt="button_one" className="h-[48px] mt-[-48px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[103px] gap-7 md:px-5 max-w-[1633px]">
            <div className="flex flex-row justify-between items-start w-full">
              <Heading size="s" as="h2" className="!text-gray-800">
                Categories
              </Heading>
              <div className="flex flex-row justify-center mt-[9px]">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-8">
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-[7px] p-9 sm:p-5 bg-gray-50">
                <Img src="images/img_sweater.svg" alt="jacket_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-2.5">
                  Jacket
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-[7px] p-9 sm:p-5 bg-gray-50">
                <Img src="images/img_tshirt.svg" alt="tshirt_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-2.5">
                  Shirt
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-2 p-9 sm:p-5 bg-gray-50">
                <Img src="images/img_pants.svg" alt="pants_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-[9px]">
                  Pants
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-[7px] p-9 sm:p-5 bg-gray-800">
                <Img src="images/img_boot.svg" alt="boot_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-2.5 !text-white-A700">
                  Shoes
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-2 p-9 sm:p-5 bg-gray-50">
                <Img src="images/img_dress.svg" alt="dress_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-[9px]">
                  Dress
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-[7px] p-9 sm:p-5 bg-gray-50">
                <Img src="images/img_belt.svg" alt="belt_one" className="h-[96px] w-[96px]" />
                <Text as="p" className="mb-2.5">
                  Accesories
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[98px] md:px-5 max-w-[1632px]">
            <div className="flex flex-col items-center justify-start w-full gap-[33px]">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="s" as="h2" className="!text-gray-800">
                  New Arrivals
                </Heading>
                <div className="flex flex-row justify-center">
                  <a href="#">
                    <Text as="p" className="!text-gray-800 !font-medium">
                      View all
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start w-full gap-8 md:gap-5">
                <div className="flex flex-row md:flex-col justify-between items-center w-[50%] md:w-full md:h-auto p-7 md:gap-10 sm:p-5 bg-gray-50">
                  <Img
                    src="images/img_placeholder_631x384.png"
                    alt="placeholder"
                    className="w-[52%] md:w-full md:h-[631px] ml-[33px] sm:ml-5 object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[33%] md:w-full mr-[33px] gap-6 sm:mr-5">
                    <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Purple Warm Jacket
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                    <Button size="5xl" shape="square" className="sm:px-5 font-bold min-w-[200px] sm:min-w-full">
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[50%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="justify-center w-full gap-8 grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                      <div className="flex flex-col items-center justify-start w-full gap-4 p-8 sm:p-5 bg-gray-50">
                        <Img
                          src="images/img_placeholder_177x177.png"
                          alt="placeholder_one"
                          className="w-[177px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[89%] md:w-full pt-0.5 gap-1.5">
                          <Text size="md" as="p" className="!text-gray-800">
                            Blue Grey Warm Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-3.5 p-[31px] sm:p-5 bg-gray-50">
                        <Img
                          src="images/img_placeholder_1.png"
                          alt="placeholder_one"
                          className="w-[177px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[52%] md:w-full gap-[9px]">
                          <Text size="md" as="p" className="!text-gray-800">
                            Denim Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[31px] sm:p-5 bg-gray-50">
                        <Img
                          src="images/img_placeholder_2.png"
                          alt="placeholder_one"
                          className="w-[177px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[48%] md:w-full gap-[9px]">
                          <Text size="md" as="p" className="!text-gray-800">
                            Black Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[31px] sm:p-5 bg-gray-50">
                        <Img
                          src="images/img_placeholder_3.png"
                          alt="placeholder_one"
                          className="w-[177px] md:h-auto object-cover"
                        />
                        <div className="flex flex-col items-center justify-start w-[72%] md:w-full gap-[9px]">
                          <Text size="md" as="p" className="!text-gray-800">
                            Green Polar Jacket
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[99px] gap-8 md:px-5 max-w-[1632px]">
            <div className="flex flex-row justify-between items-center w-full">
              <Heading size="s" as="h2" className="!text-gray-800">
                Featured
              </Heading>
              <div className="flex flex-row justify-center">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[96%] gap-[113px] md:gap-10">
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                <div className="flex flex-col items-center justify-start w-[25%] md:h-auto gap-[15px] p-[41px] md:p-5 border-gray-800 border-2 border-solid">
                  <Img
                    src="images/img_placeholder_250x250.png"
                    alt="black_briefcase"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[61%] md:w-full gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Black Briefcase
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                  <Button size="5xl" shape="square" className="sm:px-5 font-bold min-w-[200px] sm:min-w-full">
                    Add to Cart
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-3.5">
                  <Img
                    src="images/img_placeholder_4.png"
                    alt="placeholder_one"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[45%] md:w-full gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Pink Shirt
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[25%] md:w-full gap-4 px-14 py-[67px] md:p-5">
                  <Img
                    src="images/img_placeholder_5.png"
                    alt="placeholder"
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
                <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-[15px]">
                  <Img
                    src="images/img_placeholder_6.png"
                    alt="placeholder"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Red Flannel
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between w-[96%] md:w-full ml-[67px] md:gap-10 md:ml-5">
                <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4">
                  <Img
                    src="images/img_placeholder_3.png"
                    alt="stylishblacks"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[77%] md:w-full pt-0.5 gap-1.5">
                    <Text size="md" as="p" className="!text-gray-800">
                      Black Highheels
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4">
                  <Img
                    src="images/img_placeholder_631x384.png"
                    alt="casualfabrics"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[92%] md:w-full pt-0.5 gap-1.5">
                    <Text size="md" as="p" className="!text-gray-800">
                      Casual Grey Shoes
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-[15px]">
                  <Img
                    src="images/img_shoes_isolated_pk7npbk.png"
                    alt="shoesisolated"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[62%] md:w-full gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Brown Shoes
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-3.5">
                  <Img
                    src="images/img_business_shirt_ptnj9lv.png"
                    alt="businessshirt"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-[9px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Business Shirt
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center w-[96%] md:w-full ml-[67px] md:gap-10 md:ml-5">
                <div className="flex flex-col items-center justify-start w-[17%] md:w-full gap-4">
                  <Img
                    src="images/img_warm_pants_pxl7hrp.png"
                    alt="warmpants_one"
                    className="w-[250px] md:h-auto object-cover"
                  />
                  <div className="flex flex-col items-center justify-start w-[85%] md:w-full pt-0.5 gap-[5px]">
                    <Text size="md" as="p" className="!text-gray-800">
                      Grey Warm Pants
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-[73%] md:w-full md:gap-10">
                  <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-4">
                    <Img
                      src="images/img_sport_j9bzxuy.png"
                      alt="sportj9bzxuy"
                      className="w-[250px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[93%] md:w-full pt-0.5 gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Green Sport Jacket
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[36%] md:w-full gap-4 px-14 py-[67px] md:p-5">
                    <Img
                      src="images/img_travel_8v7cnke.png"
                      alt="travel8v7cnke"
                      className="w-[250px] md:h-auto mt-3.5 object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[91%] md:w-full mb-3.5 pt-0.5 gap-[5px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Purple Warm Jacket
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] md:w-full gap-3.5">
                    <Img
                      src="images/img_placeholder_1.png"
                      alt="womensdenim_one"
                      className="w-[250px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Woman Denim Skirt
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[544px] w-full mt-[75px] relative">
            <div className="flex flex-row justify-center w-[87%] bottom-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                <div className="flex flex-row md:flex-col w-[99%] md:w-full gap-8">
                  <div className="h-[400px] w-[33%] md:w-full bg-blue_gray-100 relative">
                    <Img
                      src="images/img_image_2.png"
                      alt="summer"
                      className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="w-[36%] h-max ml-[59px] left-[11%] bottom-0 top-0 my-auto md:ml-5 !text-gray-800 absolute"
                    >
                      <span className="text-gray-800">
                        <>
                          Summer <br />
                        </>
                      </span>
                      <span className="text-gray-800 font-bold">Collection</span>
                    </Text>
                  </div>
                  <div className="h-[400px] w-[33%] md:w-full bg-blue_gray-100 relative">
                    <Img
                      src="images/img_image_3.png"
                      alt="imagethree_one"
                      className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="w-[36%] h-max ml-[53px] left-[10%] bottom-0 top-0 my-auto md:ml-5 !text-white-A700 absolute"
                    >
                      <span className="text-white-A700">
                        <>
                          Casual <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-bold">Collection</span>
                    </Text>
                  </div>
                  <div className="h-[400px] w-[33%] md:w-full bg-blue_gray-100 relative">
                    <Img
                      src="images/img_image_4.png"
                      alt="imagefour_one"
                      className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="w-[36%] h-max ml-[52px] left-[10%] bottom-0 top-0 my-auto md:ml-5 !text-white-A700 absolute"
                    >
                      <span className="text-white-A700">
                        <>
                          Big Vibe <br />
                        </>
                      </span>
                      <span className="text-white-A700 font-bold">Collection</span>
                    </Text>
                  </div>
                </div>
                <Button color="white_A700" size="4xl" shape="square" className="w-[60px] ml-[-30px] md:ml-0">
                  <Img src="images/img_arrow_gray_800.svg" />
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full top-0 right-0 left-0 p-[43px] m-auto md:p-5 bg-gray-800 absolute">
              <Heading size="s" as="h2" className="mb-[284px] ml-[100px] md:ml-5">
                Summer Collections
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[103px] gap-[51px] md:px-5 max-w-[1632px]">
            <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
              <Heading size="s" as="h2" className="!text-gray-800">
                Popular This Week
              </Heading>
              <div className="flex flex-row justify-center mt-[9px] sm:mt-0">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col w-[98%] gap-[77px] md:gap-10">
              <div className="flex flex-row md:flex-col justify-center w-full md:gap-5">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[29%] md:w-full gap-4 sm:gap-5">
                  <div className="flex flex-row justify-start w-[49%] sm:w-full">
                    <Img
                      src="images/img_placeholder_175x225.png"
                      alt="checkered"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[48%] sm:w-full gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Checkered Jacket
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-center w-[27%] md:w-full ml-[94px] gap-4 md:ml-5 sm:gap-5">
                  <div className="flex flex-row justify-start w-[54%] sm:w-full">
                    <Img
                      src="images/img_placeholder_7.png"
                      alt="checkered"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[43%] sm:w-full gap-4">
                    <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                      <Text size="md" as="p" className="mt-0.5 !text-gray-800">
                        Elegant Jacket
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-start items-center w-[31%] md:w-full ml-[134px] gap-4 md:gap-5 md:ml-5">
                  <div className="flex flex-row justify-start w-[47%] md:w-full">
                    <Img
                      src="images/img_placeholder_8.png"
                      alt="checkered"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[50%] md:w-full gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Blue Woman Denim
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between w-[95%] md:w-full mr-[88px] md:gap-10 md:mr-5">
                <div className="flex flex-row sm:flex-col justify-start items-center w-[28%] md:w-full gap-4 sm:gap-5">
                  <div className="flex flex-row justify-start w-[55%] sm:w-full">
                    <Img
                      src="images/img_placeholder_9.png"
                      alt="placeholder_one"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[42%] sm:w-full gap-4">
                    <div className="flex flex-col items-start justify-center w-full gap-1">
                      <Text size="md" as="p" className="mt-0.5 !text-gray-800">
                        Orange Jeans
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-center w-[27%] md:w-full gap-4 sm:gap-5">
                  <div className="flex flex-row justify-start w-[58%] sm:w-full">
                    <Img
                      src="images/img_placeholder_10.png"
                      alt="placeholder"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[39%] sm:w-full gap-4">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Blue Jeans
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-center w-[27%] md:w-full gap-4 sm:gap-5">
                  <div className="flex flex-row justify-start w-[58%] sm:w-full">
                    <Img
                      src="images/img_placeholder_11.png"
                      alt="placeholder"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[39%] sm:w-full gap-4">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Text size="md" as="p" className="mt-px !text-gray-800">
                        Gray Watch
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between w-[96%] md:w-full mr-[67px] md:gap-10 md:mr-5">
                <div className="flex flex-row md:flex-col justify-between w-[63%] md:w-full md:gap-10">
                  <div className="flex flex-row sm:flex-col justify-start items-center w-[50%] md:w-full gap-4 sm:gap-5">
                    <div className="flex flex-row justify-start w-[49%] sm:w-full">
                      <Img
                        src="images/img_placeholder_12.png"
                        alt="placeholder_one"
                        className="w-full md:h-auto sm:w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%] sm:w-full gap-4">
                      <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                        <Text size="md" as="p" className="mt-px !text-gray-800">
                          Black Sport Jacket
                        </Text>
                        <Text size="md" as="p">
                          $299
                        </Text>
                      </div>
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={24}
                        className="flex justify-between"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-center w-[42%] md:w-full gap-4 sm:gap-5">
                    <div className="flex flex-row justify-start w-[58%] sm:w-full">
                      <Img
                        src="images/img_placeholder_13.png"
                        alt="placeholder"
                        className="w-full md:h-auto sm:w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[39%] sm:w-full gap-4">
                      <div className="flex flex-col items-start justify-start gap-2">
                        <Text size="md" as="p" className="!text-gray-800">
                          Wristwatch
                        </Text>
                        <Text size="md" as="p">
                          $299
                        </Text>
                      </div>
                      <RatingBar
                        value={4}
                        isEditable={true}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={24}
                        className="flex justify-between"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col justify-start items-center w-[28%] md:w-full gap-4 sm:gap-5">
                  <div className="flex flex-row justify-start w-[55%] sm:w-full">
                    <Img
                      src="images/img_placeholder_14.png"
                      alt="placeholder"
                      className="w-full md:h-auto sm:w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[42%] sm:w-full gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800">
                        Classic Watch
                      </Text>
                      <Text size="md" as="p">
                        $299
                      </Text>
                    </div>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#f6f7fb"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full mt-[126px] gap-[27px]">
            <Heading size="s" as="h2" className="ml-36 md:ml-5 !text-gray-800">
              Why Choose Us
            </Heading>
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-row md:flex-col w-full gap-8 px-36 md:px-5 bg-gray-50">
                <div className="flex flex-col items-center justify-center h-[384px] w-[24%] md:w-full sm:h-auto gap-8 px-14 py-[63px] md:p-5">
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[25px] sm:p-5 border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img src="images/img_truck.svg" alt="truck_one" className="h-[65px] w-[65px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[78%] md:w-full gap-3.5">
                    <Heading as="h3" className="!text-gray-800">
                      Free Delivery
                    </Heading>
                    <Text as="p" className="text-center">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[384px] w-[24%] md:w-full sm:h-auto gap-8 px-14 py-[63px] md:p-5">
                  <div className="flex flex-col items-center justify-start h-[120px] w-[120px] p-[26px] sm:p-5 border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img src="images/img_card.svg" alt="card_one" className="h-[64px] w-[64px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[78%] md:w-full pt-0.5 gap-[13px]">
                    <Heading as="h4" className="!text-gray-800">
                      Payment Method
                    </Heading>
                    <Text as="p" className="text-center">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[384px] w-[24%] md:w-full sm:h-auto gap-8 px-14 py-[63px] md:p-5">
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[25px] sm:p-5 border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img src="images/img_broken.svg" alt="broken_one" className="h-[64px] w-[64px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[78%] md:w-full pt-0.5 gap-[13px]">
                    <Heading as="h5" className="!text-gray-800">
                      Warranty
                    </Heading>
                    <Text as="p" className="text-center">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center h-[384px] w-[24%] md:w-full sm:h-auto gap-8 px-14 py-[63px] md:p-5">
                  <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[25px] sm:p-5 border-gray-500 border-2 border-solid rounded-[50%]">
                    <Img src="images/img_support.svg" alt="support_one" className="h-[65px] w-[65px]" />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[84%] md:w-full pt-0.5 gap-[13px]">
                    <Heading as="h6" className="!text-gray-800">
                      Customer Support{" "}
                    </Heading>
                    <Text as="p" className="w-[93%] text-center">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_brand.svg" alt="brand_one" className="h-[68px] mt-[100px]" />
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px] p-[30px] sm:p-5 bg-gray-800">
          <div className="flex flex-col items-center justify-center w-[83%] mt-[31px] ml-[113px] gap-[82px] md:ml-5">
            <div className="flex flex-row justify-end w-full">
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-row md:flex-col justify-between items-start w-[63%] md:w-full md:gap-10">
                  <div className="flex flex-col items-start justify-start w-[45%] md:w-full gap-[30px]">
                    <Heading as="h4">Join our Newsletter</Heading>
                    <Text as="p" className="!text-white-A700">
                      <>
                        Drop your email below to get update about us, <br />
                        lastest news, tips, and more!
                      </>
                    </Text>
                    <Input
                      color="white_A700"
                      variant="fill"
                      shape="square"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      suffix={<Img src="images/img_arrow_gray_800.svg" alt="Arrow" />}
                      className="w-[91%] sm:w-full gap-[35px] text-gray-500_87 tracking-[0.36px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[18%] md:w-full gap-[25px]">
                    <Heading as="h4">Product Links</Heading>
                    <div className="flex flex-col items-start justify-center gap-[15px]">
                      <Text as="p" className="mt-px !text-white-A700">
                        Categories
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        New Arrival
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        Features
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        Collections
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[13%] md:w-full mt-1 gap-[21px] md:mt-0">
                    <Heading as="h4">Company</Heading>
                    <div className="flex flex-col items-start justify-start">
                      <Text as="p" className="!text-white-A700">
                        About
                      </Text>
                      <Text as="p" className="mt-3 !text-white-A700">
                        Blog
                      </Text>
                      <a href="#" className="mt-[7px]">
                        <Text as="p" className="!text-white-A700">
                          Careers
                        </Text>
                      </a>
                      <Text as="p" className="mt-2.5 !text-white-A700">
                        Contact{" "}
                      </Text>
                      <Text as="p" className="mt-[9px] !text-white-A700">
                        Services
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[28%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[35%] mt-[3px] gap-[21px]">
                    <a href="#">
                      <Heading as="h4">Support</Heading>
                    </a>
                    <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                      <Text as="p" className="mt-0.5 !text-white-A700">
                        Support Center
                      </Text>
                      <Text as="p" className="!text-white-A700">
                        FAQ
                      </Text>
                      <a href="#">
                        <Text as="p" className="!text-white-A700">
                          Privacy Policy
                        </Text>
                      </a>
                      <a href="#">
                        <Text as="p" className="!text-white-A700">
                          Terms of service
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[36%] gap-6">
                    <Heading as="h4">Get In Touch</Heading>
                    <div className="flex flex-row justify-between w-[79%] md:w-full">
                      <Img src="images/img_instagram.svg" alt="instagram_one" className="h-[24px] w-[24px]" />
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                          <Img src="images/img_twitter.svg" alt="twitter_one" className="h-[24px] w-[24px]" />
                        </div>
                      </div>
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="xs" as="p" className="mr-[583px] md:mr-5 !text-white-A700">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
