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
                        AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text lineHeight="2" mb="2" ml="5">
                        Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning&apos;s potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.
                    </Text>

                    <Text lineHeight="2" mb="2" ml="5">
                        We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.
                    </Text>
                    <Text lineHeight="2" mb="2" ml="5">
                        We&apos;ll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We&apos;ll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.
                    </Text>
                    <Heading fontSize="16" mb="2">Course Outline:</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Introduction to Machine Learning, Data Science, and AI</ListItem>
                        <Text lineHeight="2">AI for Everyone <NextLink passHref href="https://www.coursera.org/learn/ai-for-everyone" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" /></NextLink></Text>
                        <Text lineHeight="2">AI for Everyone Quiz in Week 3 </Text>
                        <Text lineHeight="2">Total Questions: 60, Total Time: 75 minutes </Text>
                        <Text lineHeight="2">Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
                            We will cover GPT-4, ChatGPT, etc. and Next.js 13
                            <NextLink passHref href="https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Python Crash Course  for TypeScript Developers</ListItem>
                        <Text lineHeight="2">Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition
                            <NextLink passHref href="https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}
