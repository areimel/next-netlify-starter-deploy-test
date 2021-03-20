//IMPORTS
//import Head from '@components/Head/Head'
import Head from 'next/head'
import Header from '@components/Template/Header/Header'
import Container from '@components/Template/Container/Container'
import Sandbox from '@components/Template/Sandbox/Sandbox'
import ComponentMeta from '@components/Template/ComponentMeta/ComponentMeta'
import Footer from '@components/Template/Footer/Footer'

import CellGrid from '@components/CellGrid/CellGrid'

//VARS
export async function getStaticProps() {
  
  //General Page VARS
	  let title = "CellGrid"
	  let author = "Alec Reimel"
	  let authorTeam = "Planet Caravan Studios"
	  let description ="\
		Flexbox-powered cell/card layout.  \
		Useful for body content or listings.\
		Visual content is positioned inside transparent cells,\
		using max-width and padding to control spacing rather than margins.\
	  "
	  let contentProps = 'columns, cellInnerWidth'
	  let libraries = "Styled Components"
	  
	  let footerMessage = "Created by Planet Caravan Studios"
  
  //Component Content
  	

    return {
      props: {
        title,
        author,
        authorTeam,
        description,
        contentProps,
        libraries,
        footerMessage,
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
          <CellGrid
            columns="3"
            cellInnerWidth="450px"
          />
        </Sandbox>
        
      </main>

      <Footer footerMessage={props.footerMessage} />
    </>
  )
}
