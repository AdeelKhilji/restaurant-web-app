import Items from "./data/data.json"

export const getStaticProps = async () =>{
  return{
    props:{
      menuItems: Items
    }
  }
}

export default function MenuComponent({menuItems}) {
  return (
    <div class="grid place-items-center h-screen">
      {/* {{menuItems.map(menuItem =>(
        <p key={menuItem.id}>{menuItem}</p>
      ))}} */}
    </div>
  )
}