import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button, RatingBar, CheckBox } from "../../components";
import Header from "../../components/Header";

export default function ProductListPage() {
  return (
    <>
      <Helmet>
        <title>Sattwikee's Ecommerce Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full p-6 sm:p-5 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-[51px] md:px-5 max-w-[1632px]">
          <div className="flex flex-row justify-between w-[13%] md:w-full">
            <Text as="p" className="!font-medium">
              Home
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              &gt;
            </Text>
            <Text as="p" className="!text-gray-800 !font-medium">
              Product List
            </Text>
          </div>
          <Heading size="s" as="h1" className="!text-gray-800">
            Product List
          </Heading>
          <div className="flex flex-row md:flex-col justify-start items-start w-full gap-8 md:gap-5">
            <div className="flex flex-col items-start justify-start w-[16%] md:w-full gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-[31px]">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    Categories
                  </Text>
                  <div className="h-px w-full bg-blue_gray-100" />
                </div>
                <div className="flex flex-col items-start justify-start w-[60%] md:w-full gap-[23px]">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_sweater_gray_500.svg" alt="sweater_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Jacket</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_tshirt.svg" alt="tshirt_one" className="h-[32px] w-[32px]" />
                    <Text as="p" className="!text-gray-800">
                      Shirt
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_pants_gray_500.svg" alt="pants_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Pants</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_boot_gray_500.svg" alt="boot_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Shoes</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_dress_gray_500.svg" alt="dress_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Dress</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_belt_gray_500.svg" alt="belt_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Accesories</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_skirt_gray_500.svg" alt="skirt_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Skirt</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Img src="images/img_arrow_down_gray_500.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
                    <a href="#">
                      <Text as="p">View more</Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-col items-start justify-start w-[68%] md:w-full gap-[29px]">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Filter by Price
                </Text>
                <div className="flex flex-col items-start justify-start w-full gap-6">
                  <CheckBox
                    shape="square"
                    name="allprice"
                    label="All Price"
                    id="allprice"
                    className="gap-4 text-left"
                  />
                  <CheckBox
                    color="gray_800"
                    variant="fill"
                    shape="square"
                    name="vector_eight"
                    label="$100 - $250"
                    id="vectoreight"
                    className="gap-4 text-left"
                  />
                  <CheckBox shape="square" name="square" label="$250 - $500" id="square" className="gap-4 text-left" />
                  <CheckBox
                    shape="square"
                    name="square_one"
                    label="$750 - $1.000"
                    id="squareone"
                    className="gap-4 text-left"
                  />
                  <CheckBox
                    shape="square"
                    name="square_two"
                    label="$1000 - $1.500"
                    id="squaretwo"
                    className="gap-4 text-left"
                  />
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-col items-start justify-start w-[79%] md:w-full gap-[29px]">
                <Text as="p" className="!text-gray-800 !font-medium">
                  Filter by Rating
                </Text>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <div className="flex flex-row justify-start w-[34%] md:w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                      <Img src="images/img_star_1_1.svg" alt="image_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[50%] md:w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-row justify-start w-[59%] gap-2">
                      <Img src="images/img_star_1_2.svg" alt="image_two" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2_24x24.svg" alt="image_three" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#fae952"
                    activeColor="#fae952"
                    size={24}
                    starCount={2}
                    className="flex justify-between"
                  />
                  <div className="flex flex-row justify-start gap-4">
                    <Button size="xs" shape="square" className="w-[24px]">
                      <Img src="images/img_checkedbox.svg" />
                    </Button>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      starCount={4}
                      className="flex justify-between"
                    />
                  </div>
                  <div className="flex flex-row justify-start w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[84%] md:w-full gap-[29px]">
              <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                <Text as="p" className="flex !font-medium">
                  <span className="text-gray-500">Viewing </span>
                  <span className="text-gray-800">20</span>
                  <span className="text-gray-500">of </span>
                  <span className="text-gray-800">160</span>
                  <span className="text-gray-500">product</span>
                </Text>
                <div className="flex flex-row justify-start items-center gap-4">
                  <Text as="p" className="flex mt-px">
                    <span className="text-gray-500">Sort by: </span>
                    <span className="text-gray-800">Newest Items</span>
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[24px] w-[24px]" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[55px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-8 grid-cols-5 md:grid-cols-3 md:gap-5 sm:grid-cols-1 grid">
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_3.png"
                          alt="green_warm"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Green <br />
                            Warm Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_1.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Black
                            <br />
                            Warm Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_shoes_isolated_pk7npbk.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Blue Grey <br />
                            Warm Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_4.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[59%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Blue Denim <br />
                            Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_mask_group_7.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Purple <br />
                            Warm Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_2.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Casual <br />
                            Pink Shirt
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_mask_group_6.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[60%] md:w-full gap-1.5">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          Gray T-shirt
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_250x250.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[58%] md:w-full gap-[9px]">
                        <Text size="md" as="p" className="!text-gray-800">
                          Red Flannel
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_631x384.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[56%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Casual <br />
                            Grey Shoes
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-3.5">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_sport_j9bzxuy.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[56%] md:w-full gap-[9px]">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          Pink Jacket
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_5.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Black <br />
                            Warm Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_245x245.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[51%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Black
                            <br />
                            Brief Case
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_business_shirt_ptnj9lv.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[77%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Modern Classic
                            <br />
                            Watch
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_177x177.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[59%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Blue Denim <br />
                            Skirt
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_23.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[71%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Casual <br />
                            Classic Watch
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_24.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[81%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Black Adventure
                            <br />
                            Boots
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_6.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Black Formal
                            <br />
                            Highheels
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_travel_8v7cnke.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[68%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Brown <br />
                            Casual Shoes
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_warm_pants_pxl7hrp.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[53%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Gray <br />
                            Longpants
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[245px] w-[245px]">
                        <Img
                          src="images/img_placeholder_25.png"
                          alt="placeholder_one"
                          className="w-[245px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[63%] md:w-full gap-2">
                        <Text size="md" as="p" className="!text-gray-800 text-center">
                          <>
                            Green
                            <br />
                            Sport Jacket
                          </>
                        </Text>
                        <Text as="p" className="!font-medium">
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[22%] md:w-full">
                  <Img src="images/img_chevron_down.svg" alt="chevrondown_one" className="h-[24px] w-[24px]" />
                  <div className="flex flex-row w-[68%] gap-6">
                    <div className="flex flex-col items-center justify-start h-[50px] w-[25%]">
                      <Button shape="square" className="sm:px-5 min-w-[50px] sm:min-w-full">
                        1
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[51px] w-[26%]">
                      <Button color="gray_500" variant="outline" shape="square" className="min-w-[51px] sm:min-w-full">
                        2
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[51px] w-[26%]">
                      <Button color="gray_500" variant="outline" shape="square" className="min-w-[51px] sm:min-w-full">
                        3
                      </Button>
                    </div>
                  </div>
                  <Img src="images/img_chevron_down_gray_500.svg" alt="chevrondown" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px]">
          <div className="flex flex-col items-center justify-center w-full gap-[97px] p-[30px] sm:p-5 bg-gray-800">
            <div className="flex flex-row md:flex-col justify-between items-start w-full mt-[31px] md:gap-10 md:px-5 max-w-[1632px]">
              <div className="flex flex-col items-start justify-start w-[26%] md:w-full gap-[31px]">
                <div className="flex flex-row justify-start items-start gap-2">
                  <Img src="images/img_group_19_white_a700.svg" alt="image_four" className="h-[24px] mt-1" />
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
                    className="w-full sm:w-full gap-[35px] tracking-[0.36px] border-white-A700 border border-solid"
                  />
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
