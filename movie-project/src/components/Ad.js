import React, { Component } from 'react';
import '../App.css';
import { base_url, profile_sizes } from '../secret';
import CelebsList from './CelebsList'
// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const swiper = new Swiper();

class Ad extends Component {
    state = {}
    
    
    render()   { 
        return (
            <div>
            <h3 id = 'adTitle'>Do not Miss, Coming Soon</h3>
                < table >
                <th>
                    <img  className = 'ad' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy3eIVC-eCIcs6BTen0BZVvvY463OYICuyqg&usqp=CAU' />
                    <img  className = 'ad' src = 'https://thewestburytimes.com/wp-content/uploads/2020/07/TNH-Movies.jpg' />
                    <img  className = 'ad' src = 'https://delaramartdesign.com/wp-content/uploads/2020/04/brand-name-movie-posters-lance-ford-16-5e8b09fa00907__700.jpg' />
                    <img  className = 'ad' src = 'https://www.dccomics.com/sites/default/files/styles/comics320x485/public/movie-covers/2018/11/Movies-Thumb_Aquaman2018_single_5bedc81a90d565.98093378.jpg?itok=mIU-SgHr' />
                    <img  className = 'ad' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbTivNX3JOPFMnt-s6fmysCIeJer_wRHuH9Q&usqp=CAU' />
                </th>
                </table>
                </div>
    
         );
    }
}
 
export default Ad;