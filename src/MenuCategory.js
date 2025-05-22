import "./component/MenuCategory.css";
import FoodDetails, { WithCustomisableLabel } from "./component/FoodDetails";

const MenuCategory = (props) => {
  const { title, itemCards, categories } = props?.val;

  const accordianBodyVisible = props?.accordianBodyVisible;

  const updateSetShowIndex = props?.updateSetShowIndex;

  function accordianClickHandler() {
   
    updateSetShowIndex();
  }

  const FoodDetailsWithCustomisbleLabel = WithCustomisableLabel(FoodDetails);

  return itemCards !== undefined ? (
    <div id="menu-category-box">
      <div
        className="accordian-headerbox  text-class"
        onClick={accordianClickHandler}
      >
        <p>
          {title} ({itemCards.length})
        </p>
        <p>🇻</p>
      </div>
      {accordianBodyVisible &&
        itemCards.map((val) => {
          return Object.keys(val?.card?.info?.variantsV2).length !== 0 ? (
            <FoodDetailsWithCustomisbleLabel
              key={val?.card?.info?.id}
              foodInfo={val}
            />
          ) : (
            <FoodDetails key={val?.card?.info?.id} foodInfo={val} />
          );
        })}
    </div>
  ) : (
    <div>
      <p id="title-bar" className="text-class">
        {title}
      </p>
      {categories.flatMap((category) => {
        return (
          <div id="menu-category-box">
            <div
              className="accordian-headerbox"
              key={category.categoryId}
              onClick={accordianClickHandler}
            >
              <p>
                {category.title} ({category.itemCards.length})
              </p>
              <p>🇻</p>
            </div>

            {accordianBodyVisible &&
              category.itemCards.map((val) => {
                return Object.keys(val?.card?.info?.variantsV2).length !== 0 ? (
                  <FoodDetailsWithCustomisbleLabel
                    key={val?.card?.info?.id}
                    foodInfo={val}
                  />
                ) : (
                  <FoodDetails key={val?.card?.info?.id} foodInfo={val} />
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default MenuCategory;
