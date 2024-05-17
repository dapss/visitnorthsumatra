import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

const destinations = [
  {
    image: 'https://travelcontinuously.com/wp-content/uploads/2019/02/DJI_0686-Pano.jpg',
    title: 'Lake Toba',
    description: 'Large Natural Lake.',
    details: [
      'Lake Toba is an extraordinary natural wonder of the world. This enormous crater lake consists of an island almost the size of Singapore in its center. At over 1,145 square km, and a depth of 450 meters, Lake Toba is actually more like an ocean. This is the largest lake in Southeast Asia and one of the deepest lakes in the world.',
      'Toba is a place to sit back, relax and absorb some beautiful pristine scenery. As you sit and take in the view of the picturesque mountains set against the cool clear lake, you will feel the worries of the world melt away. As the lake sits 900 meters above sea level, therefore the climate here is cooler which gives a well-needed break from the heat, humidity, and pollution of the city.'
    ],
    highlights: [
      'Water Sports and Activities',
      'Hot Springs',
      'Traditional Batak Villages',
    ]
  },
  {
    image: 'https://nusadinusa.com/wp-content/uploads/2017/08/hengyao-tang-fmtI2yxWCEI-unsplash-scaled.jpg',
    title: 'Samosir Island',
    description: 'Beautiful Volcanic Island.',
    details: [
      'The island of Samosir is situated in the huge crater lake of Toba. It is the heart of the Toba Batak culture. A visit to Lake Toba is not complete without a stay on Samosir with its many traditional villages along its shoreline. On the east side of the island, the land rises steeply from a narrow strip of flat land along the lake’s water edge climbing to a central plateau that towers some 780 meters above the waters. From this height one can have a wonderful panoramic view on this magnificent blue lake.',
      'As you step down the ferry at Tomok you will be greeted by a row of souvenir stalls selling an array of Batak handicraft, from the traditional hand-woven ulos cloths to Batak bamboo calendars and all kinds of knick-knacks. Further north of Tomok is a small peninsula, known as Tuktuk Siadong, or simply Tuktuk, best loved for its sandy beaches and beautiful lush scenery. Here the soft lapping blue waters of lake Toba blend with the green pastures. Although offering beaches and opportunities for watersports, yet the air here is cool as it is located high in the mountains. Therefore, Tuktuk become a favorite with tourists, so here you will find a plethora of small hotels and homestays, restaurants and handicrafts galore.'
    ],    
    highlights: [
      'Tomok Village',
      'Simarjarunjung Hill',
      'Tuktuk Siadong',
    ]
  },
  {
    image: 'https://asiansurf.co/new/wp-content/uploads/2022/06/niaspro-day1-scaled.jpg',
    title: 'Lagundri Bay',
    description: 'Tropical Paradise.',
    details: [
      'Also commonly referred to as Sorake Bay, Lagundri Bay is a deep horseshoe shaped bay on the southern coastline of Nias. The Point was first surfed in 1975 and word about it has spread around the globe ever since. Unlike some areas of Indonesia, Lagundri Bay is little affected by adverse winds, due to the hills and large coconut plantations that direct the winds offshore down into the bay with consistent surf year-round making it a highly prized spot to tick off your bucket list.',
      'Lagundri Bay is a hidden gem that offers a perfect blend of adrenaline-pumping activities, natural beauty, and cultural immersion. Whether you seek thrilling adventures on the waves, peaceful moments on secluded beaches, or an insight into the captivating Nias culture, Lagundri Bay promises an unforgettable journey that will leave you with cherished memories for a lifetime.'
    ],    
    highlights: [
      'Surfing Mecca',
      'Idyllic Beaches',
      'Traditional Nias Culture',
      'Exciting Water Sports',
    ]
  },
  {
    image: 'https://cdn.photographylife.com/wp-content/uploads/2015/06/DSC_8549.jpg',
    title: 'Mount Sibayak',
    description: 'Majestic Volcano.',
    details: [
      'Rising majestically above the North Sumatran landscape, Mount Sibayak beckons adventurous souls to embark on an unforgettable journey. As you ascend this magnificent volcano, a world of natural wonders unfolds before your eyes. The trekking trails wind through verdant forests, where sunlight filters through the canopy, casting a gentle glow on the lush vegetation. Towering trees, adorned with moss and vibrant tropical plants, create a serene atmosphere, transporting you to a realm untouched by time.',
      'As you venture higher, the air becomes crisp and invigorating, and the breathtaking panoramas gradually unfold. The panoramic views from the summit of Mount Sibayak are truly awe-inspiring. At sunrise, witness the sky awash with hues of pink, orange, and gold as the first rays of light illuminate the surrounding valleys and mountains. The world below comes alive, and the distant Lake Toba glistens like a jewel in the distance. At sunset, the sky transforms into a canvas of fiery colors, casting a warm glow over the volcanic landscape. The sight is nothing short of enchanting, as the silhouette of the volcano merges with the vibrant sky, creating a moment of pure magic.'
    ],    
    highlights: [
      'Exhilarating Hike',
      'Captivating Crater',
      'Natural Hot Springs',
      'Stunning Panoramic Views',
    ]
  },
  {
    image: 'https://endangeredwonders.org/wp-content/uploads/2019/07/Gunung-Leuser-National-Park-Properties-Header-1920x1150B.jpg',
    title: 'Gunung Leuser',
    description: 'The Tropical Rainforest.',
    details: [
      'Located in northern Sumatra, Indonesia, Gunung Leuser National Park is a must-visit destination for nature enthusiasts and adventure seekers. Spanning over 7,927 square kilometers (3,050 square miles), this UNESCO World Heritage Site offers a captivating blend of pristine rainforests, diverse wildlife, and stunning landscapes. Immerse yourself in the wonders of this natural paradise with a travel guide to help you make the most of your visit.',
      "Gunung Leusder National Park is renowned for its lush tropical rainforests, which are home to an astonishing variety of plant and animal species. As you explore the park's well-maintained trails, you'll find yourself surrounded by an enchanting world of biodiversity. Marvel at the towering trees, their canopies forming a verdant umbrella overhead. Listen to the symphony of sounds from exotic birds and primates echoing through the forest, while vibrant flowers add splashes of color to the emerald green surroundings. Discover the diverse microhabitats that lie within the park, from the tranquil river valleys and cascading waterfalls to the moss-covered canopies that create an ethereal atmosphere."
    ],    
    highlights: [
      'Pristine Rainforests',
      'Encounter Orangutans',
      'Diverse Wildlife',
      'Birdwatching Paradise',
    ]
  },
  {
    image: 'https://lp-cms-production.imgix.net/2019-06/eee4e954ec8a1eb11905395adc123a98-istana-maimoon.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75',
    title: 'Maimoon Palace',
    description: 'The Royal Palace.',
    details: [
      "Maimoon Palace stands as a testament to the opulence and regal heritage of the Sultanate of Deli, which ruled the region in the past. As you approach the palace, you'll be captivated by its striking golden yellow facade adorned with intricate carvings and multi-tiered roofs. The design reflects a harmonious blend of Malay, Indian, and Middle Eastern architectural influences, creating a unique visual spectacle.",
      "Step inside Maimoon Palace and be transported to a bygone era. The palace complex spans over an expansive area, featuring several buildings, pavilions, and beautifully landscaped gardens. Take a leisurely stroll through the manicured lawns, adorned with lush tropical plants, ornamental trees, and vibrant flowers. The tranquil atmosphere provides an ideal setting for a peaceful retreat from the city's hustle and bustle.",
      "The interior of Maimoon Palace is equally captivating, showcasing the lavish lifestyle of the Sultanate. As you enter the palace, you'll be greeted by a grand reception hall adorned with intricate wood carvings, gold accents, and elaborate chandeliers. The beautifully crafted furniture, including the Sultan's throne, adds an air of regality to the surroundings. Explore the various rooms, each with its own unique charm and purpose, such as the royal bedrooms, audience hall, and ceremonial chambers.",
      // "Within the palace complex, you'll find the Museum of the Sultanate of Deli, which offers a deeper insight into the history and cultural heritage of the region. The museum houses a vast collection of artifacts, royal heirlooms, traditional costumes, and historical photographs. Learn about the Sultanate's traditions, customs, and important historical events through informative displays and exhibits."
    ],    
    highlights: [
      'Exquisite Architecture',
      'Royal Atmosphere',
      'Beautiful Gardens',
      'Opulent Interior',
    ]
  },
  {
    image: 'https://2.bp.blogspot.com/-6p3dWZPXKS0/UmpoWG8WR6I/AAAAAAAAA3w/77JGdtViN8Y/s1600/IMG_8945.JPG',
    title: 'Bika Ambon',
    description: 'Unique Blend of Flavors and Textures.',
    details: [
      "Bika Ambon is a delightful culinary experience that shouldn't be missed when visiting Medan, Indonesia. This traditional Indonesian cake, originating from the city of Medan, has gained popularity both locally and internationally for its unique taste, texture, and cultural significance.",
      "One of the defining characteristics of Bika Ambon is its aromatic and flavorful profile. The cake is infused with the enticing scent of pandan leaves and the rich creaminess of coconut milk. These ingredients come together to create a harmonious blend of fragrances that immediately captivate the senses. The cake itself boasts a rich, sweet flavor with subtle hints of coconut and pandan, making it a truly indulgent treat.",
      "What sets Bika Ambon apart from other cakes is its distinctive texture. As you take your first bite, you'll experience a soft, spongy interior that has a slightly chewy and sticky consistency. This unique texture is achieved through a special baking process that involves using a specific type of yeast, allowing the cake to rise and develop its characteristic honeycomb-like structure. Each mouthful offers a delightful combination of softness and chewiness, creating a truly satisfying eating experience."
    ],    
    highlights: [
      'Aromatic Flavor',
      'Unique Texture',
      'Crispy Exterior',
      'Versatile Variations',
    ]
  },
  {
    image: 'https://cdn.tasteatlas.com/images/dishes/189be1ee7c77443b821ac9add6261251.jpg',
    title: 'Arsik',
    description: 'Spicy Fish Dish.',
    details: [
      "Arsik is a traditional Batak dish from North Sumatra, Indonesia, known for its bold and flavorful profile. This aromatic dish typically features freshwater fish, such as carp or tilapia, cooked in a flavorful mixture of spices and herbs. The fish is marinated with a combination of turmeric, ginger, garlic, and shallots, which infuses it with a vibrant yellow color and a fragrant aroma. The marinated fish is then simmered in a sauce made from andaliman (a citrusy spice native to the region), torch ginger flower, lemongrass, and other aromatic ingredients. The result is a rich and savory dish with a tangy and slightly spicy taste. Arsik is often served with steamed rice and accompanied by vegetables or a side dish of sambal (spicy chili condiment) to enhance the overall flavor profile.",
      "What sets Arsik apart is its unique combination of flavors and the way it highlights the freshness of the fish. The tanginess from the andaliman and torch ginger flower, along with the aromatic spices, creates a complex and satisfying taste. The fish absorbs the flavors of the marinade and the sauce, resulting in tender and flavorful bites. Arsik is not only a delicious dish but also represents the culinary heritage of the Batak people. It is commonly prepared for special occasions and celebrations, showcasing the rich cultural traditions of North Sumatra. When visiting the region, experiencing the flavors of Arsik is a must to appreciate the diverse and vibrant Indonesian cuisine.",
    ],    
    highlights: [
      'Freshwater Fish Delight',
      'Bursting with Flavor',
      'Aromatic Ingredients',
    ]
  },
  {
    image: 'https://cdn.tasteatlas.com/images/dishrestaurants/e0a777209e804e99a6878425bd9606d4.jpg?mw=1300',
    title: 'Saksang',
    description: 'Bold and Intense Flavors.',
    details: [
      "Saksang is a traditional Batak dish from North Sumatra, Indonesia, known for its bold and intense flavors. This unique dish is typically made with pork, although other meat options such as water buffalo or mutton can be used as well. Saksang is prepared by cooking the meat with a combination of spices and herbs, including andaliman (a citrusy spice native to the region), ginger, turmeric, garlic, shallots, and galangal. The dish is then simmered in a mixture of pig's blood and coconut milk, which gives it a rich and velvety texture. The resulting flavor is a complex blend of aromatic spices, with a hint of tanginess from the andaliman and a slightly sweet undertone from the coconut milk. Saksang is often served with steamed rice and accompanied by vegetables or other side dishes to complement its robust flavors.",
      "The highlight of Saksang lies in its bold and distinctive taste. The combination of spices, along with the addition of pig's blood and coconut milk, creates a unique flavor profile that is both savory and rich. The use of andaliman adds a citrusy tang that cuts through the richness of the dish, while the coconut milk provides a creamy and luscious texture. These flavors come together to create a captivating culinary experience that is deeply rooted in the Batak culture.",
      "Saksang is not only a delicious dish but also holds cultural significance among the Batak people. It is often prepared for special occasions, festivals, and important gatherings, symbolizing unity and celebration. The dish showcases the culinary heritage and traditions of the Batak community, making it an essential part of their cultural identity. Trying Saksang allows you to immerse yourself in the flavors and traditions of North Sumatra, providing a unique and memorable experience in Indonesian cuisine."
    ],    
    highlights: [
      'Rich and Intense Flavors',
      'Aromatic Spice Blend',
      'Unique Use of Ingredients',
    ]
  },
  {
    image: 'https://img-global.cpcdn.com/recipes/c3d4dfeea0578a69/1200x630cq70/photo.jpg',
    title: 'Anyang Pakis',
    description: 'Flavorful and Nutritious.',
    details: [
      "Anyang Pakis is a traditional Indonesian dish that originates from the Minangkabau region of West Sumatra. It is a flavorful and nutritious dish made with fern tips, known as 'paku' in Indonesian. Anyang Pakis is typically prepared by stir-frying the fern tips with a variety of ingredients, including garlic, shallots, chili, and anchovies. The dish is often seasoned with a combination of spices, such as turmeric, coriander, and tamarind, which lend it a delightful blend of savory, tangy, and slightly spicy flavors. The fern tips contribute a unique texture and taste, offering a crisp and refreshing bite. Anyang Pakis is commonly served with steamed rice and can be enjoyed as a main dish or as a side dish to complement other Indonesian meals.",
      "One of the highlights of Anyang Pakis is its use of fern tips as the main ingredient. The fern tips provide a distinct flavor and texture to the dish, with a slight bitterness that is balanced by the flavorful spices and seasonings. The fern tips are also highly nutritious, being a good source of fiber, vitamins, and minerals. This makes Anyang Pakis not only a delicious culinary experience but also a healthy addition to the Indonesian cuisine.",
      "Another highlight of Anyang Pakis is its versatility. The dish can be customized to suit individual preferences by adjusting the level of spiciness or adding other ingredients such as shrimp or tofu. Additionally, the combination of flavors in Anyang Pakis creates a harmonious balance that appeals to a wide range of palates. Whether enjoyed as a vegetarian dish or with added protein, Anyang Pakis offers a unique and delightful taste experience that showcases the diverse flavors of Indonesian cuisine."
    ],    
    highlights: [
      'Unique Ingredient',
      'Flavorful Spices and Seasonings',
      'Nutritious and Healthy',
    ]
  },
  {
    image: 'https://images.lifestyleasia.com/wp-content/uploads/sites/6/2022/11/27180125/best-lemang-in-KL-kuala-lumpur-selangor-klang-valley-malaysia-coconut-rice-1359x900.jpg',
    title: 'Lemang',
    description: 'The Sticky Rice.',
    details: [
      "Lemang is a traditional Malaysian and Indonesian dish that is commonly enjoyed during festive occasions, such as Eid al-Fitr or Hari Raya. It is made from glutinous rice that is cooked inside a hollowed bamboo log over an open fire. The preparation of lemang involves coating the inner surface of the bamboo log with banana leaves and then filling it with a mixture of glutinous rice and coconut milk. The log is then placed over the fire, allowing the rice to cook slowly and absorb the flavors of the bamboo and coconut. This slow cooking process gives lemang its distinct smoky aroma and unique taste. Once cooked, the bamboo log is carefully split open, revealing a cylindrical block of sticky lemang that has a slightly charred exterior and a tender, fragrant interior. Lemang is typically served with rendang (a rich and spicy meat dish) or serunding (spiced meat floss), creating a perfect combination of flavors.",
      "One of the highlights of lemang is its unique cooking method. The use of bamboo logs imparts a special smoky flavor to the glutinous rice, enhancing its taste and aroma. The slow cooking process over an open fire allows the rice to cook evenly and develop a delightful chewy texture. The combination of coconut milk and the natural fragrance of the bamboo adds richness and depth to the dish, making it a truly indulgent treat.",
      "Lemang also holds cultural significance in Malaysia and Indonesia. It is often associated with festive celebrations and is considered a symbol of togetherness and unity. The preparation of lemang is a communal activity, where family and friends gather to help with the cooking process, creating a sense of camaraderie and shared joy. The enjoyment of lemang during special occasions creates a connection to tradition and heritage, making it a cherished and beloved dish in both countries."
    ],    
    highlights: [
      'Rich and Fragrant',
      'Chewy Texture',
    ]
  },
  {
    image: 'https://www.whiteboardjournal.com/wp-content/uploads/2020/08/PTG-BihunBebek-8.jpg',
    title: 'Bihun Bebek',
    description: 'Rich and Aromatic.',
    details: [
      "Bihun Bebek, also known as Duck Rice Vermicelli, is a flavorful and satisfying Indonesian dish that features tender duck meat and rice vermicelli noodles. This dish typically starts with a rich and aromatic duck broth that is simmered with various herbs and spices, such as ginger, garlic, and star anise. The duck meat is then cooked until tender and shredded, adding a savory and meaty element to the dish. The rice vermicelli noodles are cooked separately and then combined with the flavorful duck broth. The dish is often garnished with fresh herbs, such as cilantro or scallions, and served with a side of fresh vegetables or sambal for added heat. Bihun Bebek offers a delightful combination of textures and flavors, with the tender duck meat, fragrant broth, and the soft and slurp-worthy noodles, making it a popular and comforting choice for duck lovers.",
      "One of the highlights of Bihun Bebek is the rich and aromatic duck broth. The broth is the foundation of the dish, providing a robust and savory flavor that infuses the noodles and duck meat with its delicious essence. The combination of herbs and spices in the broth creates a depth of flavor that enhances the overall taste experience.",
      "Additionally, the tender and succulent duck meat in Bihun Bebek adds a satisfying element to the dish. The shredded duck meat is flavorful and pairs well with the noodles and broth, creating a delicious contrast of textures. The duck meat absorbs the flavors of the broth, resulting in a mouthwatering and indulgent treat for duck enthusiasts."
    ],    
    highlights: [
      'Aromatic Duck Broth',
      'Tender Shredded Duck Meat',
      'Soft and Slurp-worthy Rice Vermicelli Noodles',
      'Flavorful Garnishes',
    ]
  },
];

const DestinationPage = () => {
  const { title } = useParams();
  const destination = destinations.find(dest => dest.title === title);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination-page">
      <div className="header-image" style={{ backgroundImage: `url(${destination.image})` }}>
        <h1 className="destination-title">{destination.title}</h1>
      </div>
      <div className="container">
        <p className="destination-description">{destination.description}</p>
          {/* <h2>Details</h2> */}
          {destination.details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        <h2>Highlights</h2>
        <ul className="highlights-list">
          {destination.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationPage;