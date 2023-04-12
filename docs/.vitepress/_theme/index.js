import DefaultTheme from 'vitepress/theme'
import {
    theme,
    VPHomeHero,
    VPHomeFeatures,
    VPHomeSponsors,
    VPDocAsideSponsors,
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamPageSection,
    VPTeamMembers,
} from 'vitepress/theme'
import Comment from "./comment.vue";

export default {
    ...DefaultTheme,
    ...theme,
    ...VPHomeHero,
    ...VPHomeFeatures,
    ...VPHomeSponsors,
    ...VPDocAsideSponsors,
    ...VPTeamPage,
    ...VPTeamPageTitle,
    ...VPTeamPageSection,
    ...VPTeamMembers,
    enhanceApp({ app, router, siteData }) {
        app.component('Comment', Comment)
    }
}
