import { Box, Button, Heading, Stack } from "@chakra-ui/react"

export default function ChakraTest() {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading mb={4}>Test Chakra UI</Heading>
      <Stack  direction="row" align="center">
        <Button colorScheme="teal">Button</Button>
        <Button colorScheme="blue">Button</Button>
        <Button colorScheme="red">Button</Button>
      </Stack>
    </Box>
  )
}