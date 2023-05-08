import { AccordionButton, AccordionIcon, AccordionPanel, Box } from "@chakra-ui/react"

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionPanel>
        </>
    )
}
