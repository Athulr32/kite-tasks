
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, ButtonGroup, Button, Stack, Center } from '@chakra-ui/react'

import Image from 'next/image'
import type { PackageDetails } from '@/lib/types'
import Link from 'next/link'

export default function Package(props: PackageDetails) {


    return (
        <>

            <Card width={400} bg='black' color={'white'} maxWidth={400} minHeight={420} height="500px"  >
                <CardBody>
                    <Image
                        src={`/${props.image}`}
                        alt='Green double couch with wooden legs'
                        width={400} height={200}
                        style={{maxHeight:"200px",minHeight:"200px"}}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.name}</Heading>
                        <Text>
                            {props.description}
                        </Text>
                        <Text color='white.800' fontSize='2xl' textAlign={"center"}>
                           Price: {props.cost}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <Center>
                    <CardFooter>
                        <Button  bg="red"><Link href={`packageDetails/${props.id}`}>View More</Link></Button>
                    </CardFooter>
                </Center>
            </Card></>
    )
}