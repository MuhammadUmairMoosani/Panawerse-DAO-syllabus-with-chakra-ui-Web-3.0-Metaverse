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
                        MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text mb="2" ml="5">
                        The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
                    </Text>
                    <Heading fontSize="16" mb="2">Course Outline:</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Open Metaverse Web Development </ListItem>
                        <Text>Open Metaverse Learning Repo  <NextLink passHref href="https://github.com/panaverse/metaverse-web" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Blender 3D asset Creation for the Metaverse (Remote Zoom Class) </ListItem>
                        <Text>
                            Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.
                        </Text>
                        <Text>Blender 3.3+ Download  <NextLink passHref href="https://www.blender.org/download/" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                        </Text>
                        <Text>Blender 3.0 Beginner Tutorial   <NextLink passHref href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                        </Text>
                        <Text>Blender 3.0 Hotkey    <NextLink passHref href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                        </Text>
                        <Text>Blender Projects Textbook: Blender by Example 2nd Edition    <NextLink passHref href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>
                        </Text>
                        <Text>Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain
                            <NextLink passHref href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Best Hardware Performance for Blender Rendering
                            <NextLink passHref href="https://www.youtube.com/watch?v=H7T0SzdFHwg" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Assignment 1:</Text>
                        <Text>Build a 3D Donut using Blender 3 as shown in these video tutorials
                            <NextLink passHref href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Assignment 2:</Text>
                        <Text>Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition
                            <NextLink passHref href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Assignment 3:</Text>
                        <Text>Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                            <NextLink passHref href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Assignment 4:</Text>
                        <Text>Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                            <NextLink passHref href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Assignment 5:</Text>
                        <Text>Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition
                            <NextLink passHref href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text>Assignment 6:</Text>
                        <Text>Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials
                            <NextLink passHref href="https://www.youtube.com/watch?v=bpvh-9H8S1g" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}