import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import NextLink from "next/link"


export default function QuarterOne() {
    return (
        <>
            <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white', fontWeight: "bold" }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Quarter I
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <Box position="relative" >
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontSize="20" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex">
                        CS-101: Object-Oriented Programming using TypeScript
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text mb="2" lineHeight="2" ml="5">
                        We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
                    </Text>
                    <Heading fontSize="16" mb="2">Course Outline: </Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">HTML and CSS (Homework)</ListItem>
                        <Text lineHeight="2">Learn HTML by Hira Khan (Watch Recorded Videos) <NextLink passHref href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" /></NextLink></Text>
                        <Text lineHeight="2">Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                            <NextLink passHref href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Web 3.0 and Metaverse Theory</ListItem>
                        <Text lineHeight="2">Introduction to Panaverse DAO
                            <NextLink passHref href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Web 3.0 User Guide
                            <NextLink passHref href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2" color="green.400">Assignment</Text>
                        <Text lineHeight="2">Complete Web 3 Assignments included in the Web 3 User Guide</Text>
                        <Text lineHeight="2">Virtual and Augmented  Metaverse User Guide
                            <NextLink passHref href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">3D E-commerce</Text>
                        <Text lineHeight="2">First, in our Web 3 and Metaverse program, we are learning to develop Web 1, and Web 2 websites and apps. Later we will learn to develop Web 3 and 3D Commerce templates and experiences. </Text>
                        <Text lineHeight="2">But we have to start thinking right now. Let's understand what one virtual store builder company is doing the company name is Emperia.
                            <NextLink passHref href="https://emperiavr.com/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">“Using technology, Emperia aims to make virtual worlds into the future of e-commerce, expanding the reach to new and future online shoppers, increasing brand loyalty, and creating a completely new shopping experience.”</Text>
                        <Text lineHeight="2">Emporia just got funded
                            <NextLink passHref href="https://www.retail-insight-network.com/news/emperia-10m-growth/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Checkout the Virtual Store Demos
                            <NextLink passHref href="https://emperiavr.com/projects/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">ChatGPT Prompt Engineering for Developers
                            <NextLink passHref href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <ListItem fontWeight="bold" mt="2">Fundamentals of Typescript</ListItem>
                        <Text lineHeight="2">TypeScript Presentation
                            <NextLink passHref href="https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Getting Started Exercises with TypeScript and Node.js
                            <NextLink passHref href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2" color="green.400">Quiz</Text>
                        <Text lineHeight="2">Fundamentals of JavaScript and Node.js Quiz</Text>
                        <Text lineHeight="2" fontWeight="bold" mt="2" mb="2">Topics Covered in the Quiz:</Text>
                        <OrderedList type="A" lineHeight="2">
                            <ListItem  >Background of JavaScript and How to use JavaScript in Browser</ListItem>
                            <ListItem>Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</ListItem>
                            <ListItem>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:
                                <NextLink passHref href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem>
                                <Text lineHeight="2">How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:
                                    <NextLink passHref href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing" target="_blank">
                                        <ExternalLinkIcon mx='2px' color="blue.500" />
                                    </NextLink>
                                </Text>
                                Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
                            </ListItem>
                            <ListItem>
                                Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
                            </ListItem>
                            <ListItem>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)</ListItem>
                            <ListItem>
                                Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)
                            </ListItem>
                            <ListItem>
                                Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
                            </ListItem>
                            <ListItem>
                                Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
                            </ListItem>
                            <ListItem>
                                JavaScript promises, mastering the asynchronous
                                <NextLink passHref href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem>
                                New JavaScript Features in ECMAScript 2022 and 2021
                                <NextLink passHref href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                        </OrderedList>
                        <ListItem fontWeight="bold" mt="2">Object-Oriented Programming with TypeScript</ListItem>
                        <Text lineHeight="2">Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
                            <NextLink passHref href="https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Learning Repository
                            <NextLink passHref href="https://github.com/panaverse/learn-typescript" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">In Class Companion projects and articles for Learning TypeScript
                            <NextLink passHref href="https://www.learningtypescript.com/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Homework Project
                            <NextLink passHref href="https://github.com/panaverse/typescript-node-projects" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Fundamentals of TypeScript Quiz</Text>
                        <Text lineHeight="2">TypeScript Professional Proficiency Quiz</Text>
                        <ListItem fontWeight="bold" mt="2">TypeScript for React</ListItem>
                        <Text lineHeight="2">Minimal TypeScript Crash Course For React
                            With Interactive Code Exercises
                            <NextLink passHref href="https://profy.dev/article/react-typescript" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2" color="green.400">Assignment and Quiz</Text>
                        <Text lineHeight="2">Quarter Break Assignments and Quizzes </Text>
                        <Text lineHeight="2" fontWeight="bold">During the Quarter Break, we do the following Assignments: </Text>
                        <OrderedList ml="8">
                            <ListItem fontWeight="bold">Link 1
                                <NextLink passHref href="https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem fontWeight="bold">Link 2
                                <NextLink passHref href="https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem fontWeight="bold">Link 3
                                <NextLink passHref href="https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <ListItem fontWeight="bold" mt="2">Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document:
                                <NextLink passHref href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <Text lineHeight="2">The best-developed Website will be hosted on
                                <NextLink passHref href="http://www.panaverse.co" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                                domain.</Text>
                            <ListItem fontWeight="bold" mt="2">Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:
                                <NextLink passHref href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                            </ListItem>
                            <Text lineHeight="2">The best-developed Website will be hosted on
                                <NextLink passHref href="http://www.piaic.org" target="_blank">
                                    <ExternalLinkIcon mx='2px' color="blue.500" />
                                </NextLink>
                                domain.</Text>
                            <Text lineHeight="2">After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</Text>
                        </OrderedList>
                        <Text lineHeight="2" color="green.400">Quiz</Text>

                    </OrderedList>
                    <OrderedList>
                        <ListItem fontWeight="bold" mt="2">Fundamentals of Version Control with Git Quiz</ListItem>
                        <Text lineHeight="2" >Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)
                            <NextLink passHref href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2" >Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther</Text>
                        <Text lineHeight="2" fontWeight="bold">We will also cover these readings:</Text>
                        <Text lineHeight="2">Link 1
                            <NextLink passHref href="https://help.github.com/articles/markdown-basics/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 2
                            <NextLink passHref href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 3
                            <NextLink passHref href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 4
                            <NextLink passHref href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Link 5
                            <NextLink passHref href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">For practice:
                            <NextLink passHref href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Homework:
                            <NextLink passHref href="https://www.datacamp.com/courses/introduction-to-git-for-data-science" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Git Cheatsheet
                            <NextLink passHref href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2" color="green.400">Quiz</Text>
                        <Text lineHeight="2">Git Quiz</Text>
                        <Text lineHeight="2">Total Questions: 60, Duration: 75 minutes</Text>
                        <ListItem fontWeight="bold" mt="2">TypeScript Proficiency Quiz</ListItem>
                        <Text lineHeight="2">Total Questions: 63, Duration: 120 minutes
                        </Text>
                        <Text lineHeight="2">Study Material:
                            <NextLink passHref href="https://github.com/panaverse/learn-typescript" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}
