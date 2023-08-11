import { defineStore } from 'pinia';

export const useRouteStore = defineStore('route', {
    state: () => ({
        route: {
            currentPath:''
        }
    }),
    actions: {
        updatePath (pathInfo) {
            console.log("route", pathInfo, "touched");
            this.route.currentPath = pathInfo;
            
        },
    }

    // getters
})
