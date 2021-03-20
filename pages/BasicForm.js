//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import BasicForm from '@components/BasicForm/BasicForm'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	let title = "BasicForm | Holy Mountain Component"
	let author = "Alec Reimel, Planet Caravan Studios"
	let description = "Basic, nicely laid-out form that is easy for devs to work with and customize."
	let footerMessage = "Created by Planet Caravan Studios"
  
  //Component Content
  	

    return {
      props: {
        title,
        author,
        description,
        footerMessage,
      }, // will be passed to the page component as props
  }
}

export default function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <main>
        <Header title="Holy Mountain Component Demo" />
        <Container>
          <ComponentMeta
            title={props.title}
            author={props.author}
            description={props.description}
          />
        </Container>
        
        <Sandbox>
          <BasicForm 
            maxWidth="500px"
            background="rgba(255,255,255,0.25)"
            shadow
          />
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
