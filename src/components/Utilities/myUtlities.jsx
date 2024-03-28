
import styled from "styled-components";
import Link from "next/link";

const Text = styled.p`
    font-size: .8rem;
    color: ${props => props.styled || "gray"};
    max-width: 500px;
`;

const SmallSubtitle = styled.h6`
    font-size: .8rem;
    font-weight: 700;
    color: green;
`;

const Subtitle = styled.h2`
    max-width: 700px; 
    font-family: 'Oswald';
    font-weight: ${props => props.weight};
    line-height: 40px;
`;

const StyledLinkCards = styled(Link)`
  background-color: white;
  transition: all .3s ease-in;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 0px #efefef;
  text-align: center;
  ${props => props.variant === 'bold' ? 'font-weight: bold' : ''};
  padding: 1rem 1.3rem;

  & img {
    margin: auto;
    margin-bottom: 1rem;
  }
  & h5 {
    font-weight: 700;
    font-size: .9rem;
    margin-bottom: .5rem
  }
  & p {
    font-size: .8rem;
  }
  &:hover {
    box-shadow: 3px 6px 12px 0px #efefef;
    transition: all .2s ease-in-out;
  }
`;

const IconLink = styled.img`
    height: 10px;
    background-image: url("/${prop => prop.img}");
`;

const HeroHomeImage = styled.section`
    position: relative;
    width: 100%;
    background-image: linear-gradient(rgb(0 0 0 / 53%) 40%,rgb(0 0 0 / 42%) 62%),url(/assets/Bange-Hero-image.jpg);  
    background-position: center;
    background-size: 112%;
    height: 700px;
`;

const ButtonLink = styled(Link)`
    max-width: 220px;
    padding: .6rem 2.2rem;
    color: #282828;
    background-color: ${prop => prop.bg === 'white' ? '#fff' : 'inherit'};
    border-radius: 2px;
    outline: solid 2px rgba(0, 0, 0, 0.75);
    font-size: .7rem;
    font-weight: 600;
    text-align: center;
    margin-top: 3rem
`;

export {
    Text,
    Subtitle,
    StyledLinkCards,
    SmallSubtitle,
    IconLink,
    HeroHomeImage,
    ButtonLink
}