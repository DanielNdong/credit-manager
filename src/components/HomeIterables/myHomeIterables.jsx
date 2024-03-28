import { Cards, Features, ItemBanner } from "../MyItems/myItems";
/* Contenido de la pagina */
import { TEXT_ITEM_BANNER, SERVICES, FEATURES } from "../../../constants/content";


const HomeServices = () => {
    return <>
       { SERVICES.map(
             (service, index) => (
                <Cards 
                key={index}
                img={service.img}
                path={service.href}
                title={service.title}
                description={service.description}
                />
            )
        )}
    </>
  }

const HomeFeatures = () => {
return <>
    {
        FEATURES.map(
            (item, id) => (
                <Features 
                    key={id}
                    id={item.id}
                    buttonUrl={item.buttonUrl}
                    pathImg={item.pathImg}
                    smallSubtitle={item.smallSubtitle}
                    subtitle={item.subtitle}
                    description={item.description}
                    buttonText={item.buttonText}
                />
            )
        )
    }
</>
}

const BannerContent = () => {
    return <>
      {TEXT_ITEM_BANNER.map(
          (text, index) => (
              <ItemBanner 
                titles={text.title}
                description={text.description} 
                key={index}
              />
          ))
      }
    </>
  }
  
export { 
    HomeFeatures, 
    HomeServices,
    BannerContent,
};
