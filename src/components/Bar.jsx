import React from "react";
import { Box, HStack, Image, Pressable, Text } from "native-base";
import logo from "../assets/near-logo.png";

function Bar({ user, login, logout }) {
  return (
    <Box w="100%" px={6} py={3} justifyContent="center">
      <HStack flex={1} alignItems="center" justifyContent="space-between">
        <Image source={logo} w={50} h={50} resizeMode="contain" />
        {user.id !== null ? (
          <HStack alignItems="center">
            <Text color="trueGray.50" fontSize="md" mr={2}>
              {user.username}
            </Text>
            <Pressable onPress={logout}>
              <Text color="trueGray.50" selectable={false}>
                Logout
              </Text>
            </Pressable>
          </HStack>
        ) : (
          <Pressable onPress={login}>
            <Text color="trueGray.50" selectable={false}>
              Login
            </Text>
          </Pressable>
        )}
      </HStack>
    </Box>
  );
}

export default Bar;
