import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import PWAPrompt from 'react-ios-pwa-prompt';
import { Helmet } from 'react-helmet';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import './Temp.css';

// HTML components
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ServiceMenu from './components/layout/ServiceMenu';
import Footer from './components/layout/Footer';
import Alerting from './components/layout/Alerting';
import AboutPage from './components/about-parts/AboutPage';
import ContactPage from './components/contact-parts/ContactPage';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddAddress from './components/profile-form/AddAddress';
import AddProduct from './components/profile-form/AddProduct';
import ServicesHome from './components/services/ServicesHome';
import MailChimp from './components/extras/MailChimp';
import Profiles from './components/profiles/Profiles';
import HeatingPage from './components/services/heating/HeatingPage';
import CoolingPage from './components/services/cooling/CoolingPage';
import WaterPage from './components/services/water/WaterPage';
import AirPage from './components/services/air/AirPage';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import PostForm from './components/posts/PostForm';
import Post from './components/post/Post';
import Quotes from './components/quotes/Quotes';
import Quote from './components/quote/Quote';
import Tickets from './components/tickets/Tickets';
import Ticket from './components/ticket/Ticket';
import Emails from './components/emails/Emails';
import ComfortManuals from './components/manuals/comfortmaker/ComfortManuals';
import FujitsuPage from './components/manuals/fujitsu/FujitsuPage';
import Comments from './components/comments/Comments';
import CommentEdition from './components/comments/CommentEdition';
import ReviewsPage from './components/reviews/ReviewsPage';
import ThankYou from './components/layout/ThankYou';
import NotFound from './components/layout/NotFound';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Helmet
                    titleTemplate='%s | Cool Pro Mechanical'
                    defaultTitle='Cool Pro Mechanical'
                >
                    <meta
                        name='description'
                        content="An old and outdated system will increase your monthly electric bill exponentially, and that it's not good for your pocket. Cool Pro Mechanical is here to help you save."
                    />
                </Helmet>
                <div className='wrapper'>
                    <div className='the-messages'>
                        <Alerting />
                    </div>
                    <section className='menu-services-mobile'>
                        <ServiceMenu />
                    </section>
                    <TopBar />
                    <Navbar />

                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <div className='content'>
                            <Switch>
                                <Route
                                    exact
                                    path='/register'
                                    component={Register}
                                />
                                <Route exact path='/login' component={Login} />
                                <PrivateRoute
                                    exact
                                    path='/dashboard'
                                    component={Dashboard}
                                />
                                <PrivateRoute
                                    exact
                                    path='/create-profile'
                                    component={CreateProfile}
                                />
                                <PrivateRoute
                                    exact
                                    path='/edit-profile'
                                    component={EditProfile}
                                />
                                <PrivateRoute
                                    exact
                                    path='/new-address'
                                    component={AddAddress}
                                />
                                <PrivateRoute
                                    exact
                                    path='/register-product'
                                    component={AddProduct}
                                />
                                <PrivateRoute
                                    exact
                                    path='/clients-and-prospects'
                                    component={Profiles}
                                />
                                <PrivateRoute
                                    exact
                                    path='/profile/:id'
                                    component={Profile}
                                />
                                <PrivateRoute
                                    exact
                                    path='/inbox'
                                    component={Emails}
                                />
                                <PrivateRoute
                                    exact
                                    path='/user-comments'
                                    component={Comments}
                                />
                                <PrivateRoute
                                    exact
                                    path='/new-post'
                                    component={PostForm}
                                />
                                <PrivateRoute
                                    exact
                                    path='/quotes'
                                    component={Quotes}
                                />
                                <PrivateRoute
                                    exact
                                    path='/quotes/:id'
                                    component={Quote}
                                />
                                <PrivateRoute
                                    exact
                                    path='/tickets'
                                    component={Tickets}
                                />
                                <PrivateRoute
                                    exact
                                    path='/tickets/:id'
                                    component={Ticket}
                                />
                                <PrivateRoute
                                    exact
                                    path='/review-commment/:id/:commentid'
                                    component={CommentEdition}
                                />
                                <Route
                                    exact
                                    path='/about-cool-pro'
                                    component={AboutPage}
                                />
                                <Route
                                    exact
                                    path='/contact-cool-pro'
                                    component={ContactPage}
                                />
                                <Route
                                    exact
                                    path='/cool-pro-mechanical-services'
                                    component={ServicesHome}
                                />
                                <Route
                                    exact
                                    path='/services/heating-systems'
                                    component={HeatingPage}
                                />
                                <Route
                                    exact
                                    path='/services/cooling-systems'
                                    component={CoolingPage}
                                />
                                <Route
                                    exact
                                    path='/services/water-systems'
                                    component={WaterPage}
                                />
                                <Route
                                    exact
                                    path='/services/air-systems'
                                    component={AirPage}
                                />
                                <Route
                                    exact
                                    path='/reviews'
                                    component={ReviewsPage}
                                />
                                <Route
                                    exact
                                    path='/blog-and-tips'
                                    component={Posts}
                                />
                                <Route
                                    exact
                                    path='/blog-and-tips/:id'
                                    component={Post}
                                />
                                <Route
                                    exact
                                    path='/comfortmaker-air-conditioning-and-heating'
                                    component={ComfortManuals}
                                />
                                <Route
                                    exact
                                    path='/fujitsu-general'
                                    component={FujitsuPage}
                                />
                                <Route
                                    exact
                                    path='/thank-you'
                                    component={ThankYou}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </Switch>

                    <MailChimp />
                    <Footer />
                </div>
                <PWAPrompt
                    promptOnVisit={1}
                    timesToShow={3}
                    copyClosePrompt='Close'
                    permanentlyHideOnDismiss={false}
                />
            </Router>
        </Provider>
    );
};

export default App;
