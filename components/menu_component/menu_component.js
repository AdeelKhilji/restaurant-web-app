
import { Grid, GridItem } from '@chakra-ui/react'

const MenuComponent = ({data}) =>
{
  return (
    <>
    <Grid templateRows='repeat(3, 1fr)' gap={6} >
      {data ? (<div>{data.map((item,index) =>(
        <GridItem w='100%'>
          <div className="p-10 card">
            <div className="p-5 max-w-sm rounded overflow-hidden shadow-lg w-screen">
              <div key={index} eventKey={index}>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.dishName}</div>
                    <p className="text-gray-700 text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
      ))}</div>) : (<div>There is no data</div>)}

      </Grid>
    </>
  )
}

export default MenuComponent;