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
	  let title = "Initial Component Demo"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
	  						This is the inital demo template for Holy Mountain frontend components.  \
	  						Clone this page out for demoing new components.\
	  					"
	  let contentProps = 'N/A'
	  let libraries = "N/A"
	  
	  let footerMessage = "Created by Planet Caravan Studios"
  
  //Component Content
  	let contentLeft = "Lorum Ipsum Dolor"

    return {
      props: {
        title,
        author,
        authorTeam,
        description,
        contentProps,
        libraries,
        footerMessage,
        contentLeft,
      }, // will be passed to the page component as props
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Holy Mountain Component</title>
      </Head>

      <main>
        <Header title="Holy Mountain Component Demo" />
        <Container>
          <ComponentMeta
            title={props.title}
            author={props.author}
            authorTeam={props.authorTeam}
            description={props.description}
            contentProps={props.contentProps}
            libraries={props.libraries}
          />
        </Container>
        
        <Sandbox>
          {/*<FixedSplit 
                      backgroundLeft="url('https://source.unsplash.com/600x600/?shiba')"
                      fixedLeft
                      fixedWidth="500px"
                      contentLeft = {props.contentLeft}
                      backgroundRight="#dba111"
                    />*/}
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
