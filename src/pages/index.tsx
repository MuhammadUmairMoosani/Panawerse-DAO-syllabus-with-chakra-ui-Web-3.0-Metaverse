import { Accordion, Text, AccordionItem, Box, Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from "next/link"
import { ExternalLinkIcon } from "@chakra-ui/icons"

import QuarterOne from '@/components/Core/QuarterOne'
import QuarterTwo from '@/components/Core/QuarterTwo'
import QuarterThree from '@/components/Core/QuarterThree'

import QuarterFourWeb from '@/components/Web3/QuarterFour'
import QuarterFiveWeb from '@/components/Web3/QuarterFive'

import QuarterFourAI from '@/components/AI/QuarterFour'
import QuarterFiveAI from '@/components/AI/QuarterFive'

import QuarterFourCN from '@/components/CloudNative/QuarterFour'
import QuarterFiveCN from '@/components/CloudNative/QuarterFive'

import QuarterFourIoT from '@/components/IoT/QuarterFour'
import QuarterFiveIoT from '@/components/IoT/QuarterFive'

import QuarterFourGAI from '@/components/GAI/QuarterFour'
import QuarterFiveGAI from '@/components/GAI/QuarterFive'
import QuarterSixGAI from '@/components/GAI/QuarterSix'

import QuarterFourNetwork from '@/components/Network/QuarterFour'
import QuarterFiveNetwork from '@/components/Network/QuarterFive'





export default function Home() {
  return (
    <Box w='100%' h='100%' bg="gray.100">
      <Head>
        <title>PIAIC</title>
        <meta name="piaic" content="Presidential Initiative for Artificial Intelligence and Computing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" pt="10" alignItems="center"   >
        <Image src="/piaic.jpg" width="100" height="100" alt="" />
        <Heading fontWeight="700" fontSize="36" color="green.400" mt="3">PIAIC</Heading>
      </Flex>
      <Box textAlign="center" mb="5">
        <Text lineHeight="2" fontWeight="bold">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</Text>
        <NextLink passHref href="https://www.piaic.org/" target="_blank" >
          <Text color="blue.500" lineHeight="2" fontWeight="bold">https://www.piaic.org</Text>
        </NextLink>
        <Text lineHeight="2" fontWeight="bold">Certified AI, Metaverse, and Web 3.0 Developer and Solopreneur</Text>
        <Text lineHeight="2" fontWeight="bold">18-Month Earn-as-You-Learn Program</Text>
        <Text lineHeight="2" fontWeight="bold">Developing Billion-Dollar Valued Solopreneurs</Text>
      </Box>
      <Box display="flex" justifyContent="space-evenly" bg="whiteAlpha.200" borderRadius="10" border='2px' borderColor='green.400' p="10" width="1000px" margin="auto">
        <Box borderRadius="10" overflow="hidden">
          <Image src="/imageOne.jpg" width="400" height="400" alt="" />
        </Box>
        <Box borderRadius="10" overflow="hidden">
          <Image src="/imageTwo.png" width="400" height="400" alt="" />
        </Box>
      </Box>
      <Box m="100">
        <Text lineHeight="6" mb="5">
          The internet is without a doubt the most important technological development in human history. The rate of technological development is accelerating exponentially. What previously took a decade will now take 6 months or less. Mass adoption of AI,  Web3, and the metaverse is just around the corner. It will expand the internet as we know it by introducing novel features and advancements. The next generation of internet application development will use all aspects of modern technology, including AI, 3D, VR, AR, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
        </Text>
        <Text lineHeight="6" mb="5">
          As the pace of technological change accelerates, big players like Microsoft, Amazon, Google, and OpenAI will win by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse base experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first <b>  billion-dollar valued solopreneur businesses.</b> This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </Text>
        <Text lineHeight="6" mb="5">
          Recently developed generative platforms for artificial intelligence like ChatGPT, and Amazon’s Bedrock will serve as a base upon which various internet apps will be developed, upending the entire software industry. We must consider these new generative AI systems as a new kind of operating systems, rather than software, upon which internet applications will be created.
          <NextLink passHref href="https://www.bloomberg.com/opinion/articles/2023-04-19/ai-is-challenging-operating-system-supremacy" target="_blank">
            <ExternalLinkIcon mx='2px' color="blue.500" />
          </NextLink>
        </Text>
        <Text lineHeight="6" mb="5">
          Most businesses want to employ these enormous generative language models in developing their apps, but training them costs billions of dollars and takes years, and most businesses don't want to go through that. So what they want to do is work off of a foundational model (FM) that's already big and great and then customize it for their own purposes. We will learn to do exactly that in this course and integrate them into the Internet apps we built. Startup enterprises, particularly those with limited resources, will be able to bring their products to market more rapidly and efficiently with the support of these FMs.
          <NextLink passHref href="https://www.technologyreview.com/2023/04/27/1072102/the-future-of-generative-ai-is-niche-not-generalized/" target="_blank">
            <ExternalLinkIcon mx='2px' color="blue.500" />
          </NextLink>
        </Text>
        <Text lineHeight="6" mb="5">
          Web3 and Metaverse are also moving at a breakneck speed. Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030. We will also learn to integrate these
          <NextLink passHref href="https://icg.citi.com/icghome/what-we-think/citigps/insights/metaverse-and-money_20220330" target="_blank">
            <ExternalLinkIcon mx='2px' color="blue.500" />
          </NextLink>
        </Text>
        <Text lineHeight="6" mb="5">
          To summarize this program will teach students how to create cutting-edge Internet apps that are essentially cloud-based and employ Serverless, Edge, CDN, and Event-Driven technologies. They effortlessly integrate Web 3.0, AI, and 3D technology to create applications with revolutionary next-generation capabilities.
        </Text>
        <Text><b>The Essence of the Program: Earn While You Learn</b></Text>
        <Text lineHeight="6" mb="5">In this brand-new type of curriculum, students will learn how to generate revenue and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.</Text>
        <Text><b>Program of Studies</b></Text>
        <Text lineHeight="6" mb="5">
          This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. The program is built on top of the latest
          <NextLink passHref href="https://www.youtube.com/watch?v=tgpQx3cdVr8" target="_blank">
            <Text color="blue.500" lineHeight="2" fontWeight="bold">
              Serverless and Edge computing concepts
            </Text>
          </NextLink>
        </Text>
        <Text lineHeight="6" mb="5">
          It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
        </Text>
      </Box>




      <Box padding="10" >
        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Core Courses <span style={{ fontSize: 12 }}>( Common in All Specializations )</span> </Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400" >
              <QuarterOne />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400" >
              <QuarterTwo />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400" >
              <QuarterThree />
            </AccordionItem>
          </Accordion>
        </Box>
        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Web 3 and Metaverse <span style={{ fontSize: 12 }}>( Specializations )</span></Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFourWeb />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFiveWeb />
            </AccordionItem>
          </Accordion>
        </Box>
        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Artificial Intelligence (AI) and Deep Learning <span style={{ fontSize: 12 }}>( Specializations )</span></Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFourAI />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFiveAI />
            </AccordionItem>
          </Accordion>
        </Box>
        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Cloud-Native Computing <span style={{ fontSize: 12 }}>( Specializations )</span></Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFourCN />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFiveCN />
            </AccordionItem>
          </Accordion>
        </Box>

        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Ambient Computing and IoT <span style={{ fontSize: 12 }}>( Specializations )</span></Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFourIoT />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFiveIoT />
            </AccordionItem>
          </Accordion>
        </Box>
        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Genomics, Bioinformatics with Generative AI <span style={{ fontSize: 12 }}>( Specializations )</span></Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFourGAI />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFiveGAI />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterSixGAI />
            </AccordionItem>
          </Accordion>
        </Box>
        <Heading fontWeight="700" fontSize="28" textColor="gray.800" fontFamily="sans-serif">Network Programmability and Automation <span style={{ fontSize: 12 }}>( Specializations )</span></Heading>
        <Box padding="10" my="5" bg="whiteAlpha.200" borderRadius="10" border='1px' borderColor='green.400'>
          <Accordion allowToggle>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFourNetwork />
            </AccordionItem>
            <AccordionItem textColor="blackAlpha.700" borderColor="green.400">
              <QuarterFiveNetwork />
            </AccordionItem>
          </Accordion>
        </Box >
      </Box>
    </Box>
  )
}
