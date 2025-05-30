import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './marketplace.module.css';
import TrendingNow from '@modules/layout/templates/TrendingNow';

export default function MarketplacePage() {
  // Add trending articles data
  const trendingArticles = [
    {
      id: 1,
      slug: 'seascape-patterson-associates',
      title: 'Seascape by Patterson Associates',
      category: 'BOOK FEATURE',
      image: '/images/trending/seascape.jpg'
    },
    {
      id: 2,
      slug: 'waiheke-house-cheshire-architects',
      title: 'A Process of Discovery – Waiheke House by Cheshire Architects',
      category: 'BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE',
      image: '/images/trending/waiheke-house.jpg',
      hasVideo: true
    },
    {
      id: 3,
      slug: 'waimataruru-pac-studio',
      title: 'A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design',
      category: 'VIDEO FEATURE',
      image: '/images/trending/waimataruru.jpg',
      hasVideo: true
    },
    {
      id: 4,
      slug: 'palms-residence-olson-kundig',
      title: 'Forming Deep Connections – Palms Residence by Olson Kundig',
      category: 'VIDEO FEATURE',
      image: '/images/trending/palms-residence.jpg',
      hasVideo: true
    },
    {
      id: 5,
      slug: 'yukari-house-tanev-muir',
      title: 'Yukari House by Tanev Muir Architects',
      category: 'VIDEO FEATURE',
      image: '/images/trending/yukari-house.jpg',
      hasVideo: true
    }
  ];

  return (
    <div className={styles['marketplace-page']}>
      {/* Page Header */}
      <div className={styles['page-header']}>
        <h1>THE LOCAL MARKETPLACE</h1>
        
        <p className={styles['header-description']}>
          A curated selection, The Local Marketplace showcases the breadth and quality of local designers, makers and distributors working across Australia, New Zealand and North America.
        </p>
      </div>
      
      <div className={styles.horizontalLine} />
      
      <div className={styles.content}>
        {/* Product Directory Section */}
        <div className={styles.directorySection}>
          <div className={styles.directoryInfo}>
            <h2>Product Directory</h2>
            <p>
              The Local Marketplace is proud to present a curated selection of 
              design. From furniture to lighting, textiles to stone, bathware to 
              fireplaces, the local designers, makers and distributors featured here 
              represent the diversity and inimitable quality of original authentic 
              design.
            </p>
            <Link href="/marketplace/product-directory" className={styles.viewAllButton}>
              VIEW ALL
            </Link>
          </div>
          
          <div className={styles.directoryImage}>
            <Image 
              src="/images/marketplace-feature.jpg" 
              alt="Marketplace feature image" 
              width={800} 
              height={600} 
              layout="responsive"
            />
          </div>
        </div>
        
        {/* Categories Section */}
        <div className={styles.categoriesSection}>
          <div className={styles.categoryGrid}>
            {/* Category 1 */}
            <Link href="/marketplace/bed-linen" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/bed-linen.jpg" 
                  alt="Bed Linen" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Bed Linen</h3>
            </Link>
            
            {/* Category 2 */}
            <Link href="/marketplace/storage" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/storage.jpg" 
                  alt="Storage" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Storage</h3>
            </Link>
            
            {/* Category 3 */}
            <Link href="/marketplace/rugs" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/rugs.jpg" 
                  alt="Rugs" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Rugs</h3>
            </Link>
            
            {/* Category 4 */}
            <Link href="/marketplace/dining-chairs" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/dining-chairs.jpg" 
                  alt="Dining Chairs" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Dining Chairs</h3>
            </Link>
            
            {/* Category 5 */}
            <Link href="/marketplace/lighting" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/lighting.jpg" 
                  alt="Lighting" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Lighting</h3>
            </Link>
            
            {/* Category 6 */}
            <Link href="/marketplace/outdoor-garden" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/outdoor-garden.jpg" 
                  alt="Outdoor & Garden" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Outdoor & Garden</h3>
            </Link>
            
            {/* Category 7 */}
            <Link href="/marketplace/coffee-side-tables" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/coffee-side-tables.jpg" 
                  alt="Coffee & Side Tables" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Coffee & Side Tables</h3>
            </Link>
            
            {/* Category 8 */}
            <Link href="/marketplace/objects" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <Image 
                  src="/images/objects.jpg" 
                  alt="Objects" 
                  width={400} 
                  height={300} 
                  layout="responsive"
                />
              </div>
              <h3>Objects</h3>
            </Link>
          </div>
          
          <div className={styles.viewAllContainer}>
            <Link href="/marketplace/product-directory" className={styles.viewAllButton}>
              VIEW ALL
            </Link>
          </div>
        </div>
        
        <div className={styles.horizontalLine} />
        
        <div className={styles.featuredProductsSection}>
          <h2>FEATURED PRODUCTS</h2>
          
          <div className={styles.featuredProductsGrid}>
            {/* Product 1 */}
            <Link href="/marketplace/products/nota" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/nota.jpg" 
                  alt="Nota wall light" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>BOFFI | DE PADOVA</span>
                <h3>Nota</h3>
              </div>
            </Link>
            
            {/* Product 2 */}
            <Link href="/marketplace/products/bath-tray-cement" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/bath-tray.jpg" 
                  alt="Bath Tray - Cement" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>TF DESIGNS</span>
                <h3>Bath Tray - Cement</h3>
              </div>
            </Link>
            
            {/* Product 3 */}
            <Link href="/marketplace/products/cape-verde" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/cape-verde.jpg" 
                  alt="Cape Verde stone" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>BC STONE</span>
                <h3>Cape Verde</h3>
              </div>
            </Link>
            
            {/* Product 4 */}
            <Link href="/marketplace/products/studie-chair" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/studie-chair.jpg" 
                  alt="STUDIE chair" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>FERMOB</span>
                <h3>STUDIE chair</h3>
              </div>
            </Link>
            
            {/* Product 5 */}
            <Link href="/marketplace/products/honey-table-lamp" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/honey-lamp.jpg" 
                  alt="Honey Table Lamp" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>COCO FLIP</span>
                <h3>Honey Table Lamp</h3>
              </div>
            </Link>
            
            {/* Product 6 */}
            <Link href="/marketplace/products/wittmann-miles-sofa" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/miles-sofa.jpg" 
                  alt="Wittmann Miles Sofa" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>DOMO</span>
                <h3>Wittmann Miles Sofa</h3>
              </div>
            </Link>
            
            {/* Product 7 */}
            <Link href="/marketplace/products/slit-table" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/slit-table.jpg" 
                  alt="Slit Table" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>HAY</span>
                <h3>Slit Table</h3>
              </div>
            </Link>
            
            {/* Product 8 */}
            <Link href="/marketplace/products/semper-vase" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/semper-vase.jpg" 
                  alt="Semper Vase" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>NEW VOLUMES™</span>
                <h3>Semper Vase</h3>
              </div>
            </Link>
            
            {/* Product 9 */}
            <Link href="/marketplace/products/fin-bedside-tofu" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/fin-bedside.jpg" 
                  alt="Fin Bedside in Tofu" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>ELLISON STUDIOS.</span>
                <h3>Fin Bedside in Tofu</h3>
              </div>
            </Link>
            
            {/* Product 10 */}
            <Link href="/marketplace/products/grid-shelving" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/grid-shelving.jpg" 
                  alt="Grid Shelving" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>ELAN PLUS</span>
                <h3>Grid Shelving</h3>
              </div>
            </Link>
            
            {/* Product 11 */}
            <Link href="/marketplace/products/petra-basin" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/petra-basin.jpg" 
                  alt="Petra Basin" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>AGAPE</span>
                <h3>Petra Basin</h3>
              </div>
            </Link>
            
            {/* Product 12 */}
            <Link href="/marketplace/products/utzon-lounge-chair" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image 
                  src="/images/products/utzon-chair.jpg" 
                  alt="Utzon(s) Lounge Chair" 
                  width={400} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.brandName}>ECO OUTDOOR</span>
                <h3>Utzon(s) Lounge Chair</h3>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Designer Spotlight Section */}
        <div className={styles.designerSpotlightSection}>
          <div className={styles.designerSpotlightOverlay}>
            <span className={styles.designerLabel}>DESIGNER SPOTLIGHT</span>
            <h2 className={styles.designerName}>Living Edge</h2>
            <Link href="/marketplace/designers/living-edge" className={styles.viewProfileButton}>
              VIEW PROFILE
            </Link>
          </div>
          <div className={styles.designerSpotlightImage}>
            <Image 
              src="/images/designer-spotlight.jpg" 
              alt="Living Edge Designer Spotlight" 
              width={1920} 
              height={600} 
              layout="responsive"
              priority
            />
          </div>
        </div>

        {/* Featured Brands and Designers */}
        <div className={styles.featuredBrandsSection}>
          <h2>FEATURED BRANDS AND DESIGNERS</h2>
          
          <div className={styles.brandsGrid}>
            {/* Brand 1 */}
            <div className={styles.brandCard}>
              <div className={styles.brandImage}>
                <Image 
                  src="/images/brands/fomu.jpg" 
                  alt="Fomu studio" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Fomu</h3>
              <p>Fomu, is the studio with an aim to design and create objects which embody simplicity while using beautifully considered form and details to enhance the overall functionality of the design.</p>
            </div>
            
            {/* Brand 2 */}
            <div className={styles.brandCard}>
              <div className={styles.brandImage}>
                <Image 
                  src="/images/brands/brickworks.jpg" 
                  alt="Brickworks building" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Brickworks</h3>
              <p>Brickworks Building Products is one of the world's largest and most diverse building material manufacturers.</p>
            </div>
            
            {/* Brand 3 */}
            <div className={styles.brandCard}>
              <div className={styles.brandImage}>
                <Image 
                  src="/images/brands/merging-design.jpg" 
                  alt="Merging Design Sensibilities products" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Merging Design Sensibilities – Hanna Hygge</h3>
              <p>Designed with an Australian sensibility and made with quality and integrity, Melbourne-based homeware and lifestyle brand Hanna Hygge celebrates locally designed items for interior spaces.</p>
            </div>
          </div>
          
          <div className={styles.viewAllContainer}>
            <Link href="/marketplace/brands" className={styles.viewAllButton}>
              VIEW ALL BRANDS
            </Link>
          </div>
        </div>

        <div className={styles.horizontalLine} />

        {/* Creative Lighting Solutions Section */}
        <div className={styles.creativeSpotlightSection}>
          <div className={styles.spotlightLeft}>
            <span className={styles.spotlightLabel}>DESIGNER SPOTLIGHT</span>
            <h2 className={styles.spotlightTitle}>Creative Lighting Solutions</h2>
            <Link href="/marketplace/designers/creative-lighting" className={styles.viewProfileButtonOutline}>
              VIEW PROFILE
            </Link>
          </div>
          <div className={styles.spotlightRight}>
            <Image 
              src="/images/creative-lighting.jpg" 
              alt="Creative Lighting Solutions" 
              width={800} 
              height={600} 
              layout="responsive"
            />
          </div>
        </div>

        <div className={styles.horizontalLine} />

        {/* Browse by Spaces and Rooms Section */}
        <div className={styles.spacesByRoomsSection}>
          <h2>BROWSE BY SPACES AND ROOMS</h2>
          
          <div className={styles.roomsGrid}>
            {/* Room 1 */}
            <Link href="/marketplace/rooms/bathroom" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/bathroom.jpg" 
                  alt="Bathroom" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Bathroom</h3>
            </Link>
            
            {/* Room 2 */}
            <Link href="/marketplace/rooms/bedroom" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/bedroom.jpg" 
                  alt="Bedroom" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Bedroom</h3>
            </Link>
            
            {/* Room 3 */}
            <Link href="/marketplace/rooms/dining-room" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/dining-room.jpg" 
                  alt="Dining Room" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Dining Room</h3>
            </Link>
            
            {/* Room 4 */}
            <Link href="/marketplace/rooms/home-office" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/home-office.jpg" 
                  alt="Home Office" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Home Office</h3>
            </Link>
            
            {/* Room 5 */}
            <Link href="/marketplace/rooms/kitchen" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/kitchen.jpg" 
                  alt="Kitchen" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Kitchen</h3>
            </Link>
            
            {/* Room 6 */}
            <Link href="/marketplace/rooms/boardroom" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/boardroom.jpg" 
                  alt="Boardroom" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Boardroom</h3>
            </Link>
            
            {/* Room 7 */}
            <Link href="/marketplace/rooms/outdoor-garden" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/outdoor-garden.jpg" 
                  alt="Outdoor & Garden" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Outdoor & Garden</h3>
            </Link>
            
            {/* Room 8 */}
            <Link href="/marketplace/rooms/living-room" className={styles.roomCard}>
              <div className={styles.roomImage}>
                <Image 
                  src="/images/rooms/living-room.jpg" 
                  alt="Living Room" 
                  width={600} 
                  height={450} 
                  layout="responsive"
                />
              </div>
              <h3>Living Room</h3>
            </Link>
          </div>
          
          <div className={styles.viewAllContainer}>
            <Link href="/marketplace/rooms" className={styles.viewAllButton}>
              VIEW ALL
            </Link>
          </div>
        </div>

        <div className={styles.horizontalLine} />

        {/* Get Featured Section */}
        <div className={styles.getFeaturedSection}>
          <div className={styles.getFeaturedContent}>
            <h2>Get featured on The Local Marketplace</h2>
            <p>
              If you're interested in being featured on The Local Marketplace, 
              contact us to enquire about the process of being listed and to receive 
              a copy of our media kit.
            </p>
            <Link href="/marketplace/enquire" className={styles.enquireButton}>
              ENQUIRE NOW
            </Link>
          </div>
          <div className={styles.getFeaturedImage}>
            <Image 
              src="/images/get-featured.jpg" 
              alt="Get featured on The Local Marketplace" 
              width={600} 
              height={600} 
              layout="responsive"
              priority
            />
          </div>
        </div>

        <div className={styles.horizontalLine} />

        {/* Two Column Image Section */}
        <div className={styles.twoColumnImageSection}>
          <div className={styles.imageColumn}>
            <Image 
              src="/images/exterior-architecture.jpg" 
              alt="Exterior Architecture" 
              width={800} 
              height={600} 
              layout="responsive"
            />
          </div>
          <div className={styles.imageColumn}>
            <Image 
              src="/images/interior-design.jpg" 
              alt="Interior Design" 
              width={800} 
              height={600} 
              layout="responsive"
            />
          </div>
        </div>

        {/* Featured Project Section */}
        <div className={styles.featuredProjectSection}>
          <span className={styles.projectLabel}>FEATURED PROJECT</span>
          <h2>HOUSE OF HORNS BY WOJR</h2>
          <p>With a stunning roofline comprising crests and troughs, House of Horns boldly asserts its presence in its rugged California locale.</p>
          <Link href="/marketplace/projects/house-of-horns" className={styles.viewProjectButton}>
            VIEW PROJECT
          </Link>
        </div>

        <div className={styles.horizontalLine} />

        {/* Featured Projects Grid */}
        <div className={styles.featuredProjectsGrid}>
          <h2>FEATURED PROJECTS</h2>
          <div className={styles.projectsGrid}>
            {/* First Row Projects */}
            <Link href="/marketplace/projects/lizard-island" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/lizard-island.jpg" alt="The House at Lizard Island by JDA Co" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>The House at Lizard Island by JDA Co</h3>
            </Link>

            <Link href="/marketplace/projects/house-of-horns" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/house-of-horns.jpg" alt="House of Horns by WOJR" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>House of Horns by WOJR</h3>
            </Link>

            <Link href="/marketplace/projects/ararat-house" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/ararat-house.jpg" alt="Ararat House by SJB" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>Ararat House by SJB</h3>
            </Link>

            <Link href="/marketplace/projects/emerald-sound" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/emerald-sound.jpg" alt="Emerald Sound" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>Emerald Sound by Luigi Rosselli Architects and Atelier Alwill</h3>
            </Link>

            {/* Second Row Projects */}
            <Link href="/marketplace/projects/hilltop" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/hilltop.jpg" alt="Hilltop by Flack Studio" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>Hilltop by Flack Studio</h3>
            </Link>

            <Link href="/marketplace/projects/whale-beach" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/whale-beach.jpg" alt="Whale Beach by Shaun Lockyer Architects" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>Whale Beach by Shaun Lockyer Architects</h3>
            </Link>

            <Link href="/marketplace/projects/dune-house" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/dune-house.jpg" alt="Dune House" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>Dune House by Gezellig Interiors and Architecture Bureau</h3>
            </Link>

            <Link href="/marketplace/projects/mandeville-canyon" className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image src="/images/projects/mandeville-canyon.jpg" alt="Mandeville Canyon" width={600} height={450} layout="responsive" />
              </div>
              <span>ISSUE 17 FEATURE</span>
              <h3>Mandeville Canyon by Marmol Radziner</h3>
            </Link>
          </div>
          
          <div className={styles.viewAllContainer}>
            <Link href="/marketplace/spaces" className={styles.viewAllSpacesButton}>
              VIEW ALL SPACES
            </Link>
          </div>
        </div>

        <div className={styles.horizontalLine} />
 
        {/* Community Section */}
        <div className={styles.communitySection}>
          <div className={styles.communityContent}>
            <h2>THE LOCAL PROJECT</h2>
            <h3>Community</h3>
            <p>Sign up to our mailing list for the best of local architecture, interiors and design delivered to your inbox.</p>
            
            <div className={styles.emailSignupContainer}>
              <div className={styles.emailSignup}>
                <input 
                  type="email" 
                  placeholder="Enter Your Email Here" 
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.submitArrow}>
                  →
                </button>
              </div>
              
              <div className={styles.recaptcha}>
                <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.horizontalLine} />

        {/* Remove the hard-coded trending section and only keep the component */}
        <TrendingNow 
          articles={trendingArticles} 
          heading="TRENDING NOW"
        />
      </div>

      <div className={styles.divider} />
    </div>
  );
} 