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
  Input,
  Menu,
} from "native-base";
import ReactLoading from "react-loading";
import moment from "moment";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCaretLeft,
  AiFillCaretRight,
} from "react-icons/ai";

function EventComp({ user }) {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState("");
  const [menuFilter, setMenuFilter] = useState("Events");

  let dataHeaders = [
    "Event Name",
    "Description",
    "Course One",
    "Course Two",
    "Course Three",
    "Date",
    "Time",
    "Score",
    "# of Students Attended",
  ];

  useEffect(() => {
    fetch(`https://near-bbl.herokuapp.com/Attendance`)
      .then((response) =>
        response.json().then((data) => {
          setEvents(data);
          Toast.closeAll();
        })
      )
      .catch((error) => {
        console.log(error);
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
      case "Event Name+":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case "Event Name-":
        return list.sort((a, b) => b.name.localeCompare(a.name));
      case "Description+":
        return list.sort((a, b) => a.description.localeCompare(b.description));
      case "Description-":
        return list.sort((a, b) => b.description.localeCompare(a.description));
      case "Course One+":
        return list.sort((a, b) =>
          a.courseOneName
            ? a.courseOneName.localeCompare(
                b.courseOneName ? b.courseOneName : ""
              )
            : "".localeCompare(b.courseOneName ? b.courseOneName : "")
        );
      case "Course One-":
        return list.sort((a, b) =>
          b.courseOneName
            ? b.courseOneName.localeCompare(
                a.courseOneName ? a.courseOneName : ""
              )
            : "".localeCompare(a.courseOneName ? a.courseOneName : "")
        );
      case "Course Two+":
        return list.sort((a, b) =>
          a.courseTwoName
            ? a.courseTwoName.localeCompare(
                b.courseTwoName ? b.courseTwoName : ""
              )
            : "".localeCompare(b.courseTwoName ? b.courseTwoName : "")
        );
      case "Course Two-":
        return list.sort((a, b) =>
          b.courseTwoName
            ? b.courseTwoName.localeCompare(
                a.courseTwoName ? a.courseTwoName : ""
              )
            : "".localeCompare(a.courseTwoName ? a.courseTwoName : "")
        );
      case "Course Three+":
        return list.sort((a, b) =>
          a.courseThreeName
            ? a.courseThreeName.localeCompare(
                b.courseThreeName ? b.courseThreeName : ""
              )
            : "".localeCompare(b.courseThreeName ? b.courseThreeName : "")
        );
      case "Course Three-":
        return list.sort((a, b) =>
          b.courseThreeName
            ? b.courseThreeName.localeCompare(
                a.courseThreeName ? a.courseThreeName : ""
              )
            : "".localeCompare(a.courseThreeName ? a.courseThreeName : "")
        );
      case "Date+":
        return list.sort((a, b) => a.date.localeCompare(b.date));
      case "Date-":
        return list.sort((a, b) => b.date.localeCompare(a.date));
      case "Time+":
        return list.sort((a, b) => a.date.localeCompare(b.date));
      case "Time-":
        return list.sort((a, b) => b.date.localeCompare(a.date));
      case "Score+":
        return list.sort((a, b) => a.score - b.score);
      case "Score-":
        return list.sort((a, b) => b.score - a.score);
      case "# of Students Attended+":
        return list.sort((a, b) => a.roster.length - b.roster.length);
      case "# of Students Attended-":
        return list.sort((a, b) => b.roster.length - a.roster.length);
      case null:
        return list.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return list;
    }
  };

  const filter = (list) => {
    if (search === "") return list;
    // if (search.includes("student_name/?="))
    //   return list.filter((event) => {
    //     let name = search.split("student_name/?=")[1];
    //     let names = name.includes("&&") ? name.split("&&") : [name];
    //     let names2 = name.includes("||") ? name.split("||") : null;
    //     return !names2
    //       ? names.every((na) =>
    //           event.roster.some((student) =>
    //             student.userName.toLowerCase().includes(na.toLowerCase())
    //           )
    //         )
    //       : names.some((na) =>
    //           event.roster.some((student) =>
    //             student.userName.toLowerCase().includes(na.toLowerCase())
    //           )
    //         ) ||
    //           names2.some((na) =>
    //             event.roster.some((student) =>
    //               student.userName.toLowerCase().includes(na.toLowerCase())
    //             )
    //           );
    //   });
    if (menuFilter === "Attendees") {
      return list.filter((event) =>
        event.roster.some((student) =>
          student.userName.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      return list.filter(
        (event) =>
          event.name.toLowerCase().includes(search.toLowerCase()) ||
          event.description.toLowerCase().includes(search.toLowerCase()) ||
          event.courseOneName.toLowerCase().includes(search.toLowerCase()) ||
          (event.courseTwoName &&
            event.courseTwoName.toLowerCase().includes(search.toLowerCase())) ||
          (event.courseThreeName &&
            event.courseThreeName
              .toLowerCase()
              .includes(search.toLowerCase())) ||
          event.date.toLowerCase().includes(search.toLowerCase()) ||
          event.score.toString().includes(search)
      );
    }
  };

  return (
    <VStack flex={1} align="center" justify="center" space={2}>
      <HStack borderRadius={10} alignContent="center">
        <Menu
          w={150}
          mr={2}
          bg="trueGray.900"
          borderWidth={0}
          closeOnSelect={false}
          trigger={(triggerProps) => {
            return (
              <Pressable {...triggerProps}>
                {({ isHovered, isPressed }) => (
                  <HStack
                    borderLeftRadius={10}
                    bg={
                      isHovered || isPressed ? "trueGray.600" : "trueGray.700"
                    }
                    align="center"
                    justify="center"
                    px={5}
                    py={2}
                    space={2}
                  >
                    <Center>
                      <AiFillCaretDown size={15} color="white" />
                    </Center>
                    <Text
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                      textAlign="center"
                    >
                      {menuFilter}
                    </Text>
                  </HStack>
                )}
              </Pressable>
            );
          }}
        >
          <Menu.OptionGroup
            title="Search by"
            _title={{
              color: "trueGray.400",
              fontWeight: "bold",
            }}
            type="radio"
            defaultValue={menuFilter}
          >
            <Menu.ItemOption
              value="Events"
              backgroundColor="trueGray.800"
              _text={{
                color: "trueGray.50",
                fontWeight: "semibold",
              }}
              onPress={() => setMenuFilter("Events")}
            >
              <Text selectable={false} numberOfLines={1} overflow="hidden">
                All Events
              </Text>
            </Menu.ItemOption>
            <Menu.ItemOption
              value="Attendees"
              backgroundColor="trueGray.800"
              _text={{
                color: "trueGray.50",
                fontWeight: "semibold",
              }}
              onPress={() => setMenuFilter("Attendees")}
            >
              <Text selectable={false} numberOfLines={1} overflow="hidden">
                Attendees
              </Text>
            </Menu.ItemOption>
          </Menu.OptionGroup>
        </Menu>
        <Input
          flex={1}
          placeholder="Search"
          borderWidth={0}
          borderColor="trueGray.500"
          borderLeftRadius={0}
          borderRightRadius={10}
          bg="trueGray.900"
          _hover={{
            bg: "black",
          }}
          _focus={{
            bg: "black",
          }}
          align="center"
          justify="center"
          px={3}
          autoCorrect={true}
          autoCapitalize="words"
          autoFocus={true}
          onChangeText={(text) => {
            setSearch(text);
          }}
        />
      </HStack>
      {/* <HStack align="center" justify="center" space={2}>
        <Text
          fontSize="xs"
          fontWeight="semibold"
          px={5}
          pb={1}
          selectable={false}
          numberOfLines={1}
          overflow="hidden"
          color="trueGray.500"
        >
          {`Accepted Queries: 'student_name/?=name1&&name2&&...', 'student_name/?=name1||name2||...'`}
        </Text>
      </HStack> */}
      <Box bg="trueGray.700" borderRadius={10} alignContent="center" px={5}>
        <HStack align="center" justify="center" space={2}>
          {dataHeaders.map((header) => (
            <Pressable
              flex={1}
              accessibilityLabel={header}
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
            data={filter(getSort(events))}
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
                      {item.courseOneName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.courseTwoName}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.courseThreeName}
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
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.score}
                    </Text>
                    <Text
                      flex={1}
                      selectable={false}
                      numberOfLines={1}
                      overflow="hidden"
                    >
                      {item.roster.length}
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

export default EventComp;
