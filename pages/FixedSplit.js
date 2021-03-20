//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import FixedSplit from '@components/FixedSplit/FixedSplit'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	let title = "FixedSplit | Holy Mountain Component"
	let author = "Alec Reimel, Planet Caravan Studios"
	let description = "Side-by-side content panels, one of which gets a fixed width, and the other fills the rest of the space. "
	let footerMessage = "Created by Planet Caravan Studios"
  
  //Component Content
  	let contentLeft = "FixedSplit | Fixed Side"
  	let contentRight = "FixedSplit | Dynamic Side"
  	let backgroundRight="#dba111"

    return {
      props: {
        title,
        author,
        description,
        footerMessage,
        contentLeft,
        contentRight,
        backgroundRight,
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
          <FixedSplit 
            backgroundLeft="url('https://source.unsplash.com/600x600/?corgi')"
            contentLeft = {props.contentLeft}
            fixedLeft
            fixedWidth="500px"
            contentRight = {props.contentRight}
            backgroundRight= {props.backgroundRight}
            breakpoint="1100px"
          />
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
