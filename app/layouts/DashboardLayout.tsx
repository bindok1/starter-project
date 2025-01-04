import {
    Box,
    Flex,
    VStack,
    Text,
    Heading,
  } from "@chakra-ui/react";
  import { Link } from "@remix-run/react";
  import type { ReactNode } from "react";
  
  interface DashboardLayoutProps {
    children: ReactNode;
  }
  
  export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
      <Flex minH="100vh">
        {/* Sidebar Tetap */}
        <Box 
          w="240px" 
          bg="white" 
          borderRight="1px" 
          borderColor="gray.200"
          position="fixed"
          h="100vh"
        >
          <VStack align="stretch" p={4}>
            <Heading size="md" mb={4}>Dashboard</Heading>
            <Link to="/dashboard">
              <Text p={2} _hover={{ bg: "gray.100" }} borderRadius="md">
                Dashboard
              </Text>
            </Link>
            <Link to="/profile">
              <Text p={2} _hover={{ bg: "gray.100" }} borderRadius="md">
                Profile
              </Text>
            </Link>
            <Link to="/settings">
              <Text p={2} _hover={{ bg: "gray.100" }} borderRadius="md">
                Settings
              </Text>
            </Link>
          </VStack>
        </Box>
  
        {/* Main Content */}
        <Box ml="240px" p={8} flex={1} bg="gray.50">
          {children}
        </Box>
      </Flex>
    );
  }