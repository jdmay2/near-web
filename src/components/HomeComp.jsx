import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack, Center, Toast } from "native-base";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import ReactLoading from "react-loading";
import moment from "moment";
ChartJS.register(
  LineElement,
  Tooltip,
  annotationPlugin,
  CategoryScale,
  PointElement,
  LinearScale,
  Title
);

function HomeComp({ user }) {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

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
  }, [events]);

  const dataThisYear = events.filter((event) => {
    return moment(event.date).year() === moment().year();
  });

  const distinctData = () => {
    const dataByMonth = {
      Jan: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 0 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 0 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Feb: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 1 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 1 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Mar: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 2 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 2 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Apr: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 3 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 3 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      May: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 4 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 4 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Jun: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 5 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 5 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Jul: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 6 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 6 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Aug: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 7 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 7 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Sep: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 8 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 8 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Oct: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 9 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 9 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Nov: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 10 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 10 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Dec: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 11 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 11 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2)
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      min:
        dataThisYear
          .map((event) => {
            return event.roster.length;
          })
          .sort((a, b) => b - a)
          .pop() || 0,
      max:
        dataThisYear
          .map((event) => {
            return event.roster.length;
          })
          .sort((a, b) => a - b)
          .pop() || 0,
      avg: Math.round(
        dataThisYear
          .map((event) => {
            return event.roster.length;
          })
          .reduce((a, b) => a + b, 0) / dataThisYear.length || 0
      ),
    };
    return dataByMonth;
  };

  const distinctAIMSData = () => {
    const dataByMonth = {
      Jan: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 0 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 0 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Feb: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 1 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 1 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Mar: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 2 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 2 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Apr: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 3 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 3 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      May: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 4 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 4 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Jun: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 5 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 5 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Jul: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 6 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 6 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Aug: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 7 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 7 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Sep: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 8 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 8 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Oct: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 9 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 9 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Nov: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 10 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 10 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      Dec: {
        Start:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 11 &&
                moment(event.date).day() <
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
        End:
          dataThisYear
            .filter((event) => {
              return (
                moment(event.date).month() === 11 &&
                moment(event.date).day() >=
                  Math.floor(moment(event.date).daysInMonth() / 2) &&
                event.courseId === "bbl-cid-20000001"
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) || 0,
      },
      min: {
        Early:
          dataThisYear
            .filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() < 4
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .sort((a, b) => b - a)
            .pop() || 0,
        Late:
          dataThisYear
            .filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() > 6
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .sort((a, b) => b - a)
            .pop() || 0,
      },
      max: {
        Early:
          dataThisYear
            .filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() < 4
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .sort((a, b) => a - b)
            .pop() || 0,
        Late:
          dataThisYear
            .filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() > 6
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .sort((a, b) => a - b)
            .pop() || 0,
      },
      avg: {
        Early:
          dataThisYear
            .filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() < 4
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) /
            dataThisYear.filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() < 4
              );
            }).length || 0,
        Late:
          dataThisYear
            .filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() > 6
              );
            })
            .map((event) => {
              return event.roster.length;
            })
            .reduce((a, b) => a + b, 0) /
            dataThisYear.filter((event) => {
              return (
                event.courseId === "bbl-cid-20000001" &&
                moment(event.date).month() > 6
              );
            }).length || 0,
      },
    };
    return dataByMonth;
  };

  return (
    <VStack flex={1} align="center" justify="center" space={2}>
      <Box
        bg="trueGray.700"
        borderRadius={10}
        alignContent="center"
        px={5}
        py={2}
      >
        <HStack align="center" justify="center" space={2}>
          <Text flex={1} selectable={false} numberOfLines={1} overflow="hidden">
            Home
          </Text>
        </HStack>
      </Box>
      <Box
        bg="trueGray.700"
        borderRadius={10}
        alignContent="center"
        px={5}
        py={2}
      >
        <HStack align="center" justify="center" space={2}>
          <Text flex={1} selectable={false} numberOfLines={1} overflow="hidden">
            ****dashboard settings****
          </Text>
        </HStack>
      </Box>
      <HStack align="center" justify="center" mb={10}>
        <Center
          bg="trueGray.900"
          borderRadius={10}
          alignContent="center"
          px={5}
          py={2}
        >
          <Text flex={1} selectable={false} numberOfLines={1} overflow="hidden">
            {user.name}
          </Text>
        </Center>
      </HStack>
      {!loading ? (
        <VStack space={2}>
          <HStack align="center" justify="center" space={2}>
            <Center flex={1} bg="trueGray.900" borderRadius={10} px={5} py={2}>
              <Line
                datasetIdKey="id"
                options={{
                  plugins: {
                    autocolors: false,
                    tooltip: {
                      mode: "nearest",
                      intersect: true,
                      backgroundColor: "#fff",
                      titleColor: "#000",
                      bodyColor: "#000",
                      displayColors: true,
                    },
                    annotation: {
                      annotations: {
                        line1: {
                          type: "line",
                          yMin: distinctData().min,
                          yMax: distinctData().min,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                        line2: {
                          type: "line",
                          yMin: distinctData().max,
                          yMax: distinctData().max,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                        line3: {
                          type: "line",
                          yMin: distinctData().avg,
                          yMax: distinctData().avg,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                      },
                    },
                  },
                  spanGaps: true,
                  responsive: true,
                  layout: {
                    padding: {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.3,
                      borderColor: "#ffffff",
                    },
                    point: {
                      borderColor: "#ffffff",
                      backgroundColor: "#ffffff",
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                data={{
                  labels: [
                    "Jan",
                    "",
                    "Feb",
                    "",
                    "Mar",
                    "",
                    "Apr",
                    "",
                    "May",
                    "",
                    "Jun",
                    "",
                    "Jul",
                    "",
                    "Aug",
                    "",
                    "Sep",
                    "",
                    "Oct",
                    "",
                    "Nov",
                    "",
                    "Dec",
                    "",
                  ],
                  datasets: [
                    {
                      id: 1,
                      label: "Attendance",
                      fill: false,
                      data: [
                        distinctData().Jan.Start,
                        distinctData().Jan.End,
                        distinctData().Feb.Start,
                        distinctData().Feb.End,
                        distinctData().Mar.Start,
                        distinctData().Mar.End,
                        distinctData().Apr.Start,
                        distinctData().Apr.End,
                        distinctData().May.Start,
                        distinctData().May.End,
                        distinctData().Jun.Start,
                        distinctData().Jun.End,
                        distinctData().Jul.Start,
                        distinctData().Jul.End,
                        distinctData().Aug.Start,
                        distinctData().Aug.End,
                        distinctData().Sep.Start,
                        distinctData().Sep.End,
                        distinctData().Oct.Start,
                        distinctData().Oct.End,
                        distinctData().Nov.Start,
                        distinctData().Nov.End,
                        distinctData().Dec.Start,
                        distinctData().Dec.End,
                      ],
                    },
                  ],
                }}
              />
            </Center>
            <Center flex={1} bg="trueGray.900" borderRadius={10} px={5} py={2}>
              <Line
                datasetIdKey="id"
                options={{
                  plugins: {
                    autocolors: false,
                    tooltip: {
                      mode: "nearest",
                      intersect: true,
                      backgroundColor: "#fff",
                      titleColor: "#000",
                      bodyColor: "#000",
                      displayColors: true,
                    },
                    annotation: {
                      annotations: {
                        line1: {
                          type: "line",
                          yMin: distinctAIMSData().min.Early,
                          yMax: distinctAIMSData().min.Early,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                        line2: {
                          type: "line",
                          yMin: distinctAIMSData().max.Early,
                          yMax: distinctAIMSData().max.Early,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                        line3: {
                          type: "line",
                          yMin: distinctAIMSData().avg.Early,
                          yMax: distinctAIMSData().avg.Early,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                      },
                    },
                  },
                  spanGaps: true,
                  responsive: true,
                  layout: {
                    padding: {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.3,
                      borderColor: "#ffffff",
                    },
                    point: {
                      borderColor: "#ffffff",
                      backgroundColor: "#ffffff",
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                data={{
                  labels: ["Jan", "", "Feb", "", "Mar", "", "Apr", ""],
                  datasets: [
                    {
                      id: 1,
                      label: "AIMS Attendance Spring",
                      fill: false,
                      data: [
                        distinctAIMSData().Jan.Start,
                        distinctAIMSData().Jan.End,
                        distinctAIMSData().Feb.Start,
                        distinctAIMSData().Feb.End,
                        distinctAIMSData().Mar.Start,
                        distinctAIMSData().Mar.End,
                        distinctAIMSData().Apr.Start,
                        distinctAIMSData().Apr.End,
                      ],
                    },
                  ],
                }}
              />
            </Center>
            <Center flex={1} bg="trueGray.900" borderRadius={10} px={5} py={2}>
              <Line
                datasetIdKey="id"
                options={{
                  plugins: {
                    autocolors: false,
                    tooltip: {
                      mode: "nearest",
                      intersect: true,
                      backgroundColor: "#fff",
                      titleColor: "#000",
                      bodyColor: "#000",
                      displayColors: true,
                    },
                    annotation: {
                      annotations: {
                        line1: {
                          type: "line",
                          yMin: distinctAIMSData().min.Late,
                          yMax: distinctAIMSData().min.Late,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                        line2: {
                          type: "line",
                          yMin: distinctAIMSData().max.Late,
                          yMax: distinctAIMSData().max.Late,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                        line3: {
                          type: "line",
                          yMin: distinctAIMSData().avg.Late,
                          yMax: distinctAIMSData().avg.Late,
                          borderColor: "#747474",
                          borderWidth: 1,
                        },
                      },
                    },
                  },
                  spanGaps: true,
                  responsive: true,
                  layout: {
                    padding: {
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.3,
                      borderColor: "#ffffff",
                    },
                    point: {
                      borderColor: "#ffffff",
                      backgroundColor: "#ffffff",
                    },
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
                data={{
                  labels: [
                    "Aug",
                    "",
                    "Sep",
                    "",
                    "Oct",
                    "",
                    "Nov",
                    "",
                    "Dec",
                    "",
                  ],
                  datasets: [
                    {
                      id: 1,
                      label: "AIMS Attendance Fall",
                      fill: false,
                      data: [
                        distinctAIMSData().Aug.Start,
                        distinctAIMSData().Aug.End,
                        distinctAIMSData().Sep.Start,
                        distinctAIMSData().Sep.End,
                        distinctAIMSData().Oct.Start,
                        distinctAIMSData().Oct.End,
                        distinctAIMSData().Nov.Start,
                        distinctAIMSData().Nov.End,
                        distinctAIMSData().Dec.Start,
                        distinctAIMSData().Dec.End,
                      ],
                    },
                  ],
                }}
              />
            </Center>
          </HStack>
          <HStack align="center" justify="center" space={2} mb={2}>
            <Center flex={1} bg="trueGray.900" borderRadius={10} px={5} py={2}>
              <Text selectable={false} numberOfLines={1} overflow="hidden">
                {`${moment().year()} Overall Attendance`}
              </Text>
            </Center>
            <Center flex={1} bg="trueGray.900" borderRadius={10} px={5} py={2}>
              <Text selectable={false} numberOfLines={1} overflow="hidden">
                {`AIMS Attendance Spring ${moment().year()}`}
              </Text>
            </Center>
            <Center flex={1} bg="trueGray.900" borderRadius={10} px={5} py={2}>
              <Text selectable={false} numberOfLines={1} overflow="hidden">
                {`AIMS Attendance Fall ${moment().year()}`}
              </Text>
            </Center>
          </HStack>
          <HStack align="center" justify="center" space={2}>
            <Center
              flex={1}
              bg="trueGray.900"
              borderRadius={10}
              px={5}
              py={2}
            ></Center>
            <Center
              flex={1}
              bg="trueGray.900"
              borderRadius={10}
              px={5}
              py={2}
            ></Center>
          </HStack>
        </VStack>
      ) : (
        <Center flex={1}>
          <ReactLoading type="spin" color="#fafafa" />
        </Center>
      )}
    </VStack>
  );
}

export default HomeComp;
