import MenuComponent from "../components/menu_component/menu_component";

export async function getStaticProps(){
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), '/data', '/data.json');

  let data = await fs.readFile(filePath);
  data = JSON.parse(data);

  return{
    props:{
      data: data.data
    }
  }
}

export default function MenuPage({data}) 
{
  return (
        <MenuComponent data={data.menu}/>
  )
}