import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Events from './Pages/Events'
import Home from './Pages/Home'
import OurArtist from './Pages/OurArtist'
import BookATable from './Pages/BookATable'
import DealsAndOffers from './Pages/DealsAndOffers'
import ClubAboutPage from './Pages/ClubAboutPage'
import PartnerLoginPage from './Pages/PartnerLoginPage'
import UserLoginPage from './Pages/UserLoginPage'

export default function AllRoutes(){
  return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/ourartist" element={<OurArtist/>}/>
        <Route path="/book_a_table" element={<BookATable/>}/>
        <Route path="/deals_and_offers" element={<DealsAndOffers/>}/>
        <Route path="/club_about_page" element={<ClubAboutPage/>}/>
        <Route path="/partner_with_us" element={<PartnerLoginPage/>}/>
        <Route path="/user-login" element={<UserLoginPage/>}/>
    </Routes>
    
    
  
}
