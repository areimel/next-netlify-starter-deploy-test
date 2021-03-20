import styles from './CellGrid.module.scss'
import styled from "styled-components";

const Cell = styled.div`
	width: calc(100% / ${props => props.columns || "3"}); 
	padding: ${props => props.padding || "25px"};

	.inner{
		max-width: ${props => props.cellInnerWidth || "450px"};
	}

	@media only screen and (max-width : 1200px) { 
	  	width: 100%;
	}
  }

`;


export default function CellGrid({ 
  columns,
  cellInnerWidth,
}) {
  return (
  	<div className={styles.cellGrid} >
  		
	  <Cell 
	    className={styles.cell}
	    columns={columns}
	    cellInnerWidth={cellInnerWidth}
	  >
            <div className={styles.inner +' inner'} cellInnerWidth={cellInnerWidth}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
	  </Cell>

	  <Cell 
	    className={styles.cell}
	    columns={columns}
	    cellInnerWidth={cellInnerWidth}
	  >
            <div className={styles.inner +' inner'} cellInnerWidth={cellInnerWidth}>
              Lorem ipsum dolor sit amet, 
            </div>
	  </Cell>

	  <Cell 
	    className={styles.cell}
	    columns={columns}
	    cellInnerWidth={cellInnerWidth}
	  >
            <div className={styles.inner +' inner'} cellInnerWidth={cellInnerWidth}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
	  </Cell>

	</div>
  )
}
