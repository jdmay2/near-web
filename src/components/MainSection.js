import React, { useState, useEffect } from "react";
import { Box, Center, Text, Pressable, HStack, VStack } from "native-base";
import ReactLoading from "react-loading";
import HomeComp from "./HomeComp";
import UserComp from "./UserComp";
import EventComp from "./EventComp";
import PostComp from "./PostComp";
import CourseComp from "./CourseComp";

function MainSection({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [section, setSection] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Box flex={1} alignContent="center">
      {!isLoading ? (
        <>
          <VStack align="center" justify="center">
            <HStack alignItems="center" w="100%">
              <Pressable
                mx={0.5}
                disabled={section === 0}
                onPress={() => setSection(0)}
              >
                <Box
                  bg="trueGray.700"
                  opacity={section === 0 ? 1 : 0.5}
                  shadow={section === 0 ? "9" : "1"}
                  shadowColor="black"
                  borderTopLeftRadius={15}
                  borderTopRightRadius={15}
                  py={1}
                  px={4}
                >
                  <Text
                    overflow="hidden"
                    numberOfLines={1}
                    selectable={false}
                    color="trueGray.50"
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Home
                  </Text>
                </Box>
              </Pressable>
              <Pressable
                mx={0.5}
                disabled={section === 1}
                flex={1}
                onPress={() => setSection(1)}
              >
                <Box
                  bg="trueGray.700"
                  opacity={section === 1 ? 1 : 0.5}
                  shadow={section === 1 ? "9" : "1"}
                  shadowColor="black"
                  borderTopLeftRadius={15}
                  borderTopRightRadius={15}
                  py={1}
                >
                  <Text
                    overflow="hidden"
                    numberOfLines={1}
                    selectable={false}
                    color="trueGray.50"
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Users
                  </Text>
                </Box>
              </Pressable>
              <Pressable
                mx={0.5}
                disabled={section === 2}
                flex={1}
                onPress={() => setSection(2)}
              >
                <Box
                  bg="trueGray.700"
                  opacity={section === 2 ? 1 : 0.5}
                  shadow={section === 2 ? "9" : "1"}
                  shadowColor="black"
                  borderTopLeftRadius={15}
                  borderTopRightRadius={15}
                  py={1}
                >
                  <Text
                    overflow="hidden"
                    numberOfLines={1}
                    selectable={false}
                    color="trueGray.50"
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Events
                  </Text>
                </Box>
              </Pressable>
              <Pressable
                mx={0.5}
                disabled={section === 3}
                flex={1}
                onPress={() => setSection(3)}
              >
                <Box
                  bg="trueGray.700"
                  opacity={section === 3 ? 1 : 0.5}
                  shadow={section === 3 ? "9" : "1"}
                  shadowColor="black"
                  borderTopLeftRadius={15}
                  borderTopRightRadius={15}
                  py={1}
                >
                  <Text
                    overflow="hidden"
                    numberOfLines={1}
                    selectable={false}
                    color="trueGray.50"
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Posts
                  </Text>
                </Box>
              </Pressable>
              <Pressable
                mx={0.5}
                disabled={section === 4}
                flex={1}
                onPress={() => setSection(4)}
              >
                <Box
                  bg="trueGray.700"
                  opacity={section === 4 ? 1 : 0.5}
                  shadow={section === 4 ? "9" : "1"}
                  shadowColor="black"
                  borderTopLeftRadius={15}
                  borderTopRightRadius={15}
                  py={1}
                >
                  <Text
                    overflow="hidden"
                    numberOfLines={1}
                    selectable={false}
                    color="trueGray.50"
                    textAlign="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    Courses
                  </Text>
                </Box>
              </Pressable>
            </HStack>
          </VStack>
          <Box bg="trueGray.700" flex={1} alignContent="center" p={5}>
            <Box
              bg="trueGray.800"
              flex={1}
              shadow={9}
              shadowColor="black"
              alignContent="center"
              p={5}
              borderRadius={15}
            >
              {(() => {
                switch (section) {
                  case 0:
                    return <HomeComp user={user} />;
                  case 1:
                    return <UserComp user={user} />;
                  case 2:
                    return <EventComp user={user} />;
                  case 3:
                    return <PostComp user={user} />;
                  case 4:
                    return <CourseComp user={user} />;
                  default:
                    return <HomeComp user={user} />;
                }
              })()}
            </Box>
          </Box>
        </>
      ) : (
        <Center bg="trueGray.900" flex={1}>
          <ReactLoading type="spin" color="#fafafa" />
        </Center>
      )}
    </Box>
  );
}

export default MainSection;
