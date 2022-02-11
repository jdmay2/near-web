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

function UserComp({ user }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState(null);

  let dataHeaders = [
    "Full Name",
    "Username",
    "# of Courses",
    "# of Assistant Courses",
  ];

  useEffect(() => {
    fetch(`https://near-bbl.herokuapp.com/User`)
      .then((response) =>
        response.json().then((data) => {
          setUsers(data);
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
      case "Full Name+":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "Full Name-":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "Username+":
        return list.sort((a, b) => a.username.localeCompare(b.username));
      case "Username-":
        return list.sort((a, b) => b.username.localeCompare(a.username));
      case "# of Courses+":
        return list.sort((a, b) => a.courses - b.courses);
      case "# of Courses-":
        return list.sort((a, b) => b.courses - a.courses);
      case "# of Assistant Courses+":
        return list.sort((a, b) => a.assistants - b.assistants);
      case "# of Assistant Courses-":
        return list.sort((a, b) => b.assistants - a.assistants);
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
            data={getSort(users)}
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
                      {item.username}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.courses}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.assistants}
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

export default UserComp;
