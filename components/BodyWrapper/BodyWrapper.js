import styles from './BodyWrapper.module.scss'
import styled from "styled-components";

const BodyWrapper = styled.div`

  $breakpoint: ${props => props.breakpoint || "1200px"};

  


`;


export default function BodyWrapper({ 
  pageTransform,
}) {
  return (
  	<BodyWrapper className={styles.bodyWrapper} >
  		{children}
	</BodyWrapper>
  )
}
