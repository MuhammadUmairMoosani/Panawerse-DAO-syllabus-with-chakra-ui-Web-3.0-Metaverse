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
                        CN-351: Certified Kubernetes Application Developer (CKAD)
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text mb="2" ml="5">
                        Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
                    </Text>
                    <Text>
                        These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.
                    </Text>
                    <Text>
                        Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.
                    </Text>
                    <Heading fontSize="16" mb="2">Course Outline:</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">
                            Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
                            <NextLink passHref href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <ListItem fontWeight="bold" mt="2">
                            Cloud Development Kit for Kubernetes
                            <NextLink passHref href="https://cdk8s.io/" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}
