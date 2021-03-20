import styles from './FixedSplit.module.scss'
import styled from "styled-components";

const Cell = styled.div`

  $breakpoint: ${props => props.breakpoint || "1200px"};

  background: ${props => props.backgroundLeft};
  background: ${props => props.backgroundRight};

  @media only screen and (max-width : 1200px) { 
    	min-height: 50vw;
    }

  &.fixedWidth{
    width: ${props => props.fixedWidth || "50%"};
    @media only screen and (max-width : 1200px) { 
    	width: 100%;
    }
  }

  &.dynamicWidth{
	width: calc(100% -  ${props => props.fixedWidth});
	@media only screen and (max-width : 1200px) { 
		width: 100%;
	}
  }

`;


export default function FixedSplit({ 
  backgroundLeft,
  contentLeft,
  backgroundRight,
  contentRight,
  fixedLeft,
  fixedRight,
  fixedWidth
}) {
  return (
  	<div className={styles.cellWrapper} >
  		
	  <Cell 
	    className={ styles.cell + (fixedLeft ? " fixedWidth " : " dynamicWidth ") }
	    backgroundLeft={backgroundLeft}
	    fixedWidth={fixedWidth}
	  >
	
            <div className={styles.inner}>
              {contentLeft}
            </div>
	
	  </Cell>

	  <Cell 
	    className={ styles.cell + (fixedRight? " fixedWidth " : " dynamicWidth ") }
	    backgroundRight={backgroundRight}
	    fixedWidth={fixedWidth}
	  >

	    <div className={styles.inner}>
	      {contentRight}
	      <br/><br/>
	      <p className="body">
	        This template element is your standard 2 div side-by-side layout, but with a few twists.
	  	<br/><br/>
	  	Like all Holy Mountain Framework elements, 
	  	it's been built with responsivity and developer ease of use in mind.
	      </p>
	    </div>

	  </Cell>

	</div>
  )
}
