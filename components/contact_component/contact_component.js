export default function ContactComponent({data}) {
  return (
    <div class="grid place-items-center h-screen">
      {data ? (<div>{data.map((item,index) =>(
        <div key={index} eventKey={index}>
          {/* <p>{item.id}</p> */}
          <p><strong>{item.address}</strong></p>
          <p>{item.city}</p>
          <p>{item.province}</p><br/>
          </div>
      ))}</div>) : (<div>There is no data</div>)}
      
    </div>
  )
}