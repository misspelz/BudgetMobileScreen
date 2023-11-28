import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import percent from "../assets/percent.png";
import savings from "../assets/savings.png";
import food from "../assets/food.png";
import transport from "../assets/transport.png";

const ThisMonth = () => {
  return (
    <Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        mt="20px"
        alignItems="center"
      >
        <Image src={percent} alt="budget percentage" />
        <Text fontSize="14px" color="#707480" mt="20px">
          Amount spent so far
        </Text>
        <Flex mt="5px">
          <Text fontSize="14px" color="#0466C8">
            ₦50,000
          </Text>
          <Text fontSize="14px" color="#83b3e2">
            /
          </Text>
          <Text fontSize="14px" color="#83b3e2">
            ₦120,000
          </Text>
        </Flex>
      </Box>

      <Text fontSize="20px" fontWeight="600" mt="20px">
        Category Breakdown
      </Text>

      <Flex justifyContent="space-between" mt="30px">
        <Flex gap="10px">
          <Box>
            <Image src={food} alt="food" />
          </Box>
          <Box>
            <Text fontSize="14px" color="#000" fontWeight="600">
              Food and Drink
            </Text>
            <Text fontSize="14px" color="#000">
              40%
            </Text>
          </Box>
        </Flex>
        <Box>
          <Flex>
            <Text fontSize="14px" color="#000" fontWeight="600">
              ₦20,000
            </Text>
            <Text fontSize="14px" color="#cfd3d9">
              /
            </Text>
            <Text fontSize="14px" color="#cfd3d9">
              ₦42,000
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex justifyContent="space-between" my="20px">
        <Flex gap="10px">
          <Box>
            <Image src={savings} alt="savings" />
          </Box>
          <Box>
            <Text fontSize="14px" color="#000" fontWeight="600">
              Savings
            </Text>
            <Text fontSize="14px" color="#000">
              20%
            </Text>
          </Box>
        </Flex>
        <Box>
          <Flex>
            <Text fontSize="14px" color="#000" fontWeight="600">
              ₦10,000
            </Text>
            <Text fontSize="14px" color="#cfd3d9">
              /
            </Text>
            <Text fontSize="14px" color="#cfd3d9">
              ₦24,000
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex justifyContent="space-between" my="20px">
        <Flex gap="10px">
          <Box>
            <Image src={transport} alt="transport" />
          </Box>
          <Box>
            <Text fontSize="14px" color="#000" fontWeight="600">
              Transport
            </Text>
            <Text fontSize="14px" color="#000">
              20%
            </Text>
          </Box>
        </Flex>
        <Box>
          <Flex>
            <Text fontSize="14px" color="#000" fontWeight="600">
              ₦7,000
            </Text>
            <Text fontSize="14px" color="#cfd3d9">
              /
            </Text>
            <Text fontSize="14px" color="#cfd3d9">
              ₦20,000
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ThisMonth;
