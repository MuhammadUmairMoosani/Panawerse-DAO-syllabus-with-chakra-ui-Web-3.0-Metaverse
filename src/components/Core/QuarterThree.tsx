import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import NextLink from "next/link"

export default function QuarterThree() {
    return (
        <>
            <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white', fontWeight: "bold" }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Quarter III
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <Box position="relative">
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex" textAlign="center" fontSize={[14, 20]} padding={[0, 0]} paddingTop={[8, 0]} paddingBottom={[5, 0]}>
                        $-301: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Earn While You Learn Projects</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Build Full-Stack Next.js 13 Jamstack Templates</ListItem>
                        <Text lineHeight="2">You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. </Text>

                        <Text lineHeight="2">The Template Standard
                            <NextLink passHref href="https://github.com/panaverse/panaverse-template-standard" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">
                            Build APIs and Products
                        </ListItem>
                        <Text lineHeight="2">
                            You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                        </Text>
                    </OrderedList>
                    <Heading fontSize="16" mb="2" mt="2" >W3-301: Developing Web 3.0 DApps using Solidity, Ethers.js, Hardhat, and Account Abstraction</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Smart Contract Development in Solidity </ListItem>
                        <Text lineHeight="2">Solidity Programming Essentials - Second Edition By Ritesh Modi
                            <NextLink passHref href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Solidity Learning Repo
                            <NextLink passHref href="https://github.com/panaverse/learn-nextjs/tree/main/stepxx_web3" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Dapp Development using Ethers.js and Next.js 13</ListItem>
                        <Text lineHeight="2">Dapp Learning Repo
                            <NextLink passHref href="https://github.com/panaverse/learn-nextjs/tree/main/stepxx_web3" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                    <Heading fontSize="16" mb="2" mt="2" >AI-301: Generative AI Application Development using ChatGPT APIs/Plugins and Amazon’s Bedrock</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Next.js 13 with ChatGPT</ListItem>
                        <Text lineHeight="2">Build a Next JS 13.3 App with Auto ChatGPT Content
                            <NextLink passHref href="https://www.youtube.com/watch?v=pfHjxyeCHRs" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">ChatGPT Bot with NEXT.JS 13 and OpenAI API in 10 minutes
                            <NextLink passHref href="https://www.youtube.com/watch?v=I14_HrJktIs" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Amazon Bedrock</ListItem>
                        <Text lineHeight="2">The easiest way to build and scale generative AI applications with foundation models (FMs)
                            <NextLink passHref href="https://aws.amazon.com/bedrock/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Microsoft’s Semantic Kernel SDK</ListItem>
                        <Text lineHeight="2">A bridge between large language models and your code
                            <NextLink passHref href="https://aws.amazon.com/bedrock/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 1
                            <NextLink passHref href="https://github.com/microsoft/semantic-kernel" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 2
                            <NextLink passHref href="https://learn.microsoft.com/en-us/semantic-kernel/whatissk" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 3
                            <NextLink passHref href="https://www.linkedin.com/learning/introducing-semantic-kernel-building-ai-based-apps/introducing-semantic-kernel" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 4
                            <NextLink passHref href="https://learn.microsoft.com/en-gb/semantic-kernel/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}