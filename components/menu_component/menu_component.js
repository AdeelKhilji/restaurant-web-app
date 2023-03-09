
import { 
  SimpleGrid, 
  Card,
  Stack,
  CardBody, 
  Image, 
  Heading,
  Text,
  Box
  } from '@chakra-ui/react'

const MenuComponent = ({data}) =>
{
  console.log(data);
  return (
    <>
      <SimpleGrid spacing={5} templateColumns='repeat(auto-fill, minmax(350px, 1fr))'>
      {data ? (<div>{data.map((item,index) =>(
        <div key={index} eventKey={index}>
          <br/>
          <Card w='100%'>
            <CardBody>
              <Image src={item.dishImg} borderRadius='lg'/>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{item.dishName}</Heading>
              <Text>
                {item.description}
              </Text>
            </Stack>
            </CardBody>
          </Card>
          <br/>
        </div>
        ))}</div>) : (<div>There is no data</div>)}
      </SimpleGrid>
    </>
  )
}

export default MenuComponent;