// Ambil Data Dari Folder API
import { menuLinks } from "../API/index";

function HeroComponent() {
  return (
    <div className="hero_component_items text-center">
    
      <div className="card_component_items">
        {menuLinks.map((menu) => {
          return (
            <div className="card_element_items" key={menu.id}>
              <div className="image_element">
                <img src={menu.image} alt={menu.text} />
              </div>
              <div className="text_element">
                <a href={menu.path}>{menu.text}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeroComponent;