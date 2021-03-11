import React from 'react';
import './App.css';
import Button from "./Button";
import Product from "./Product";
import Tile from "./Tile"
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"



function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button text="to the collection" disabled={false}/>
          <Button text="shop all bags" disabled={false}/>
          <Button text="pre-orders" disabled={true}/>
      </nav>
          <main>
              <Product
              label="New collection"
              image={bag1}
              description="The handy bag"
              price={400}
              />
              <Product
                  label="Best seller"
                  image={bag2}
                  description="The stylish bag"
                  price={250}
              />
              <Product
                  label="New collection"
                  image={bag3}
                  description="The simple bag"
                  price={300}
              />
              <Product
                  label="New collection"
                  image={bag4}
                  description="The trendy bag"
                  price={150}
              />
          </main>
              <footer>
                  <Tile
                  title="The brand"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur assumenda id magni officia praesentium quae unde, vel voluptas voluptatibus."
                  text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur assumenda id magni officia praesentium quae unde, vel voluptas voluptatibus."
                  />
                  <Tile
                  image={brand}
                  />
                  <Tile
                  image={story}
                  />
                  <Tile
                  title="Our story"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores blanditiis culpa, deleniti, deserunt fugit illum inventore itaque nam natus pariatur quaerat quisquam sint ullam vitae voluptatem. Officiis, totam."
                  />
              </footer>
      </>
  );
}

export default App;



