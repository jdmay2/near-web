import React, { useState, useEffect } from "react";
import {
  Box,
  FlatList,
  Center,
  Text,
  Toast,
  VStack,
  HStack,
  Divider,
  Pressable,
} from "native-base";
import ReactLoading from "react-loading";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

function CourseComp({ user }) {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [sort, setSort] = useState(null);

  let dataHeaders = [
    "Course Name",
    "Description",
    "Faculty Name",
    "# of Students",
    "Organization",
  ];

  useEffect(() => {
    fetch(`https://near-bbl.herokuapp.com/Course`)
      .then((response) =>
        response.json().then((data) => {
          setCourses(data);
          Toast.closeAll();
        })
      )
      .catch((error) => {
        Toast.isActive("servError") ||
          Toast.show({
            id: "servError",
            title: "Server Error",
            status: "warning",
            description: "Please try again later",
            placement: "top",
            variant: "solid",
            duration: null,
            isClosable: false,
          });
      })
      .finally(() => setTimeout(() => setLoading(false), 3000));
  }, []);

  const getSort = (list) => {
    switch (sort) {
      case "Course Name+":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "Course Name-":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "Description+":
        return list.sort((a, b) => a.description.localeCompare(b.description));
      case "Description-":
        return list.sort((a, b) => b.description.localeCompare(a.description));
      case "Faculty Name+":
        return list.sort((a, b) => a.facultyName.localeCompare(b.facultyName));
      case "Faculty Name-":
        return list.sort((a, b) => b.facultyName.localeCompare(a.facultyName));
      case "# of Students+":
        return list.sort((a, b) => a.users.length - b.users.length);
      case "# of Students-":
        return list.sort((a, b) => b.users.length - a.users.length);
      case "Organization+":
        return list.sort((a, b) => (a.org ? 1 : -1));
      case "Organization-":
        return list.sort((a, b) => (b.org ? 1 : -1));
      case null:
        return list.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list;
    }
  };

  return (
    <VStack flex={1} align="center" justify="center" space={2}>
      <Box bg="trueGray.700" borderRadius={10} alignContent="center" px={5}>
        <HStack align="center" justify="center" space={2}>
          {dataHeaders.map((header) => (
            <Pressable
              flex={1}
              onPress={() => {
                if (sort === header + "+") {
                  setSort(header + "-");
                } else if (sort === header + "-") {
                  setSort(null);
                } else {
                  setSort(header + "+");
                }
              }}
            >
              {({ isHovered, isPressed }) => (
                <HStack
                  alignItems="center"
                  justify="center"
                  flex={1}
                  bg={isHovered || isPressed ? "trueGray.600" : "transparent"}
                >
                  <Text
                    flex={1}
                    py={2}
                    px={1.5}
                    selectable={false}
                    numberOfLines={1}
                    overflow="hidden"
                  >
                    {header}
                  </Text>
                  <HStack align="center" justify="center" space={2} mr={1}>
                    {sort === header + "+" || sort === header + "-" ? (
                      sort === header + "-" ? (
                        <AiFillCaretUp size={15} color="white" />
                      ) : (
                        <AiFillCaretDown size={15} color="white" />
                      )
                    ) : (
                      <HStack alignItems="center" justify="center">
                        <AiFillCaretLeft
                          opacity={0.5}
                          size={15}
                          color="white"
                        />
                        <AiFillCaretRight
                          opacity={0.5}
                          size={15}
                          color="white"
                        />
                      </HStack>
                    )}
                  </HStack>
                </HStack>
              )}
            </Pressable>
          ))}
        </HStack>
      </Box>
      {!loading ? (
        <Box flex={1}>
          <FlatList
            borderRadius={10}
            scrollToOverflowEnabled={true}
            top={0}
            bottom={0}
            right={0}
            left={0}
            position="absolute"
            overflowX="hidden"
            overflowY="scroll"
            bg="trueGray.700"
            data={getSort(courses)}
            renderItem={({ item }) => (
              <>
                <Box alignContent="center" px={5} py={2}>
                  <HStack align="center" justify="center" space={2}>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.name}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.description}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.facultyName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.users.length}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.org ? "Yes" : "No"}
                    </Text>
                  </HStack>
                </Box>
                <Divider />
              </>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      ) : (
        <Center bg="trueGray.900" flex={1}>
          <ReactLoading type="spin" color="#fafafa" />
        </Center>
      )}
    </VStack>
  );
}

export default CourseComp;
