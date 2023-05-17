import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react"
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
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex" textAlign="center" fontSize={[14, 20]} padding={[8, 0]} paddingTop={[8, 0]} paddingBottom={[5, 0]}>
                        AC-361: Embedded Programming using C and Rust
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text lineHeight="2" mb="2" ml="5">
                        This is an introductory course about using the C and Rust Programming Languages on &quot;Bare Metal&quot; embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We&apos;ll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.
                    </Text>


                    <Heading fontSize="16" mb="2">Course Outline:</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)
                            <NextLink passHref href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <Text lineHeight="2">What is the Fourth Industrial Revolution? </Text>
                        <Text lineHeight="2">What is IoT?</Text>
                        <Text lineHeight="2">Embedded Systems</Text>
                        <Text lineHeight="2">Hardware and Software for IoT</Text>
                        <Text lineHeight="2">Edge and Cloud Computing </Text>
                        <Text lineHeight="2">The future of IoT is AI </Text>
                        <Text lineHeight="2">Blockchain in the Internet of Things? </Text>
                        <Text lineHeight="2">IoT + AI + Blockchain: The Fourth Industrial Revolution has begun</Text>
                        <Text lineHeight="2">How will Matter change the IoT Infrastructure and address issues</Text>
                        <Text lineHeight="2">Metaverse and IoT</Text>

                        <Text lineHeight="2">Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3 </Text>
                        <Text lineHeight="2">Total Questions: 46, Total Time: 60 minutes </Text>

                        <ListItem fontWeight="bold" mt="2">The C Reference Book: The C programming language
                            Embedded Programming book: Internet of things with ESP8266

                            <NextLink passHref href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <ListItem fontWeight="bold" mt="2">Introduction to C Part 1 (Weeks 3B, 4, and 5)
                        </ListItem>

                        <Text lineHeight="2">C environment Setup for (Windows, Linux, and Mac OS systems) </Text>
                        <Text lineHeight="2">Chapters 1-2 of  “The C programming language” </Text>
                        <UnorderedList lineHeight="2">
                            <ListItem>Variable names types</ListItem>
                            <ListItem>Data types and sizes</ListItem>
                            <ListItem>Constants</ListItem>
                            <ListItem>Arithmetic operations</ListItem>
                            <ListItem>Logical and relational operators</ListItem>
                            <ListItem>Type conversions.</ListItem>
                            <ListItem>Bitwise operators</ListItem>
                            <ListItem>Conditional expressions.</ListItem>
                        </UnorderedList>
                        <Text lineHeight="2">Programming Assignments will also be given.</Text>
                        <ListItem fontWeight="bold" mt="2"> C Programming Part 2 (Weeks 6 and 7)</ListItem>
                        <Text lineHeight="2">Topics 3 and 4  of  “The C programming language”</Text>
                        <UnorderedList lineHeight="2">
                            <ListItem>Control flow statements (else if, loops, switch, break continue)</ListItem>
                            <ListItem>Function and Program structure(Returning and non-returning, scope rules, Recursion)</ListItem>
                        </UnorderedList>
                        <Text lineHeight="2">Programming Assignments will also be given.</Text>
                        <ListItem fontWeight="bold" mt="2">Introduction to Embedded systems Part 1 (Weeks 8)</ListItem>
                        <Text lineHeight="2">Basic Electronics and Introduction to microcontrollers </Text>
                        <Text lineHeight="2">Chapter 1 of  “Internet of things with ESP8266”</Text>
                        <UnorderedList lineHeight="2">
                            <ListItem>Arduino IDE installation and env setup for ESP8266</ListItem>
                            <ListItem>Burning your first code on ESP8266</ListItem>
                        </UnorderedList>
                        <Text lineHeight="2">Project-based Assignments will also be given. </Text>
                        <Text lineHeight="2">Mid-Term II: C Programming Quiz 1 in Week 9 </Text>
                        <Text lineHeight="2">Total Questions: 62, Total Time: 75 minutes  </Text>
                        <ListItem fontWeight="bold" mt="2">Introduction to Embedded systems Part 2 (Weeks 9-12) </ListItem>
                        <Text lineHeight="2">Chapters 2-5 of  “Internet of things with ESP8266” </Text>
                        <UnorderedList lineHeight="2">
                            <ListItem>Connecting your hardware to wifi.
                                <NextLink passHref href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem>Reading data from GPIOs.

                                <NextLink passHref href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem>Controlling LEDs.</ListItem>
                            <ListItem>Reading data from digital sensors.
                                <NextLink passHref href="https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>



                            <ListItem>Cloud data logging.
                                <NextLink passHref href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                                <NextLink passHref href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                                <NextLink passHref href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>


                            <ListItem>Displaying data on the cloud.
                                <NextLink passHref href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>


                            <ListItem>Controlling controller remotely.
                                <NextLink passHref href="https://www.instructables.com/Control-ESP8266-Over-the-Internet-from-Anywhere/" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>

                            <ListItem>Controlling a lamp anywhere in the world.

                            </ListItem>

                            <ListItem>Interacting with different web services.

                            </ListItem>






                        </UnorderedList>


                        <ListItem>Embedded Programming using Rust (Extra Weeks in the Course)
                            <NextLink passHref href="https://www.rust-lang.org/what/embedded" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                            <NextLink passHref href="https://crates.io/crates/esp8266" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>

                        <ListItem>Hardware Requirements:
                            <OrderedList lineHeight="2">
                                <ListItem>Esp8266 (Node MCU)</ListItem>
                                <ListItem>Jumper Wires</ListItem>
                                <ListItem>Bread Board</ListItem>
                                <ListItem>LEDs</ListItem>
                                <ListItem>Sensors: (Dht11, ultrasonic sensor, IR sensor)</ListItem>
                            </OrderedList>
                        </ListItem>


                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}