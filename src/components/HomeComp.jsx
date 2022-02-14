import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Center, Toast } from "native-base";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import ReactLoading from "react-loading";
import useWindowDimensions from "./useWindowDimensions";
import moment from "moment";
ChartJS.register(
  LineElement,
  BarElement,
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
  const { width } = useWindowDimensions();

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

  const recentAIMSData = () => {
    const recentEventOne = dataThisYear
      .filter(
        (event) =>
          moment(event.date).isBefore(moment()) &&
          event.courseId === "bbl-cid-20000001"
      )
      .sort((a, b) => {
        return moment(b.date) - moment(a.date);
      })
      .map((event) => {
        return {
          name: event.name || "",
          date: event.date ? moment(event.date).format("MMM Do") : "",
          attendance: event.roster
            ? event.roster.length === 0
              ? 1
              : event.roster.length
            : 1,
        };
      })[0];
    const recentEventTwo = dataThisYear
      .filter(
        (event) =>
          moment(event.date).isBefore(moment()) &&
          event.courseId === "bbl-cid-20000001"
      )
      .sort((a, b) => {
        return moment(b.date) - moment(a.date);
      })
      .map((event) => {
        return {
          name: event.name || "",
          date: event.date ? moment(event.date).format("MMM Do") : "",
          attendance: event.roster
            ? event.roster.length === 0
              ? 1
              : event.roster.length
            : 1,
        };
      })[1];
    const recentData = {
      recentEventOne: recentEventOne || {
        name: "",
        date: "",
        attendance: 0,
      },
      recentEventTwo: recentEventTwo || {
        name: "",
        date: "",
        attendance: 0,
      },
    };
    return recentData;
  };

  const topAIMSData = () => {
    // get combined list of attendees for all events
    const allAttendeesThisYear = dataThisYear
      .filter((event) => {
        return event.courseId === "bbl-cid-20000001";
      })
      .map((event) => {
        return event.roster;
      })
      .reduce((a, b) => {
        return a.concat(b);
      }, []);

    const allAttendees = events
      .filter((event) => {
        return event.courseId === "bbl-cid-20000001";
      })
      .map((event) => {
        return event.roster;
      })
      .reduce((a, b) => {
        return a.concat(b);
      }, []);

    const uniqueAttendees = [...new Set(allAttendees.map((a) => a.userName))];

    // get unique list of attendees
    const uniqueAttendeesThisYear = [
      ...new Set(allAttendeesThisYear.map((a) => a.userName)),
    ];

    const topAttendeesThisYear = uniqueAttendeesThisYear
      .map((attendee) => {
        return {
          name: attendee,
          count: allAttendeesThisYear.filter(
            (attendeeObj) => attendeeObj.userName === attendee
          ).length,
          globalCount: allAttendees.filter(
            (attendeeObj) => attendeeObj.userName === attendee
          ).length,
        };
      })
      .sort((a, b) => {
        return b.count - a.count;
      })
      .slice(0, 10);

    const topAttendees = uniqueAttendees
      .map((attendee) => {
        return {
          name: attendee,
          count: allAttendees.filter(
            (attendeeObj) => attendeeObj.userName === attendee
          ).length,
        };
      })
      .sort((a, b) => {
        return b.count - a.count;
      })
      .slice(0, 10);

    return {
      top: {
        local: topAttendeesThisYear,
        global: topAttendees,
      },
      numberOne: {
        local: topAttendeesThisYear[0] || {
          name: "",
          count: 0,
          globalCount: 0,
        },
        global: topAttendees[0] || {
          name: "",
          count: 0,
        },
      },
    };
  };

  const getIncrease = () => {
    return Math.round(
      ((recentAIMSData().recentEventOne.attendance -
        recentAIMSData().recentEventTwo.attendance) /
        recentAIMSData().recentEventOne.attendance) *
        100
    )
      ? Math.round(
          ((recentAIMSData().recentEventOne.attendance -
            recentAIMSData().recentEventTwo.attendance) /
            recentAIMSData().recentEventOne.attendance) *
            100
        )
      : 0;
  };

  return (
    <VStack flex={1} align="center" justify="center" space={2}>
      {!loading ? (
        <VStack space={2}>
          <Box flexDir="row" align="center" justify="center" flexWrap="wrap">
            <VStack space={2} flex={1} minW={300} mb={2}>
              <Center
                flex={1}
                bg="trueGray.900"
                borderRadius={10}
                px={5}
                py={2}
              >
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
              <Center bg="trueGray.900" borderRadius={10} px={5} py={2}>
                <Text selectable={false} numberOfLines={1} overflow="hidden">
                  {`${moment().year()} Overall Attendance`}
                </Text>
              </Center>
            </VStack>
            <VStack
              space={2}
              flex={1}
              minW={300}
              mb={2}
              ml={width > 650 ? 2 : 0}
            >
              <Center
                flex={1}
                bg="trueGray.900"
                borderRadius={10}
                px={5}
                py={2}
              >
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
              <Center bg="trueGray.900" borderRadius={10} px={5} py={2}>
                <Text selectable={false} numberOfLines={1} overflow="hidden">
                  {`AIMS Attendance Spring ${moment().year()}`}
                </Text>
              </Center>
            </VStack>
            <VStack
              space={2}
              flex={1}
              minW={300}
              mb={2}
              ml={width > 950 ? 2 : 0}
            >
              <Center
                flex={1}
                bg="trueGray.900"
                borderRadius={10}
                px={5}
                py={2}
              >
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
              <Center bg="trueGray.900" borderRadius={10} px={5} py={2}>
                <Text selectable={false} numberOfLines={1} overflow="hidden">
                  {`AIMS Attendance Fall ${moment().year()}`}
                </Text>
              </Center>
            </VStack>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            flexDir="row"
            flexWrap="wrap"
            mb={2}
          >
            <Box
              flex={1}
              bg="trueGray.900"
              borderRadius={10}
              px={5}
              pb={5}
              pt={3}
              alignItems="center"
              minW={400}
              mb={width < 750 ? 2 : 0}
            >
              <Text
                selectable={false}
                fontSize={
                  width > 600
                    ? "5xl"
                    : width > 400
                    ? "4xl"
                    : width > 300
                    ? "3xl"
                    : width > 200
                    ? "2xl"
                    : "xl"
                }
                fontWeight="bold"
                numberOfLines={1}
                overflow="hidden"
              >
                {recentAIMSData().recentEventOne.attendance} Students
              </Text>
              <Box flex={1} alignItems="center" justifyContent="center">
                <Text
                  selectable={false}
                  fontSize={
                    width > 600
                      ? "lg"
                      : width > 400
                      ? "md"
                      : width > 300
                      ? "sm"
                      : width > 200
                      ? "xs"
                      : "2xs"
                  }
                  numberOfLines={1}
                  overflow="hidden"
                >
                  attended the last AIMS meeting
                </Text>
                <Text
                  selectable={false}
                  fontSize={
                    width > 600
                      ? "lg"
                      : width > 400
                      ? "md"
                      : width > 300
                      ? "sm"
                      : width > 200
                      ? "xs"
                      : "2xs"
                  }
                  numberOfLines={1}
                  overflow="hidden"
                >
                  (ref: {recentAIMSData().recentEventOne.name})
                </Text>
              </Box>
            </Box>
            <Box
              minW={400}
              flex={1}
              bg={
                getIncrease() > 0
                  ? "green.600"
                  : getIncrease() === 0
                  ? "trueGray.900"
                  : "red.600"
              }
              borderRadius={10}
              px={5}
              pb={5}
              pt={3}
              alignItems="center"
              ml={width > 750 ? 2 : 0}
            >
              <Text
                selectable={false}
                fontSize={
                  width > 600
                    ? "5xl"
                    : width > 400
                    ? "4xl"
                    : width > 300
                    ? "3xl"
                    : width > 200
                    ? "2xl"
                    : "xl"
                }
                fontWeight="bold"
                numberOfLines={1}
                overflow="hidden"
              >
                {getIncrease()}%
              </Text>
              <Box flex={1} alignItems="center" justifyContent="center">
                <Text
                  selectable={false}
                  fontSize={
                    width > 600
                      ? "lg"
                      : width > 400
                      ? "md"
                      : width > 300
                      ? "sm"
                      : width > 200
                      ? "xs"
                      : "2xs"
                  }
                  numberOfLines={1}
                  overflow="hidden"
                >
                  increase in attendance from the previous meeting
                </Text>
                <Text
                  selectable={false}
                  fontSize={
                    width > 600
                      ? "lg"
                      : width > 400
                      ? "md"
                      : width > 300
                      ? "sm"
                      : width > 200
                      ? "xs"
                      : "2xs"
                  }
                  numberOfLines={1}
                  overflow="hidden"
                >
                  (ref: {recentAIMSData().recentEventTwo.name || "No Data"})
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            flexDir="row"
            flexWrap="wrap"
          >
            <VStack flex={1} space={2} minW={400} mb={width < 750 ? 2 : 0}>
              <Center
                flex={1}
                bg="trueGray.50"
                borderRadius={10}
                color="trueGray.900"
                px={5}
                py={2}
              >
                <Text
                  fontSize={
                    width > 600
                      ? "5xl"
                      : width > 400
                      ? "4xl"
                      : width > 300
                      ? "3xl"
                      : width > 200
                      ? "2xl"
                      : "xl"
                  }
                  color="inherit"
                  fontWeight="bold"
                  selectable={false}
                  numberOfLines={1}
                  overflow="hidden"
                >
                  {topAIMSData().numberOne.local.name}
                </Text>
                <Text
                  color="inherit"
                  selectable={false}
                  textOverflow="wrap"
                  fontSize="lg"
                  textAlign="center"
                >
                  Has attended the most AIMS meetings so far in{" "}
                  {moment().year()}! Having attended{" "}
                  {
                    <Text color="inherit" fontSize="xl" fontWeight="bold">
                      {topAIMSData().numberOne.local.count}
                    </Text>
                  }{" "}
                  meetings in {moment().year()} and{" "}
                  {
                    <Text color="inherit" fontSize="xl" fontWeight="bold">
                      {topAIMSData().numberOne.local.globalCount}
                    </Text>
                  }{" "}
                  meetings in total.
                </Text>
              </Center>
              <Center
                flex={1}
                bg="trueGray.50"
                color="trueGray.900"
                borderRadius={10}
                px={5}
                py={2}
              >
                <Text
                  color="inherit"
                  fontSize={
                    width > 600
                      ? "2xl"
                      : width > 400
                      ? "xl"
                      : width > 300
                      ? "lg"
                      : width > 200
                      ? "md"
                      : "sm"
                  }
                  selectable={false}
                  numberOfLines={1}
                  overflow="hidden"
                  fontWeight="bold"
                >
                  Top 10 AIMS Attendees in {moment().year()}
                </Text>
                <Box flex={1} alignItems="flex-start" justifyContent="center">
                  {topAIMSData().top.local.map((l, index) => {
                    return (
                      <Text
                        color="inherit"
                        selectable={false}
                        fontSize={
                          width > 600
                            ? "lg"
                            : width > 400
                            ? "md"
                            : width > 300
                            ? "sm"
                            : width > 200
                            ? "xs"
                            : "2xs"
                        }
                        numberOfLines={1}
                        overflow="hidden"
                      >
                        {index + 1}. {l.name}
                      </Text>
                    );
                  })}
                </Box>
              </Center>
            </VStack>
            <VStack flex={1} space={2} minW={400} ml={width > 750 ? 2 : 0}>
              <Center
                flex={1}
                bg="trueGray.50"
                borderRadius={10}
                color="trueGray.900"
                px={5}
                py={2}
              >
                <Text
                  fontSize={
                    width > 600
                      ? "5xl"
                      : width > 400
                      ? "4xl"
                      : width > 300
                      ? "3xl"
                      : width > 200
                      ? "2xl"
                      : "xl"
                  }
                  color="inherit"
                  fontWeight="bold"
                  selectable={false}
                  numberOfLines={1}
                  overflow="hidden"
                >
                  {topAIMSData().numberOne.global.name}
                </Text>
                <Text
                  color="inherit"
                  selectable={false}
                  textOverflow="wrap"
                  fontSize="lg"
                  textAlign="center"
                >
                  Has attended the most AIMS meetings in the world! Having
                  attended{" "}
                  {
                    <Text color="inherit" fontSize="xl" fontWeight="bold">
                      {topAIMSData().numberOne.global.count}
                    </Text>
                  }{" "}
                  meetings in total.
                </Text>
              </Center>
              <Center
                flex={1}
                bg="trueGray.50"
                color="trueGray.900"
                borderRadius={10}
                px={5}
                py={2}
              >
                <Text
                  color="inherit"
                  fontSize={
                    width > 600
                      ? "2xl"
                      : width > 400
                      ? "xl"
                      : width > 300
                      ? "lg"
                      : width > 200
                      ? "md"
                      : "sm"
                  }
                  selectable={false}
                  numberOfLines={1}
                  overflow="hidden"
                  fontWeight="bold"
                >
                  Top 10 AIMS Attendees in the world!
                </Text>
                <Box flex={1} alignItems="flex-start" justifyContent="center">
                  {topAIMSData().top.global.map((g, index) => {
                    return (
                      <Text
                        color="inherit"
                        selectable={false}
                        fontSize={
                          width > 600
                            ? "lg"
                            : width > 400
                            ? "md"
                            : width > 300
                            ? "sm"
                            : width > 200
                            ? "xs"
                            : "2xs"
                        }
                        numberOfLines={1}
                        overflow="hidden"
                      >
                        {index + 1}. {g.name}
                      </Text>
                    );
                  })}
                </Box>
              </Center>
            </VStack>
          </Box>
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
