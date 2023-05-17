import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import NextLink from "next/link"

export default function QuarterFive() {
    return (
        <>
            <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white', fontWeight: "bold" }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Quarter VI
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <Box position="relative">
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex" textAlign="center" fontSize={[14, 20]} padding={[0, 0]} paddingTop={[8, 0]} paddingBottom={[5, 0]}>
                        GAI-371: Generative AI in Biology and Healthcare
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">

                    <Text mb="2" ml="5">
                        We will focus on Generative AI:
                    </Text>





                    <Text mb="2" ml="5">
                        Generative AI in Biology and Healthcare:
                        <NextLink passHref href="https://youtu.be/NHszJiL-9pM" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                    </Text>


                    <Text mb="2" ml="5">
                        Accelerate AI-Powered Drug Discovery With NVIDIA BioNeMo
                        <NextLink passHref href="https://www.youtube.com/watch?v=GNL1z7hnj4w" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                    </Text>


                    <Text mb="2" ml="5">
                        Generative AI is dreaming up new proteins
                        <NextLink passHref href="https://cen.acs.org/physical-chemistry/protein-folding/Generative-AI-dreaming-new-proteins/101/i12" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                    </Text>



                </Box>
            </AccordionPanel >
        </>
    )
}