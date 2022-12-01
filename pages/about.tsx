import tw, { css, styled } from 'twin.macro';

// ! Results in failed test with error:
// TypeError: _twinMacro.default.h1 is not a function
// const StyledHeading = tw.h1`font-bold`;

// ! Results in failed test with error:
// TypeError: Cannot read property 'h1' of undefined
const StyledHeading = styled.h1`
  font-weight: bold;
  font-size: 4rem;
`;

export default function About() {
  return <StyledHeading>About Page</StyledHeading>;
}
