import { Visual } from "../../src/visual";
var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
if (typeof window[powerbiKey] === "undefined") {
    powerbi = window[powerbiKey] = {};
}
powerbi.visuals = powerbi.visuals || {};
powerbi.visuals.plugins = powerbi.visuals.plugins || {};
powerbi.visuals.plugins["helloD3v5C4F919DF14F74163B9399237B1E80236_DEBUG"] = {
    name: 'helloD3v5C4F919DF14F74163B9399237B1E80236_DEBUG',
    displayName: 'helloD3v5',
    class: 'Visual',
    version: '1.0.0',
    apiVersion: '2.2.0',
    create: (options) => {
        if (Visual) {
            return new Visual(options);
        }

        console.error('Visual instance not found');
    },
    custom: true
};