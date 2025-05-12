"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        width: '100%', 
        height: '85vh',
        marginBottom: '80px'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
          {/* Hero Image */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}>
            <Image 
              src="/images/hero-image.jpg" 
              alt="Habitats: City, Coast and Forest" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Overlay gradient */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '40%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
              zIndex: 2
            }} />
          </div>
          
          {/* Hero Content */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            zIndex: 3,
            color: 'white',
            maxWidth: '500px'
          }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 500,
              marginBottom: '15px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>HABITATS: CITY, COAST AND FOREST</h2>
            <p style={{
              fontSize: '18px',
              marginBottom: '25px',
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}>A collectable trio of hardcover books</p>
            <Link href="/publications/books" style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'black',
              padding: '14px 35px',
              fontSize: '13px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}>
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section style={{
        padding: '0 40px',
        margin: '0 auto 100px',
        maxWidth: '1400px'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 400,
          marginBottom: '40px',
          textAlign: 'center',
          fontFamily: 'serif',
          letterSpacing: '1px'
        }}>Featured Projects</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {/* Project 1 - Large */}
          <div style={{ 
            gridColumn: 'span 2',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'relative', 
              height: '500px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/project-1.jpg" 
                alt="Clovelly House by Madeleine Blanchfield Architects" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                color: 'white',
                zIndex: 2
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '5px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>RESIDENTIAL</p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 400,
                  fontFamily: 'serif'
                }}>Clovelly House by Madeleine Blanchfield Architects</h3>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              height: '500px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/project-2.jpg" 
                alt="Armadale Residence by Studio Bright" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                color: 'white',
                zIndex: 2
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '5px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>RESIDENTIAL</p>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  fontFamily: 'serif'
                }}>Armadale Residence by Studio Bright</h3>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              height: '400px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/project-3.jpg" 
                alt="Paddington Terrace by Smac Studio" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                color: 'white',
                zIndex: 2
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '5px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>RESIDENTIAL</p>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  fontFamily: 'serif'
                }}>Paddington Terrace by Smac Studio</h3>
              </div>
            </div>
          </div>
          
          {/* Project 4 - Large */}
          <div style={{ 
            gridColumn: 'span 2',
            position: 'relative'
          }}>
            <div style={{ 
              position: 'relative', 
              height: '400px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/project-4.jpg" 
                alt="Woollahra House by Porebski Architects" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                color: 'white',
                zIndex: 2
              }}>
                <p style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  marginBottom: '5px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>RESIDENTIAL</p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 400,
                  fontFamily: 'serif'
                }}>Woollahra House by Porebski Architects</h3>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/articles" style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            border: '1px solid #1a1a1a',
            color: '#1a1a1a',
            padding: '14px 35px',
            fontSize: '13px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}>
            View All Projects
          </Link>
        </div>
      </section>

      {/* Issue Promotion */}
      <section style={{
        padding: '0 40px',
        margin: '0 auto 100px',
        maxWidth: '1400px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px'
        }}>
          <div style={{ flex: 1, maxWidth: '600px' }}>
            <Image 
              src="/images/issue-17.jpg" 
              alt="Issue No.17 trio out now" 
              width={600}
              height={400}
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: 'auto'
              }}
            />
          </div>
          <div style={{ 
            flex: 1, 
            textAlign: 'left',
            maxWidth: '500px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 400,
              marginBottom: '25px',
              fontFamily: 'serif',
              letterSpacing: '1px'
            }}>Issue No.17 trio out now</h2>
            <p style={{
              fontSize: '16px',
              lineHeight: 1.8,
              marginBottom: '35px',
              color: '#333'
            }}>
              Issue No. 17 features work from JDA Co, WOJR, Luigi Rosselli Architects and Atelier Alwill, 
              Flack Studio, SJB, Marmol Radziner, Shaun Lockyer Architects, OWIU Design, Gezellig Interiors 
              and Architecture Bureau, JAM Architects and more.
            </p>
            <Link href="/publications/magazine" style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid #1a1a1a',
              color: '#1a1a1a',
              padding: '14px 35px',
              fontSize: '13px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}>
              Order now
            </Link>
          </div>
        </div>
      </section>

      {/* Video Feature */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        marginBottom: '100px'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>
          {/* Video Feature Image */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}>
            <Image 
              src="/images/video-feature.jpg" 
              alt="Te Arai Beach House by Fearon Hay and Sonja Hawkins Design" 
              fill
              style={{ objectFit: 'cover' }}
            />
            {/* Overlay gradient */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '50%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              zIndex: 2
            }} />
            
            {/* Play button */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              cursor: 'pointer'
            }}>
              <div style={{
                width: '0',
                height: '0',
                borderTop: '15px solid transparent',
                borderBottom: '15px solid transparent',
                borderLeft: '25px solid white',
                marginLeft: '5px'
              }} />
            </div>
          </div>
          
          {/* Video Feature Content */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            zIndex: 3,
            color: 'white',
            maxWidth: '600px'
          }}>
            <p style={{
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '15px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>VIDEO FEATURE</p>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 400,
              marginBottom: '25px',
              fontFamily: 'serif',
              letterSpacing: '0.5px',
              lineHeight: 1.3
            }}>Te Arai Beach House by Fearon Hay and Sonja Hawkins Design</h2>
            <Link href="/videos/residential" style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'black',
              padding: '14px 35px',
              fontSize: '13px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'all 0.3s ease'
            }}>
              Watch Now
            </Link>
          </div>
        </div>
      </section>

      {/* The Local Marketplace */}
      <section style={{
        padding: '0 40px',
        margin: '0 auto 100px',
        maxWidth: '1400px'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 400,
          marginBottom: '50px',
          textAlign: 'center',
          fontFamily: 'serif',
          letterSpacing: '1px'
        }}>The Local Marketplace</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {/* Product 1 */}
          <div style={{ cursor: 'pointer' }}>
            <div style={{ 
              marginBottom: '20px', 
              position: 'relative', 
              height: '300px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/product-1.jpg" 
                alt="Nota by Boffi | De Padova" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '1px',
              color: '#666'
            }}>BOFFI | DE PADOVA</p>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              marginBottom: '10px',
              fontFamily: 'serif'
            }}>Nota</h3>
          </div>
          
          {/* Product 2 */}
          <div style={{ cursor: 'pointer' }}>
            <div style={{ 
              marginBottom: '20px', 
              position: 'relative', 
              height: '300px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/product-2.jpg" 
                alt="Bath Tray - Cement by TF Designs" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '1px',
              color: '#666'
            }}>TF DESIGNS</p>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              marginBottom: '10px',
              fontFamily: 'serif'
            }}>Bath Tray - Cement</h3>
          </div>
          
          {/* Product 3 */}
          <div style={{ cursor: 'pointer' }}>
            <div style={{ 
              marginBottom: '20px', 
              position: 'relative', 
              height: '300px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/product-3.jpg" 
                alt="Cape Verde by BC Stone" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '1px',
              color: '#666'
            }}>BC STONE</p>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              marginBottom: '10px',
              fontFamily: 'serif'
            }}>Cape Verde</h3>
          </div>
          
          {/* Product 4 */}
          <div style={{ cursor: 'pointer' }}>
            <div style={{ 
              marginBottom: '20px', 
              position: 'relative', 
              height: '300px',
              overflow: 'hidden'
            }}>
              <Image 
                src="/images/product-4.jpg" 
                alt="STUDIE chair by Fermob" 
                fill
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
            <p style={{
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '8px',
              letterSpacing: '1px',
              color: '#666'
            }}>FERMOB</p>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 400,
              marginBottom: '10px',
              fontFamily: 'serif'
            }}>STUDIE chair</h3>
          </div>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/marketplace" style={{
            display: 'inline-block',
            backgroundColor: 'transparent',
            border: '1px solid #1a1a1a',
            color: '#1a1a1a',
            padding: '14px 35px',
            fontSize: '13px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}>
            View All Products
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 400,
            marginBottom: '25px',
            fontFamily: 'serif',
            letterSpacing: '1px'
          }}>THE LOCAL PROJECT Community</h2>
          
          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            marginBottom: '35px',
            fontWeight: 300
          }}>
            Sign up to our mailing list for the best of local architecture, interiors and design delivered to your inbox.
          </p>
          
          <form style={{
            display: 'flex',
            maxWidth: '450px',
            margin: '0 auto'
          }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              style={{
                flex: 1,
                padding: '16px 20px',
                border: 'none',
                fontSize: '14px',
                fontWeight: 300
              }}
            />
            <button 
              type="submit"
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                padding: '0 25px',
                fontSize: '13px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontWeight: 500
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
