import { Box, Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import Tab4 from "./tabs/Tab4";
import Tab5 from "./tabs/Tab5";
import { PiChatTextLight } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { TfiUser } from "react-icons/tfi";
import { RiBarChartFill } from "react-icons/ri";
import { GoReport } from "react-icons/go";

function BottomTabs() {
  return (
    <Box
      height="100vh"
      overflowY="scroll"
      display="flex"
      flexDirection="column"
      bg="#fcfcfc"
    >
      <Tabs
        isLazy
        display="flex"
        flexDirection="column"
        flex="1"
        justifyContent="space-between"
      >
        <TabPanels flex="1" bg="#fcfcfc" pt="10px" px="10px" pb="0px">
          <TabPanel>
            <Tab1 />
          </TabPanel>
          <TabPanel>
            <Tab2 />
          </TabPanel>
          <TabPanel>
            <Tab3 />
          </TabPanel>
          <TabPanel pb="0px">
            <Tab4 />
          </TabPanel>
          <TabPanel>
            <Tab5 />
          </TabPanel>
        </TabPanels>

        <TabList
          pt="2"
          justifyContent="space-around"
          bg="#ffffff"
          boxShadow="0px -5px 20px 5px #0000000A"
          position="absolute"
          bottom="0px"
          w="100%"
        >
          <Tab
            _selected={{
              borderBottom: "none",
              color: "#0466c8",
              transition: "none",
            }}
            color="#cfd3d9"
          >
            <Flex direction="column" align="center">
              <Box>
                <AiOutlineHome size={22} />
              </Box>
              <Box fontSize="12px" marginTop="2px" fontWeight="600">
                Home
              </Box>
            </Flex>
          </Tab>
          <Tab
            _selected={{
              borderBottom: "none",
              color: "#0466c8",
              transition: "border-bottom 0.3s ease-in-out",
            }}
            color="#cfd3d9"
          >
            <Flex direction="column" align="center">
              <Box>
                <GoReport size={22} />
              </Box>
              <Box fontSize="12px" marginTop="2px" fontWeight="600">
                Reports
              </Box>
            </Flex>
          </Tab>
          <Tab
            _selected={{
              borderBottom: "none",
              color: "#0466c8",
              transition: "border-bottom 0.3s ease-in-out",
            }}
            color="#cfd3d9"
          >
            <Flex direction="column" align="center">
              <Box>
                <PiChatTextLight size={22} />
              </Box>
              <Box fontSize="12px" marginTop="2px" fontWeight="600">
                Chats
              </Box>
            </Flex>
          </Tab>
          <Tab
            _selected={{
              borderBottom: "none",
              color: "#0466c8",
              transition: "border-bottom 0.3s ease-in-out",
            }}
            color="#cfd3d9"
          >
            <Flex direction="column" align="center">
              <Box>
                <RiBarChartFill size={22} />
              </Box>
              <Box fontSize="12px" marginTop="2px" fontWeight="600">
                Budget
              </Box>
            </Flex>
          </Tab>
          <Tab
            _selected={{
              borderBottom: "none",
              color: "#0466c8",
              transition: "border-bottom 0.3s ease-in-out",
            }}
            color="#cfd3d9"
          >
            <Flex direction="column" align="center">
              <Box>
                <TfiUser size={22} />
              </Box>
              <Box fontSize="12px" marginTop="2px" fontWeight="600">
                Profile
              </Box>
            </Flex>
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
}

export default BottomTabs;
