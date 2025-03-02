import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: solid red 1px;
display: flex;
flex-direction: row;
align-items: stretch;
justify-content:space-around;
flex-wrap: wrap;
// gridTemplateColumns: repeat(auto-fill, 220px);
// // justifyContent: center;
// gridGap: 20px
// width: 500px;
//  align-items: center;
//  height: 800px;
// flex-wrap: wrap;
// align-content: space-around;
// gap: 1em;

`
// align-columns is with flex-wrap
//gap: 1em;

const Item1 = styled.div`
border: solid blue 1px;
width: 300px;
height: 300px;
`
const Item2 = styled.div`
border: solid black 1px;
width: 300px;
height: 300px;


`
const Item3 = styled.div`
border: solid yellow 1px;
width: 300px;
height: 300px;
`
function Flexbox() {
  return (
   <Container>
        <Item1>container 1</Item1>
        <Item2>container 2</Item2>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item1>container 1</Item1>
        <Item2>container 2</Item2>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        <Item3>container 3</Item3>
        </Container>
  )
}

export default Flexbox