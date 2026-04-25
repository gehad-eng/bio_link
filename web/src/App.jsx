import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ProfileSection from '@/components/ProfileSection';
import SocialLinks from '@/components/SocialLinks';
import ActionButtons from '@/components/ActionButtons';
import BackgroundSettings from '@/components/BackgroundSettings';
import { Toaster } from '@/components/ui/toaster';

const backgrounds = {
  image1: 'bg-cover bg-center',
  image2: 'bg-cover bg-center',
  image3: 'bg-cover bg-center',
  image5: 'bg-cover bg-center',
  image6: 'bg-cover bg-center',
  image7: 'bg-cover bg-center',
};

const backgroundImages = {
  image1: 'https://horizons-cdn.hostinger.com/75b03de3-a659-4aa0-a5be-e65d0ca0ea9e/401e2759188f67358cccaf35d7a1d8dc.jpg',
  image2: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80',
  image3: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80',
  image5: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  image6: 'https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=1170',
  image7: 'https://images.unsplash.com/photo-1668896379676-c349528c9023?q=80&w=735&',
};

const backgroundIds = Object.keys(backgrounds);

function App() {
  const [background, setBackground] = useState('image1');

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground((prev) => {
        const currentIndex = backgroundIds.indexOf(prev);
        const nextIndex = (currentIndex + 1) % backgroundIds.length;
        return backgroundIds[nextIndex];
      });
    }, 2500); // Changes background every 5 seconds (5000ms)

    return () => clearInterval(interval);
  }, []);

  const getBackgroundStyle = () => {
    if (background.startsWith('image')) {
      return {
        backgroundImage: `url(${backgroundImages[background]})`,
      };
    }
    return {};
  };

  return (
    <>
      <Helmet>
        <title>Gehad Dahman | Software Engineering</title>
        <meta name="description" content="Connect with Gehad Dahman. Software Engineering portfolio and social links." />
      </Helmet>
      <div 
        className={`min-h-screen ${backgrounds[background]} transition-all duration-500`}
        style={getBackgroundStyle()}
      >
        <div className="min-h-screen bg-black/30">
          <BackgroundSettings 
            currentBackground={background}
            onBackgroundChange={setBackground}
          />
          
          <div className="container mx-auto px-4 pt-24 pb-[160px] max-w-2xl sm:pt-[120px] sm:pb-[160px]">
            <div className="space-y-8">
              <ProfileSection />
              <SocialLinks />
              <ActionButtons />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;