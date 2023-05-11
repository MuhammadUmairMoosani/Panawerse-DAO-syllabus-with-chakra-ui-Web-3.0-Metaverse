import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import NextLink from "next/link"

export default function QuarterFour() {
    return (
        <>
            <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white', fontWeight: "bold" }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Quarter IV
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <Box position="relative">
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontSize="20" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex">
                        Bio-351: Python for Biologists
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text mb="2" ml="5">
                        This course will focus on learning the basics of the Python programming language through genomics examples.
                    </Text>
                    <Text mb="2" ml="5">
                        Textbook:
                        <NextLink passHref href="https://www.pythonforbiologists.org/" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                    </Text>
                </Box>
            </AccordionPanel >
        </>
    )
}
