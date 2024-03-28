
import Image from "next/image";
import { StyledLinkCards, Text, ButtonLink, Subtitle, SmallSubtitle } from "../Utilities/myUtlities";

const Cards = ({
    img,
    path,
    title,
    description
}) =>{
    return <>
        <StyledLinkCards href={path} variant="bolds">
            <Image src={img}  width="30" height="30" alt={title}/>
            <h5>{title}</h5>
            <Text>{description}</Text>
        </StyledLinkCards>
    </>
}

const Features = ({
    id,
    buttonUrl,
    pathImg,
    smallSubtitle,
    subtitle,
    description,
    buttonText
}) => {
  return <>
    <div className={`flex ${id === 2 ? "flex-row-reverse":""} flex-wrap-reverse md:flex-wrap w-full`}>       
          <div className="flex justify-center items-center p-20 w-1/2">
                <div className="grid gap-5 w-4/5">
                <SmallSubtitle>{smallSubtitle}</SmallSubtitle>
                <Subtitle>{subtitle}</Subtitle>
                <Text>{description}</Text>
                <ButtonLink href={buttonUrl}>{buttonText}</ButtonLink>
                </div>
          </div>
          <div className="w-1/2">
            <Image src={pathImg} className=" w-full h-full object-cover" width="900" height="900" alt={smallSubtitle}/>
          </div>
    </div>
  </>
}

const ItemBanner = ({
  titles, 
  description
}) => {
  return (
      <div>
          <h6 className="font-medium">{titles}</h6>
          <span className="text-gray-400">
            {description}
          </span>
      </div>
  )
}

export {
    Features, 
    Cards,
    ItemBanner,
}
