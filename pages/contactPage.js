import ContactComponent from "../components/contact_component/contact_component";

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

export default function ContactPage({data}) {

  return (
    <div class="grid place-items-center h-screen">
      <ContactComponent data={data.contacts}/>
    </div>
  )
}