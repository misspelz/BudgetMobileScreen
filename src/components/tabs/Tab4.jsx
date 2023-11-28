import {
  Box,
  Flex,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import naira from "../../assets/naira.png";
import { HiDotsHorizontal } from "react-icons/hi";
import percent from "../../assets/percent.png";
import savings from "../../assets/savings.png";
import food from "../../assets/food.png";
import ThisMonth from "../ThisMonth";

const Tab4 = () => {
  return (
    <Box>
      <Text fontSize="24px" fontWeight="700">
        Budget
      </Text>
      <Flex gap="10px" w="100%" mt="20px">
        <Image src={naira} alt="naira icon" w="20px" h="20px" />
        <Text fontSize="14px" color="#707480">
          Monthly Budget
        </Text>
      </Flex>
      <Box
        mt="20px"
        boxShadow=" 0px 5px 10px 2px #00000008"
        borderRadius="10px"
        py="10px"
      >
        <Text ml="25px" fontSize="24px" fontWeight="700">
          ₦120,000
        </Text>
      </Box>

      <Tabs position="relative" variant="unstyled" mt="25px">
        <TabList display={"flex"} justifyContent={"space-between"}>
          <Flex gap="20px">
            <Tab fontWeight="500" px="0px">
              Last Month
            </Tab>
            <Tab fontWeight="500" px="0px">
              This Month
            </Tab>
          </Flex>
          <HiDotsHorizontal size={20} />
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
          ml="0px"
        />
        <TabPanels>
          <TabPanel px="0px">
            <Text>Last Month!</Text>
          </TabPanel>
          <TabPanel height="53vh" overflowY="scroll" px="0px">
            <ThisMonth />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Tab4;
