import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { ProjectsDetailsPageComponent } from './components/pages/case-studies-details-page/case-studies-details-page.component';
import { Projects2DetailsPageComponent } from './components/pages/case-studies-details-page2/case-studies-details-page.component';
import { Projects3DetailsPageComponent } from './components/pages/case-studies-details-page3/case-studies-details-page.component';
import { Projects4DetailsPageComponent } from './components/pages/case-studies-details-page4/case-studies-details-page.component';
import { ProjectsPageComponent } from './components/pages/case-studies-page/case-studies-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ServicesDetailsPageComponent } from './components/pages/services-details-page/services-details-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ShopPageComponent } from './components/pages/shop-page/shop-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';

const routes: Routes = [
    { path: '', component: HomeDemoThreeComponent },
    { path: 'index-2', component: HomeDemoTwoComponent },
    { path: 'dark-home', component: HomeDemoThreeComponent },
    { path: 'light-home', component: HomeDemoFourComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'skills', component: TeamPageComponent },
    { path: 'pricing', component: PricingPageComponent },
    { path: 'news', component: ServicesPageComponent },
    { path: 'news-details', component: ServicesDetailsPageComponent },
    { path: 'projects', component: ProjectsPageComponent },
    {
        path: 'projects-details',
        component: ProjectsDetailsPageComponent,
    },
    {
        path: 'projects-details2',
        component: Projects2DetailsPageComponent,
    },
    {
        path: 'projects-details3',
        component: Projects3DetailsPageComponent,
    },
    {
        path: 'projects-details4',
        component: Projects4DetailsPageComponent,
    },
    { path: 'blog-grid', component: BlogGridPageComponent },
    { path: 'cats', component: FeedbackPageComponent },
    { path: 'faq', component: FaqPageComponent },
    { path: 'products', component: ShopPageComponent },
    { path: 'products-details', component: ProductsDetailsPageComponent },
    { path: 'cart', component: CartPageComponent },
    { path: 'checkout', component: CheckoutPageComponent },
    { path: 'hobbies', component: TermsConditionsPageComponent },
    { path: 'motherland', component: PrivacyPolicyPageComponent },
    { path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent },
    { path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent },
    { path: 'blog-details', component: BlogDetailsPageComponent },
    { path: 'profile-authentication', component: MyAccountPageComponent },
    { path: 'contact', component: ContactPageComponent },
    // Here add new pages component

    { path: '**', component: NotFoundComponent }, // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
