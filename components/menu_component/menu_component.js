
const MenuComponent = ({data}) =>
{
  return (
    <div class="grid place-items-center h-screen">
      {data ? (<div>{data.map((item,index) =>(
        <div key={index} eventKey={index}>
          {/* <p>{item.id}</p> */}
          <p><strong>{item.dishName}</strong></p>
          <p>{item.description}</p><br/>
          </div>
      ))}</div>) : (<div>There is no data</div>)}
      
    </div>
  )
}

export default MenuComponent;