import React, { useState, useEffect } from "react";
import { Box, Center, Image } from "native-base";
import Bar from "./components/Bar";
import MainSection from "./components/MainSection";
import splash from "./assets/near-web-splash.png";
import subSplash from "./assets/near-web-sub-splash.png";
import ReactLoading from "react-loading";

function App() {
  const [user, setUser] = useState({
    id: null,
    name: "Joseph May",
    username: "jdmay2",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Box bg="trueGray.900" minHeight="100vh" alignContent="center">
      {!loading ? (
        <>
          <Bar
            user={user}
            login={() => setUser({ ...user, id: 1 })}
            logout={() => setUser({ ...user, id: null })}
          />
          <MainSection user={user} />
        </>
      ) : (
        <Center flex={1}>
          {/* <VStack align="center" justify="center"> */}
          <Image mt={100} source={splash} w="sm" h="sm" resizeMode="contain" />
          <Center pb={25} pt={50}>
            <ReactLoading type="spin" color="#fafafa" />
          </Center>
          <Image source={subSplash} w="2xs" h="2xs" resizeMode="contain" />
          {/* </VStack> */}
        </Center>
      )}
    </Box>
  );
}

export default App;
