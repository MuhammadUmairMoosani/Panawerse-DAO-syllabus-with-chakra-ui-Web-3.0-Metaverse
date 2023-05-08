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

import QuarterFourNetwork from '@/components/Network/QuarterFour'
import QuarterFiveNetwork from '@/components/Network/QuarterFive'



import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'

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
