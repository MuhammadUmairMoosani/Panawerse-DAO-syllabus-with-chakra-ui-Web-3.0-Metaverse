import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import NextLink from "next/link"

export default function QuarterFive() {
    return (
        <>
            <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white', fontWeight: "bold" }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Quarter V
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <Box position="relative">
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontSize="20" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex">
                        CN-361: Developing Multi-Cloud Apps using CDK for Terraform
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text lineHeight="2" mb="2" ml="5">
                        Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.
                    </Text>
                    <Text lineHeight="2">
                        Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.
                    </Text>

                    <Heading fontSize="16" mb="2">Course Outline:</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">
                            CDK for Terraform
                            <NextLink passHref href="https://developer.hashicorp.com/terraform/cdktf" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>

                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}