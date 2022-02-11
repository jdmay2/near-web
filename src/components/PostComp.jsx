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
import moment from "moment";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

function PostComp({ user }) {
  const [loading, setLoading] = useState(true);
  const [roster, setRoster] = useState([]);
  const [sort, setSort] = useState(null);

  let dataHeaders = [
    "Student Name",
    "Operator Name",
    "Event Name",
    "Course Name",
    "Date",
    "Time",
  ];

  useEffect(() => {
    fetch(`https://near-bbl.herokuapp.com/Roster`)
      .then((response) =>
        response.json().then((data) => {
          setRoster(data);
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

  const getSort = (roster) => {
    switch (sort) {
      case "Student Name+":
        return roster.sort((a, b) => a.userName.localeCompare(b.userName));

      case "Student Name-":
        return roster.sort((a, b) => b.userName.localeCompare(a.userName));

      case "Operator Name+":
        return roster.sort((a, b) =>
          a.operatorName.localeCompare(b.operatorName)
        );

      case "Operator Name-":
        return roster.sort((a, b) =>
          b.operatorName.localeCompare(a.operatorName)
        );
      case "Event Name+":
        return roster.sort((a, b) => a.eventName.localeCompare(b.eventName));
      case "Event Name-":
        return roster.sort((a, b) => b.eventName.localeCompare(a.eventName));
      case "Course Name+":
        return roster.sort((a, b) => a.courseName.localeCompare(b.courseName));
      case "Course Name-":
        return roster.sort((a, b) => b.courseName.localeCompare(a.courseName));
      case "Date+":
        return roster.sort((a, b) => a.date.localeCompare(b.date));

      case "Date-":
        return roster.sort((a, b) => b.date.localeCompare(a.date));

      case "Time+":
        return roster.sort((a, b) => moment(a.date).diff(b.date));

      case "Time-":
        return roster.sort((a, b) => moment(b.date).diff(a.date));

      case null:
        return roster.sort((a, b) => b.date.localeCompare(a.date));

      default:
        return roster;
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
            data={getSort(roster)}
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
                      {item.userName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.operatorName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.eventName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.courseName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {moment(item.date).isSame(new Date(), "day")
                        ? "Today"
                        : moment(item.date).format("MMM") +
                          " " +
                          moment(item.date).format("DD") +
                          ", " +
                          moment(item.date).format("YYYY")}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {moment(item.date).format("h:mm A")}
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

export default PostComp;
