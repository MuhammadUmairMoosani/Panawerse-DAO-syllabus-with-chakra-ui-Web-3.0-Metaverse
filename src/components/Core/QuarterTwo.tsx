import { ExternalLinkIcon } from "@chakra-ui/icons"
import { AccordionButton, AccordionIcon, AccordionPanel, Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import NextLink from "next/link"

export default function QuarterTwo() {
    return (
        <>
            <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white', fontWeight: "bold" }}>
                    <Box as="span" flex='1' textAlign='left'>
                        Quarter II
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel>
                <Box position="relative"  >
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex" textAlign="center" fontSize={[14, 20]} padding={[0, 0]} paddingTop={[8, 0]} paddingBottom={[5, 0]} >
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and <br /> APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16" >13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text lineHeight="2" mb="2" ml="5">
                        The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                    </Text>
                    <Heading fontSize="16" mb="2">Course Outline:</Heading>
                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Next.js 13 Web Development</ListItem>
                        <Text lineHeight="2">Next 13 Official Documentation <NextLink passHref href="https://beta.nextjs.org/docs" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" /></NextLink></Text>
                        <Text lineHeight="2">Latest Learn React Official Website
                            <NextLink passHref href="https://beta.reactjs.org/learn" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Learn Next.js 13 Learning Repo
                            <NextLink passHref href="https://github.com/panaverse/learn-nextjs" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2" color="green.400">Assignment</Text>
                        <Text lineHeight="2" fontWeight="bold" mt="2">First Project for Quarter 2 Students: Build a Resume Website and Deploy it on a Custom Domain</Text>
                        <Text lineHeight="2" mt="2">All Quarter 2 students are required to Build their resume/CV website using Next.js 13 and Tailwind CSS</Text>
                        <Text lineHeight="2">Watch this video to learn
                            <NextLink passHref href="https://morioh.com/p/45a246d927c9" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Once you have built your resume website, buy a domain if you can afford it and host your resume website on a custom domain
                            <NextLink passHref href="https://www.godaddy.com/en-pk" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Add your custom domain to your Vercel Project
                            <NextLink passHref href="https://vercel.com/docs/concepts/projects/domains" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                            <NextLink passHref href="https://vercel.com/docs/concepts/projects/domains/add-a-domain" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">However, if you cannot afford it find a way to get it for free
                            <NextLink passHref href="https://www.forbes.com/advisor/business/free-domain-name/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">You will get your website graded by a faculty member in class and receive a Report Card which you will always bring to class.
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Next.js 13 using Chakra UI (Remote Zoom Class)</ListItem>
                        <Text lineHeight="2">CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items
                            <NextLink passHref href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Chakra UI Docs
                            <NextLink passHref href="https://chakra-ui.com/getting-started" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">
                            UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)
                        </ListItem>
                        <Text lineHeight="2">
                            Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano
                            <NextLink passHref href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">
                            Figma Design Kit for TailwindCSS
                            <NextLink passHref href="https://www.figma.com/community/file/768809027799962739" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">
                            Chakra UI Figma Kit
                            <NextLink passHref href="https://www.figma.com/community/file/971408767069651759" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">API Routes with Next.js (Remote Zoom Class)</ListItem>
                        <Text lineHeight="2">API Routes
                            <NextLink passHref href="https://nextjs.org/docs/api-routes/introduction" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">APIs with Next.js and tRPC (Remote Zoom Class)</ListItem>
                        <Text lineHeight="2">Build a tRPC CRUD API Example with Next.js
                            <NextLink passHref href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Stop building REST APIs for your Next.js apps, use tRPC instead
                            <NextLink passHref href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">SQL and Prisma</ListItem>
                        <Text lineHeight="2">Start from scratch with relational databases
                            <NextLink passHref href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">SQL For Beginners Video Tutorial
                            <NextLink passHref href="https://www.youtube.com/watch?v=5hzZtqCNQKk" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Database Management Systems and SQL – Tutorial for Beginners
                            <NextLink passHref href="https://www.freecodecamp.org/news/dbms-and-sql-basics/ " target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Next.js 13 using TailwindCSS (Remote Zoom Class)</ListItem>
                        <Text lineHeight="2">Modern CSS with Tailwind, Second Edition by Noel Rappin
                            <NextLink passHref href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                    <Heading fontSize="16" mb="2" mt="2">Web 2.0 Projects:</Heading>
                    <OrderedList ml="8" lineHeight="2">
                        <ListItem>Next.js Projects
                            <NextLink passHref href="https://github.com/panaverse/nextjs-projects" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <ListItem>Styling Next.js Projects using TailwindCSS and Chakra UI
                            <NextLink passHref href="https://github.com/panaverse/styling-nextjs-projects" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <ListItem>Todo Full-Stack App
                            <NextLink passHref href="https://github.com/ogzhanolguncu/min-todo" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                        <ListItem>Build a Twitter Clone
                            <NextLink passHref href="https://www.youtube.com/watch?v=nzJsYJPCc80" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </ListItem>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}
