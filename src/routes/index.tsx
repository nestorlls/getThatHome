import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '@pages/home/home.page';
import { Footer, Header } from '@components/pageComponents';
import { SignUpSeeker, Signup, SignupLandLord } from '@pages/index';

export const RoutesPages: React.FC = (): React.JSX.Element => {
  const token = false;
  return (
    <BrowserRouter>
      <Header />
      {/* <span className="block h-[4rem]"></span> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {token ? (
          <>
            <Route path="/my-properties" element={'My properties'} />
            <Route path="/profile" element={'Profile'} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/:role" element={<SignupLandLord />} />
            <Route path="/signup/homeseeker" element={<SignUpSeeker />} />

            <Route path="/login" element={'Join'} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
