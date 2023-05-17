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
                    <Box bg="green.50" minHeight="100" borderRadius="10" shadow="lg" my="5" color="green.400" fontWeight="semibold" justifyContent="center" alignItems="center" display="flex" textAlign="center" fontSize={[14, 20]} padding={[0, 0]} paddingTop={[8, 0]} paddingBottom={[5, 0]}>
                        W3-351: Developing Advanced Smart Contracts and Oracles and Planet-Scale Web 3.0 Dapps
                    </Box>
                    <Box color="green.400" position="absolute" top="1" right="3" fontSize="16">13 Weeks</Box>
                </Box>
                <Box bg="white" p="5" borderRadius="5">
                    <Heading fontSize="16" mb="2" >Course Description:</Heading>
                    <Text lineHeight="2" mb="2" ml="5">
                        In this course, you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                        <NextLink passHref href="https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db" target="_blank">
                            <ExternalLinkIcon mx='2px' color="blue.500" />
                        </NextLink>

                    </Text>
                    <Heading fontSize="16" mb="2">Course Outline:</Heading>







                    <OrderedList ml="5">
                        <ListItem fontWeight="bold" mt="2">Blockchain and Metaverse Theory</ListItem>
                        <Text lineHeight="2">The Metaverse: And How It Will Revolutionize Everything by Matthew Ball <NextLink passHref href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0" target="_blank"><ExternalLinkIcon mx='2px' color="blue.500" /></NextLink></Text>
                        <Text lineHeight="2">Mastering Blockchain - Fourth Edition by Imran Bashir
                            <NextLink passHref href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Smart Contract Development in Solidity</ListItem>

                        <Text lineHeight="2">Solidity Programming Essentials - Second Edition By Ritesh Modi
                            <NextLink passHref href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>

                        <Text lineHeight="2">Solidity Learning Repo
                            <NextLink passHref href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Dapp Development using Ethers.js and Next.js 13</ListItem>
                        <Text lineHeight="2">Dapp Learning Repo
                            <NextLink passHref href="https://github.com/panaverse/dapps-nextjs" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <ListItem fontWeight="bold" mt="2">Tokennomics</ListItem>
                        <ListItem fontWeight="bold" mt="2">Blockchain Project: Create a Token and Launch ICO/IEO/IDO</ListItem>
                        <Text lineHeight="2">As you probably know, the ICO (&quot;Initial Coin Offering&quot;) industry has been booming, and it&apos;s completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia&apos;s list of highest crowdfunding projects
                            <NextLink passHref href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                            and you&apos;ll notice that blockchain projects absolutely dominate the list.
                        </Text>
                        <Text lineHeight="2">Understand the difference between IDO vs. IEO vs. ICO
                            <NextLink passHref href="https://phemex.com/blogs/what-is-a-dex-ido" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Also check these links for latest listings:

                        </Text>
                        <Text lineHeight="2">ICO list at ICO Drops
                            <NextLink passHref href="https://icodrops.com" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">ICO List of Best New Initial Coin Offerings
                            <NextLink passHref href="https://topicolist.com/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs
                            <NextLink passHref href="https://cryptototem.com/ico-list/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">ICO List Online
                            <NextLink passHref href="https://www.icolistingonline.com" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Binance IEO List
                            <NextLink passHref href="https://coincodex.com/ieo-list/binance/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Binance Launchpad
                            <NextLink passHref href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">IEO List
                            <NextLink passHref href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Polkastarter
                            <NextLink passHref href="https://polkastarter.com" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Project Part 1: How to Launch a IEO on Binance Launchpad </Text>
                        <Text lineHeight="2">Read How to Launch an IEO
                            <NextLink passHref href="https://appinventiv.com/blog/how-to-launch-an-ieo/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad
                            <NextLink passHref href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Note: Also document the alternatives to Binance Launchpad.</Text>
                        <Text lineHeight="2">Project Part 2: How to Launch a IDO on Polkastarter</Text>
                        <Text lineHeight="2">Review the list of top fundraising platforms
                            <NextLink passHref href="https://cryptorank.io/fundraising-platforms" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter
                            <NextLink passHref href="https://polkastarter.com/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Project Part 3: Create a Pako Token </Text>
                        <Text lineHeight="2">By creating a token and related contracts, you&apos;ll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.</Text>
                        <Text lineHeight="2">Therefore, for the sake of this chapter, let&apos;s imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).</Text>
                        <Text lineHeight="2">Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.</Text>
                        <Text lineHeight="2">Project Part 4: Develop Crowd Sale Contract</Text>
                        <Text lineHeight="2">This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)</Text>
                        <Text lineHeight="2">Implement a payable buyToken() function. </Text>
                        <Text lineHeight="2">Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought</Text>
                        <Text lineHeight="2">Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal &ldquo;owner&ldquo; account.</Text>
                        <Text lineHeight="2">Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.</Text>
                        <Text lineHeight="2">
                            You can use the openzeppelin crowd sale contracts
                            <NextLink passHref href="https://docs.openzeppelin.com/contracts/4.x/crowdsales" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                            however you will have to update the code to the latest solidity version.
                        </Text>
                        <Text lineHeight="2">Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract&apos;s balance should have been reduced.</Text>
                        <Text lineHeight="2">Note: Before you get started writing the token contract we suggest you review the access control
                            <NextLink passHref href="https://docs.openzeppelin.com/contracts/4.x/access-control" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>

                        </Text>
                        <Text lineHeight="2">Project Part 5: Trying it with MetaMask</Text>
                        <Text lineHeight="2">While it&apos;s always good to test your code, it&apos;s often more satisfying to see the results of your work wrapped in a nice UI. Let&apos;s see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!</Text>
                        <Text lineHeight="2">We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.</Text>
                        <Text lineHeight="2">When it&apos;s done, take note of what addresses the contracts were uploaded to and copy it!</Text>
                        <Text lineHeight="2">Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn&apos;t have any ethers, remember that you can use any faucet.</Text>
                        <Text lineHeight="2">After the transaction has been confirmed, you might be confused about why you can&apos;t see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to &quot;register&quot; it – after all, there are so many tokens out there, there&apos;s no way MetaMask could list them all by default!</Text>
                        <Text lineHeight="2">To do this, open the side menu and click on the &quot;Add token&quot; button to get started:</Text>
                        <Text lineHeight="2">Once you&apos;re on the token page, click on &quot;Add custom token&quot; and paste in the token contract&quot;s address in the address field.</Text>
                        <Text lineHeight="2">After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!</Text>
                        <Text lineHeight="2">Project Part 6: Trying it with Multisignature Wallets
                        </Text>
                        <Text lineHeight="2">Read

                            <NextLink passHref href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">
                            Now use Gnosis Safe
                            <NextLink passHref href="https://gnosis-safe.io/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                            with multi-sigs to do what you did in the last part.
                        </Text>
                        <Text lineHeight="2">Project Part 7: Sending Tokens using Ethers.js </Text>
                        <Text lineHeight="2">Write a Typescript program to send Pako Token to some friend&apos;s address using Ethers.js.</Text>
                        <Text lineHeight="2">You may follow this tutorial
                            <NextLink passHref href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT</Text>
                        <Text lineHeight="2">Read this NFT tutorial series
                            <NextLink passHref href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Create a NFT contract using the [OpenZepplen ERC721 NFT Standard
                            <NextLink passHref href="https://docs.openzeppelin.com/contracts/4.x/erc721" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">You may use the Preset ERC721 contract
                            <NextLink passHref href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                        <Text lineHeight="2">Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace
                            <NextLink passHref href="https://opensea.io/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                            for sale.
                        </Text>
                        <Text lineHeight="2">Implement a ERC721 Market
                            <NextLink passHref href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/" target="_blank">
                                <ExternalLinkIcon mx='2px' color="blue.500" />
                            </NextLink>
                        </Text>
                    </OrderedList>
                </Box>
            </AccordionPanel >
        </>
    )
}
